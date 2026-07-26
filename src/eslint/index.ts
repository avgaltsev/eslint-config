import type {Linter} from "eslint";

import {rules as problemRules} from "./problem.js";
import {rules as suggestionRules} from "./suggestion.js";
import {rules as layoutRules} from "./layout.js";

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
