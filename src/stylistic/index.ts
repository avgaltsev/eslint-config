import type {Linter} from "eslint";

import plugin from "@stylistic/eslint-plugin";

import {rules as suggestionRules} from "./rules_suggestion.js";
import {rules as layoutRules} from "./rules_layout.js";

const baseConfigs: Array<Linter.Config> = [
	{
		name: "stylistic/suggestions",
		rules: suggestionRules,
	},

	{
		name: "stylistic/layout",
		rules: layoutRules,
	},
];

const configs: Array<Linter.Config> = baseConfigs.map((baseConfig) => {
	return {
		...baseConfig,

		plugins: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"@stylistic": plugin,
		},
	};
});

export {configs};
