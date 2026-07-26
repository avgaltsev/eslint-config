/**
 * Utility module to output information about all available rules, applied rules and deprecated rules.
 *
 * This is a JavaScript module, because internal rules implementation (including meta information) is not exported from
 * eslint libraries and needs to be accessed via deep imports, and TypeScript won't allow importing undeclared modules.
 * It's also not possible to write ambient module declarations for relatively imported modules.
 *
 * Use this file carefully, as internal structure of these libraries can be changed over time and everything will break.
 */

// Import rules meta information from eslint libraries.
import eslintRulesImport from "../node_modules/eslint/lib/rules/index.js";
import typescriptEslintPluginRulesImport from "../node_modules/@typescript-eslint/eslint-plugin/dist/rules/index.js";
import stylisticEslintPluginImport from "../node_modules/@stylistic/eslint-plugin/dist/index.js";

// Import current configs with applied rules.
import {configs as eslintConfigs} from "./eslint/index.js";
import {configs as typescriptEslintConfigs} from "./typescriptEslint/index.js";
import {configs as stylisticConfigs} from "./stylistic/index.js";

const COLORS = {
	"description": "\x1b[2m",
	"available": "\x1b[2m",
	"applied": "\x1b[32m",
	"deprecated": "\x1b[31m",
	"reset": "\x1b[0m",
};

// Normalize rules imports to plain objects.
const eslintRules = Object.fromEntries(eslintRulesImport.entries());
const typescriptEslintRules = typescriptEslintPluginRulesImport;
const stylisticRules = stylisticEslintPluginImport.rules;

function flattenRules(configs) {
	return configs.reduce((result, config) => {
		return {
			...result,
			...config.rules,
		};
	}, {});
}

// Build rules sources list.
const ruleSources = {
	["eslint"]: {
		prefix: "",
		rules: eslintRules,
		appliedRules: flattenRules(eslintConfigs),
	},

	["typescript-eslint"]: {
		prefix: "@typescript-eslint/",
		rules: typescriptEslintRules,
		appliedRules: flattenRules(typescriptEslintConfigs),
	},

	["stylistic"]: {
		prefix: "@stylistic/",
		rules: stylisticRules,
		appliedRules: flattenRules(stylisticConfigs),
	},
};

// Output rule information.
function outputRule(name, rule, appliedRule) {
	const isApplied = appliedRule !== undefined;
	const isDeprecated = rule.meta.deprecated;

	const color = !isApplied ? COLORS["available"] : isDeprecated ? COLORS["deprecated"] : COLORS["applied"];
	const value = !isApplied ? "\"off\"" : Array.isArray(appliedRule) ? `["${appliedRule[0]}", ...]` : `"${appliedRule}"`;

	const type = rule.meta.type;
	const description = rule.meta.docs.description;

	console.log(`${COLORS["description"]}// [${type}] ${description}${COLORS["reset"]}`);

	// Check for base rule overrides.
	if (name.startsWith("@typescript-eslint/")) {
		const baseName = name.replace("@typescript-eslint/", "");

		if (ruleSources["eslint"].rules[baseName] !== undefined) {
			const isBaseNotApplied = ruleSources["eslint"].appliedRules[baseName] === undefined;

			const comment = isApplied && isBaseNotApplied ? `${COLORS["description"]} // Base rule is not applied!${COLORS["reset"]}` : "";

			console.log(`${color}${!isApplied ? "// " : ""}"${baseName}": "off",${COLORS["reset"]}${comment}`);
		}
	}

	const comment = isDeprecated ? `${COLORS["description"]} // Deprecated!${COLORS["reset"]}` : "";

	console.log(`${color}${!isApplied ? "// " : ""}"${name}": ${value},${COLORS["reset"]}${comment}\n`);
}

// Output rules source information.
function outputRuleSource(name, ruleSource) {
	console.log(`Rules from ${name}:\n`);

	const {prefix, rules, appliedRules} = ruleSource;

	// const deprecatedRules = new Map();
	const rulesByType = {};

	for (const [ruleName, rule] of Object.entries(rules)) {
		const fullRuleName = `${prefix}${ruleName}`;

		if (rule.meta.deprecated ?? false) {
			if (appliedRules[fullRuleName] === undefined) {
				continue;
			}
		}

		rulesByType[rule.meta.type] = rulesByType[rule.meta.type] ?? new Map();
		rulesByType[rule.meta.type].set(fullRuleName, rule);
	}

	for (const ruleSet of Object.values(rulesByType)) {
		for (const [ruleName, rule] of ruleSet) {
			const appliedRule = appliedRules[ruleName];
			// const state = appliedRules[ruleName] !== undefined ? "applied" : "available";
			// const value = appliedRules[ruleName] ?? "off";

			outputRule(ruleName, rule, appliedRule);
		}
	}

	// if (deprecatedRules.size > 0) {
	// 	console.log("Deprecated rules detected:\n");

	// 	for (const [ruleName, rule] of deprecatedRules) {
	// 		const value = appliedRules[ruleName];

	// 		outputRule(ruleName, rule, "deprecated", value);
	// 	}
	// }
}

export function list() {
	for (const [name, ruleSource] of Object.entries(ruleSources)) {
		outputRuleSource(name, ruleSource);
	}
}
