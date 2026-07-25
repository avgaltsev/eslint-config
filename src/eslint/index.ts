import type {Linter} from "eslint";

import {rules as problemRules} from "./rules_problem.js";
import {rules as suggestionRules} from "./rules_suggestion.js";
import {rules as layoutRules} from "./rules_layout.js";

const configs: Array<Linter.Config> = [
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
