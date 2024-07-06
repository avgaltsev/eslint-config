import globals from "globals";

import {
	javascriptConfigs,
	typescriptConfigs,
} from "./lib/index.js";

const baseConfigs = [
	...javascriptConfigs,
	...typescriptConfigs,
];

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
