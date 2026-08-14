import {
	type RuleEntry,
	type RuleSource,
	type RuleSources,
	type StrictRuleModule,
	isStrictRuleModule,
} from "./rules.js";

import {formatRuleValue} from "./format.js";

enum Color {
	NONE = "",
	DIM = "\x1b[2m",
	GREEN = "\x1b[32m",
	RED = "\x1b[31m",
	RESET = "\x1b[0m",
}

type RulesByType = Record<string, Map<string, StrictRuleModule>>;

function isSameObject(a: unknown, b: unknown): boolean {
	// TODO: Use a more robust way to compare objects.
	return JSON.stringify(a) === JSON.stringify(b);
}

function printText(text: string, color: Color = Color.NONE, terminate = true): void {
	const colorOpen = color;
	const colorClose = color === Color.NONE || color === Color.RESET ? "" : Color.RESET;
	const terminator = terminate ? "\n" : "";

	process.stdout.write(`${colorOpen}${text}${colorClose}${terminator}`);
}

function printTitle(title: string): void {
	printText(title, Color.RESET);
	printText("");
}

function printComment(comment: string): void {
	printText(`// ${comment}`, Color.DIM);
}

function printRule(name: string, rule: StrictRuleModule, appliedRule: RuleEntry | undefined, eslintRuleSource: RuleSource): void {
	const isRuleApplied = appliedRule !== undefined;
	const isRuleDeprecated = rule.meta.deprecated !== undefined && rule.meta.deprecated !== false;

	const {type} = rule.meta;
	const {description} = rule.meta.docs;

	printComment(`[${type}] ${description}`);

	const defaultOptionsInRule = rule.defaultOptions;
	const defaultOptionsInMeta = rule.meta.defaultOptions;

	if (defaultOptionsInRule !== undefined && defaultOptionsInMeta !== undefined && !isSameObject(defaultOptionsInRule, defaultOptionsInMeta)) {
		throw new Error(`Default options in rule and meta are not the same. Rule: ${name}, ${JSON.stringify(rule)}`);
	}

	const defaultOptions = defaultOptionsInMeta ?? defaultOptionsInRule;

	if (defaultOptions !== undefined) {
		const defaultOptionsJson = JSON.stringify(defaultOptions, null, "\t");

		for (const line of defaultOptionsJson.split("\n")) {
			printComment(line);
		}
	}

	// Check for base rule overrides.
	if (name.startsWith("@typescript-eslint/")) {
		const baseName = rule.name ?? "";

		if (eslintRuleSource.rules[baseName] !== undefined) {
			const isBaseRuleApplied = eslintRuleSource.appliedRules[baseName] !== undefined;

			const ruleText = `"${baseName}": "off",`;

			if (isRuleApplied) {
				if (isBaseRuleApplied) {
					printText(ruleText, Color.GREEN);
				} else {
					printText(ruleText, Color.RED, false);
					printText(" ", Color.NONE, false);
					printComment("Base rule is not applied!");
				}
			} else {
				printComment(ruleText);
			}
		}
	}

	if (isRuleApplied) {
		const ruleText = `"${name}": ${formatRuleValue(appliedRule)},`;

		if (isRuleDeprecated) {
			printText(ruleText, Color.RED, false);
			printText(" ", Color.NONE, false);
			printComment("Deprecated!");
		} else {
			printText(ruleText, Color.GREEN);
		}
	} else {
		const ruleText = `"${name}": "off",`;

		printComment(ruleText);
	}

	printText("");
}

function printRuleSource(name: string, ruleSource: RuleSource, eslintRuleSource: RuleSource): void {
	printTitle(`Rules from ${name}:`);

	const {prefix, rules, appliedRules} = ruleSource;

	const rulesByType: RulesByType = {};

	for (const [ruleName, rule] of Object.entries(rules)) {
		if (!isStrictRuleModule(rule)) {
			throw new Error(`Rule ${ruleName} doesn't follow the strict rule module definition.`);
		}

		const fullRuleName = `${prefix}${ruleName}`;

		// Skip deprecated rules that don't exist in the config.
		if (rule.meta.deprecated !== undefined && rule.meta.deprecated !== false) {
			if (appliedRules[fullRuleName] === undefined) {
				continue;
			}
		}

		const ruleType = rule.meta.type;

		rulesByType[ruleType] ??= new Map();
		rulesByType[ruleType].set(fullRuleName, rule);
	}

	// Don't need to output the type name, just need the rules to be grouped by type.
	for (const ruleSet of Object.values(rulesByType)) {
		for (const [fullRuleName, rule] of ruleSet) {
			const appliedRule = appliedRules[fullRuleName];

			printRule(fullRuleName, rule, appliedRule, eslintRuleSource);
		}
	}
}

export function print(ruleSources: RuleSources): void {
	const eslintRuleSource = ruleSources["eslint"];

	if (eslintRuleSource === undefined) {
		return;
	}

	for (const [name, ruleSource] of Object.entries(ruleSources)) {
		printRuleSource(name, ruleSource, eslintRuleSource);
	}
}
