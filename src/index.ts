/**
 * This module exports two config sets: for JavaScript projects and for TypeScript projects.
 */

import type {FlatConfig} from "@typescript-eslint/utils/dist/ts-eslint";

import {parser} from "typescript-eslint";

import {configs as eslintConfigs} from "./eslint/index.js";
import {configs as typescriptEslintConfigs} from "./typescriptEslint/index.js";
import {configs as stylisticConfigs} from "./stylistic/index.js";

const baseJavascriptConfigs: Array<FlatConfig.Config> = [
	...eslintConfigs,
	...stylisticConfigs,
];

const baseTypescriptConfigs: Array<FlatConfig.Config> = [
	...eslintConfigs,
	...typescriptEslintConfigs,
	...stylisticConfigs,
];

const javascriptConfigs = baseJavascriptConfigs.map((baseConfig) => {
	return {
		...baseConfig,

		files: ["**/*.js", "**/*.jsx"],
	};
});

const typescriptConfigs = baseTypescriptConfigs.map((baseConfig) => {
	return {
		...baseConfig,

		languageOptions: {
			parser,

			parserOptions: {
				project: true,
			},
		},

		files: ["**/*.ts", "**/*.tsx"],
	};
});

export {javascriptConfigs, typescriptConfigs};
