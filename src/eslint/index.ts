import type { FlatConfig } from "@typescript-eslint/utils/dist/ts-eslint";

import { rules as oldRules } from "./rules_old.js";
import { rules as problemRules } from "./rules_problem.js";
import { rules as suggestionRules } from "./rules_suggestion.js";
import { rules as layoutRules } from "./rules_layout.js";

const configs: FlatConfig.Config[] = [
	{
		name: "eslint/old",
		rules: oldRules,
	},

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

export { configs };
