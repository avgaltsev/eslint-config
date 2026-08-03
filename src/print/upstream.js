/**
 * Import rules meta information from ESLint and ESLint plugins.
 *
 * This is a JavaScript module, because internal rules implementation (including meta information) is not exported from
 * eslint libraries and needs to be accessed via deep imports, and TypeScript won't allow importing undeclared modules.
 * It's also not possible to write ambient module declarations for relatively imported modules.
 *
 * This module needs careful manual maintenance, as internal structure of these libraries can be changed over time
 * and anything can break.
 */

import eslintRulesImport from "../../node_modules/eslint/lib/rules/index.js";
import typescriptEslintPluginRulesImport from "../../node_modules/@typescript-eslint/eslint-plugin/dist/rules/index.js";
import stylisticEslintPluginImport from "../../node_modules/@stylistic/eslint-plugin/dist/index.js";

/** @typedef {import("eslint").Rule.RuleModule} EslintRuleModule */
/** @typedef {import("@typescript-eslint/utils/ts-eslint").AnyRuleModule} TypescriptEslintRuleModule */
/** @typedef {import("@stylistic/eslint-plugin").Rules} StylisticRules */

/** @typedef {EslintRuleModule | TypescriptEslintRuleModule} RuleModule */

/** @type {Record<string, EslintRuleModule>} */
export const eslintRules = Object.fromEntries(eslintRulesImport.entries());

/** @type {Record<string, TypescriptEslintRuleModule>} */
export const typescriptEslintRules = typescriptEslintPluginRulesImport;

/** @type {StylisticRules} */
export const stylisticRules = stylisticEslintPluginImport.rules;
