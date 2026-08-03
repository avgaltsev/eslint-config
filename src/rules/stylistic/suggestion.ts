/* eslint-disable @typescript-eslint/naming-convention */

import type {Linter} from "eslint";
import type {RuleOptions} from "@stylistic/eslint-plugin";

export const rules: Partial<{[K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>}> = {
	// [suggestion] Enforce PascalCase for user-defined JSX components
	"@stylistic/jsx-pascal-case": "error",

	// [suggestion] Enforce a particular style for multiline comments
	// "@stylistic/multiline-comment-style": "off",
};
