import type {RuleEntry} from "./rules.js";

function formatArray(array: Array<unknown>): string {
	// eslint-disable-next-line @typescript-eslint/no-use-before-define
	return `[${array.map((item) => formatValue(item)).join(", ")}]`;
}

function formatObject(object: object): string {
	// eslint-disable-next-line @typescript-eslint/no-use-before-define
	const properties = Object.entries(object).map(([key, value]) => `"${key}": ${formatValue(value)}`).join(", ");

	return `{${properties}}`;
}

function formatValue(value: unknown): string {
	if (Array.isArray(value)) {
		return formatArray(value);
	}

	if (typeof value === "object" && value !== null) {
		return formatObject(value);
	}

	return JSON.stringify(value);
}

function formatRuleValueItem(item: unknown): string {
	if (typeof item === "object" && item !== null && !Array.isArray(item)) {
		const properties = Object.entries(item).map(([key, value]) => `\t"${key}": ${formatValue(value)},`).join("\n");

		return `{\n${properties}\n}`;
	}

	return JSON.stringify(item);
}

export function formatRuleValue(value: RuleEntry): string {
	if (Array.isArray(value)) {
		return `[${value.map((item) => formatRuleValueItem(item)).join(", ")}]`;
	}

	return JSON.stringify(value);
}
