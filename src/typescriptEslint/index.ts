import type {FlatConfig} from "@typescript-eslint/utils/dist/ts-eslint";

import {plugin} from "typescript-eslint";

import {rules as oldRules} from "./rules_old.js";
import {rules as problemRules} from "./rules_problem.js";
import {rules as suggestionRules} from "./rules_suggestion.js";

const baseConfigs: Array<FlatConfig.Config> = [
	{
		name: "typescript-eslint/old",
		rules: oldRules,
	},

	{
		name: "typescript-eslint/problem",
		rules: problemRules,
	},

	{
		name: "typescript-eslint/suggestions",
		rules: suggestionRules,
	},
];

const configs = baseConfigs.map((baseConfig) => {
	return {
		...baseConfig,

		plugins: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"@typescript-eslint": plugin,
		},
	};
});

export {configs};
