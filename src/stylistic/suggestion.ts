/* eslint-disable @typescript-eslint/naming-convention */

import type {Linter} from "eslint";

export const rules: Linter.RulesRecord = {
	// [suggestion] Enforce PascalCase for user-defined JSX components
	"@stylistic/jsx-pascal-case": "error",

	// [suggestion] Enforce a particular style for multiline comments
	// "@stylistic/multiline-comment-style": "off",
};
