import type {Linter} from "eslint";
import type {FlatConfig} from "@typescript-eslint/utils/ts-eslint";

import {
	type EslintRuleModule,
	type RuleModule,
	eslintRules,
	typescriptEslintRules,
	stylisticRules,
} from "./upstream.js";

// Import current configs with applied rules.
import {configs as eslintConfigs} from "../rules/eslint/index.js";
import {configs as typescriptEslintConfigs} from "../rules/typescriptEslint/index.js";
import {configs as stylisticConfigs} from "../rules/stylistic/index.js";

export type Config = Linter.Config | FlatConfig.Config;
export type RuleEntry = Linter.RuleEntry | FlatConfig.RuleEntry;
export type RuleEntries = Record<string, RuleEntry>;

export interface StrictRuleModule extends EslintRuleModule {
	// Only @typescript-eslint rules have a name property.
	name?: string;
	meta: {
		type: "problem" | "suggestion" | "layout";
		docs: {
			description: string;
		};
		deprecated?: boolean | object;
		defaultOptions?: Array<unknown>;
	};
	defaultOptions?: Array<unknown>;
}

export function isStrictRuleModule(rule: RuleModule): rule is StrictRuleModule {
	if (rule.meta === undefined) {
		return false;
	}

	if (rule.meta.type === undefined) {
		return false;
	}

	if (rule.meta.docs === undefined) {
		return false;
	}

	if (rule.meta.docs.description === undefined) {
		return false;
	}

	return true;
}

export interface RuleSource {
	prefix: string;
	rules: Record<string, RuleModule>;
	appliedRules: RuleEntries;
}

export type RuleSources = Record<string, RuleSource>;

// Collect rules from config sets into a single object.
function mergeRules(configs: Array<Config>): RuleEntries {
	return configs.reduce<RuleEntries>((result, config) => {
		return {
			...result,
			...config.rules,
		};
	}, {});
}

// Build rules sources list.
export const ruleSources: RuleSources = {
	"eslint": {
		prefix: "",
		rules: eslintRules,
		appliedRules: mergeRules(eslintConfigs),
	},

	// eslint-disable-next-line @typescript-eslint/naming-convention
	"typescript-eslint": {
		prefix: "@typescript-eslint/",
		rules: typescriptEslintRules,
		appliedRules: mergeRules(typescriptEslintConfigs),
	},

	"stylistic": {
		prefix: "@stylistic/",
		rules: stylisticRules,
		appliedRules: mergeRules(stylisticConfigs),
	},
};
