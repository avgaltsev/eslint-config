/* eslint-disable @typescript-eslint/naming-convention */

import type {FlatConfig} from "@typescript-eslint/utils/dist/ts-eslint";

export const rules: FlatConfig.Rules = {
	// [layout] Require or disallow trailing commas
	"@typescript-eslint/comma-dangle": [
		"error",
		{
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "always-multiline",
			"enums": "always-multiline",
			"generics": "always-multiline",
			"tuples": "always-multiline",
		},
	],

	// [layout] Enforce consistent spacing before and after commas
	"@typescript-eslint/comma-spacing": [
		"error",
		{
			"before": false,
			"after": true,
		},
	],

	// [layout] Enforce consistent indentation
	"@typescript-eslint/indent": ["error", "tab"],

	// [suggestion] Disallow unnecessary semicolons
	"@typescript-eslint/no-extra-semi": "error",
};
