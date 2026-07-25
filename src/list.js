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

// Normalize rules imports to plain objects.
const eslintRules = Object.fromEntries(eslintRulesImport.entries());
const typescriptEslintRules = typescriptEslintPluginRulesImport;
const stylisticRules = stylisticEslintPluginImport.rules;

// Build rules sources list.
const ruleSources = {
	["eslint"]: {
		prefix: "",
		rules: eslintRules,
	},

	["typescript-eslint"]: {
		prefix: "@typescript-eslint/",
		rules: typescriptEslintRules,
	},

	["stylistic"]: {
		prefix: "@stylistic/",
		rules: stylisticRules,
	},
};

// Concatenate all current configs.
const allConfigs = [
	...eslintConfigs,
	...typescriptEslintConfigs,
	...stylisticConfigs,
];

// Merge all applied rules into a single object.
const appliedRules = allConfigs.reduce((result, config) => {
	return {
		...result,
		...config.rules,
	};
}, {});

// Output rule information.
function outputRule(name, rule, state, value) {
	const colors = {
		"available": "\x1b[2m",
		"applied": "\x1b[32m",
		"deprecated": "\x1b[31m",
	};

	const color = colors[state] ?? "";
	const stringValue = Array.isArray(value) ? `["${value[0]}", ...]` : `"${value}"`;

	console.log(`${colors["available"]}// [${rule.meta.type}] ${rule.meta.docs.description}\x1b[0m`);
	console.log(`${color}${state === "available" ? "// " : ""}"${name}": ${stringValue},\x1b[0m\n`);
}

// Output rules source information.
function outputRuleSource(name, ruleSource) {
	console.log(`Rules from ${name}:\n`);

	const deprecatedRules = new Map();
	const rulesByType = {};

	for (const [ruleName, rule] of Object.entries(ruleSource.rules)) {
		const fullRuleName = `${ruleSource.prefix}${ruleName}`;

		if (rule.meta.deprecated ?? false) {
			if (appliedRules[fullRuleName] !== undefined) {
				deprecatedRules.set(fullRuleName, rule);
			}

			continue;
		}

		rulesByType[rule.meta.type] = rulesByType[rule.meta.type] ?? new Map();
		rulesByType[rule.meta.type].set(fullRuleName, rule);
	}

	for (const ruleSet of Object.values(rulesByType)) {
		for (const [ruleName, rule] of ruleSet) {
			const state = appliedRules[ruleName] !== undefined ? "applied" : "available";
			const value = appliedRules[ruleName] ?? "off";

			outputRule(ruleName, rule, state, value);
		}
	}

	if (deprecatedRules.size > 0) {
		console.log("Deprecated rules detected:\n");

		for (const [ruleName, rule] of deprecatedRules) {
			const value = appliedRules[ruleName];

			outputRule(ruleName, rule, "deprecated", value);
		}
	}
}

export function list() {
	for (const [name, ruleSource] of Object.entries(ruleSources)) {
		outputRuleSource(name, ruleSource);
	}
}
