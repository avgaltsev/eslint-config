import type {FlatConfig} from "@typescript-eslint/utils/dist/ts-eslint";

import {rules as problemRules} from "./rules_problem.js";
import {rules as suggestionRules} from "./rules_suggestion.js";
import {rules as layoutRules} from "./rules_layout.js";

const configs: Array<FlatConfig.Config> = [
	{
		name: "eslint/problems",
		rules: problemRules,
	},

	{
		name: "eslint/suggestions",
		rules: suggestionRules,
	},

	{
		name: "eslint/layout",
		rules: layoutRules,
	},
];

export {configs};
