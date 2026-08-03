import globals from "globals";

import {
	javascriptConfigs,
	typescriptConfigs,
} from "./lib/rules/index.js";

// This project's src directory has both JavaScript and TypeScript files, so include both config sets.
const baseConfigs = [
	...javascriptConfigs,
	...typescriptConfigs,
];

// Augment each config with the Node.js builtin globals.
const configs = baseConfigs.map((baseConfig) => {
	return {
		...baseConfig,

		languageOptions: {
			...baseConfig.languageOptions,
			globals: globals.nodeBuiltin,
		},
	};
});

export default [
	{
		ignores: ["lib/"],
	},

	...configs,
];
