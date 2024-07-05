import type { FlatConfig } from "@typescript-eslint/utils/dist/ts-eslint";

import plugin from "@stylistic/eslint-plugin";

import { rules as tsRules } from "./rules_ts.js";
import { rules as jsxRules } from "./rules_jsx.js";
import { rules as plusRules } from "./rules_plus.js";

const baseConfigs: FlatConfig.Config[] = [
	{
		name: "stylistic/ts",
		rules: tsRules,
	},

	{
		name: "stylistic/jsx",
		rules: jsxRules,
	},

	{
		name: "stylistic/plus",
		rules: plusRules,
	},
];

const configs = baseConfigs.map((baseConfig) => {
	return {
		...baseConfig,

		plugins: {
			"@stylistic": plugin,
		},
	}
});

export { configs };
