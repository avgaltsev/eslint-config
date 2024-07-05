import {
	javascriptConfigs,
	typescriptConfigs,
} from "./lib/index.js";

export default [
	{
		ignores: ["lib/"],
	},

	...javascriptConfigs,
	...typescriptConfigs,
];
