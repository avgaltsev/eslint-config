/* eslint-disable @typescript-eslint/naming-convention */

import type {FlatConfig} from "@typescript-eslint/utils/dist/ts-eslint";

export const rules: FlatConfig.Rules = {
	// [layout] Enforce consistent spacing inside array brackets
	"array-bracket-spacing": [
		"error",
		"never",
		{
			"singleValue": false,
			"objectsInArrays": false,
			"arraysInArrays": false,
		},
	],

	// [layout] Require or disallow trailing commas
	"comma-dangle": [
		"error",
		{
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "always-multiline",
		},
	],

	// [layout] Enforce consistent spacing before and after commas
	"comma-spacing": [
		"error",
		{
			"before": false,
			"after": true,
		},
	],

	// [layout] Enforce consistent indentation
	"indent": ["error", "tab"],

	// [suggestion] Disallow unnecessary semicolons
	"no-extra-semi": "error",

	// [layout] Disallow mixed spaces and tabs for indentation
	"no-mixed-spaces-and-tabs": "error",

	// [layout] Enforce consistent line breaks after opening and before closing braces
	"object-curly-newline": [
		"error",
		{
			"ObjectExpression": {"multiline": true, "minProperties": 0, "consistent": true},
			"ObjectPattern": {"multiline": true, "minProperties": 0, "consistent": true},
			"ImportDeclaration": {"multiline": true, "minProperties": 0, "consistent": true},
			"ExportDeclaration": {"multiline": true, "minProperties": 0, "consistent": true},
		},
	],

	// [layout] Enforce consistent spacing inside braces
	"object-curly-spacing": [
		"error",
		"never",
		{
			"arraysInObjects": false,
			"objectsInObjects": false,
		},
	],

	// [layout] Enforce the consistent use of either backticks, double, or single quotes
	"quotes": ["error", "double"],

	// [layout] Require or disallow semicolons instead of ASI
	"semi": [
		"error",
		"always",
		{
			"omitLastInOneLineBlock": false,
		},
	],

	// [layout] Enforce consistent spacing inside parentheses
	"space-in-parens": [
		"error",
		"never",
		{
			"exceptions": [],
		},
	],
};
