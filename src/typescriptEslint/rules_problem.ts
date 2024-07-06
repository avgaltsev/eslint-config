/* eslint-disable @typescript-eslint/naming-convention */

import type {FlatConfig} from "@typescript-eslint/utils/dist/ts-eslint";

export const rules: FlatConfig.Rules = {
	// [problem] Disallow awaiting a value that is not a Thenable
	// "@typescript-eslint/await-thenable": "off",

	// [problem] Disallow `@ts-<directive>` comments or require descriptions after directives
	"@typescript-eslint/ban-ts-comment": "error",

	// [problem] Enforce that literals on classes are exposed in a consistent style
	// "@typescript-eslint/class-literal-property-style": "off",

	// [problem] Require explicit return types on functions and class methods
	"@typescript-eslint/explicit-function-return-type": [
		"error",
		{
			"allowExpressions": true,
			"allowTypedFunctionExpressions": true,
			"allowHigherOrderFunctions": true,
			"allowDirectConstAssertionInArrowFunctions": true,
			"allowConciseArrowFunctionExpressionsStartingWithVoid": true,
		},
	],

	// [problem] Require explicit accessibility modifiers on class properties and methods
	"@typescript-eslint/explicit-member-accessibility": [
		"error",
		{
			"accessibility": "explicit",
			"ignoredMethodNames": [],
			"overrides": {},
		},
	],

	// [problem] Require explicit return and argument types on exported functions' and classes' public class methods
	"@typescript-eslint/explicit-module-boundary-types": "warn",

	// [problem] Disallow using the `delete` operator on array values
	// "@typescript-eslint/no-array-delete": "off",

	// [problem] Disallow non-null assertion in locations that may be confusing
	// "@typescript-eslint/no-confusing-non-null-assertion": "off",

	// [problem] Require expressions of type void to appear in statement position
	// "@typescript-eslint/no-confusing-void-expression": "off",

	// [problem] Disallow duplicate class members
	// "@typescript-eslint/no-dupe-class-members": "off",

	// [problem] Disallow duplicate enum member values
	// "@typescript-eslint/no-duplicate-enum-values": "off",

	// [problem] Disallow extra non-null assertions
	"@typescript-eslint/no-extra-non-null-assertion": "error",

	// [problem] Require Promise-like statements to be handled appropriately
	// "@typescript-eslint/no-floating-promises": "off",

	// [problem] Disallow iterating over an array with a for-in loop
	// "@typescript-eslint/no-for-in-array": "off",

	// [problem] Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
	// "@typescript-eslint/no-import-type-side-effects": "off",

	// [problem] Disallow `void` type outside of generic or return types
	// "@typescript-eslint/no-invalid-void-type": "off",

	// [problem] Disallow literal numbers that lose precision
	// "@typescript-eslint/no-loss-of-precision": "off",

	// [problem] Enforce valid definition of `new` and `constructor`
	"@typescript-eslint/no-misused-new": "error",

	// [problem] Disallow Promises in places not designed to handle them
	// "@typescript-eslint/no-misused-promises": "off",

	// [problem] Disallow enums from having both number and string members
	// "@typescript-eslint/no-mixed-enums": "off",

	// [problem] Disallow non-null assertions in the left operand of a nullish coalescing operator
	// "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off",

	// [problem] Disallow non-null assertions after an optional chain expression
	"@typescript-eslint/no-non-null-asserted-optional-chain": "error",

	// [problem] Disallow non-null assertions using the `!` postfix operator
	"@typescript-eslint/no-non-null-assertion": "warn",

	// [problem] Disallow invocation of `require()`
	// "@typescript-eslint/no-require-imports": "off",

	// [problem] Disallow calling a function with a value with type `any`
	// "@typescript-eslint/no-unsafe-argument": "off",

	// [problem] Disallow assigning a value with type `any` to variables and properties
	// "@typescript-eslint/no-unsafe-assignment": "off",

	// [problem] Disallow calling a value with type `any`
	// "@typescript-eslint/no-unsafe-call": "off",

	// [problem] Disallow unsafe declaration merging
	// "@typescript-eslint/no-unsafe-declaration-merging": "off",

	// [problem] Disallow member access on a value with type `any`
	// "@typescript-eslint/no-unsafe-member-access": "off",

	// [problem] Disallow returning a value with type `any` from a function
	// "@typescript-eslint/no-unsafe-return": "off",

	// [problem] Require unary negation to take a number
	// "@typescript-eslint/no-unsafe-unary-minus": "off",

	// [problem] Disallow unused variables
	"@typescript-eslint/no-unused-vars": [
		"error",
		{
			"vars": "all",
			"varsIgnorePattern": "",
			"args": "none",
			"ignoreRestSiblings": true,
			"argsIgnorePattern": "",
			"caughtErrors": "none",
			"caughtErrorsIgnorePattern": "",
		},
	],

	// [problem] Disallow the use of variables before they are defined
	// "@typescript-eslint/no-use-before-define": "off",

	// [problem] Disallow unnecessary constructors
	// "@typescript-eslint/no-useless-constructor": "off",

	// [problem] Disallow `require` statements except in import statements
	"@typescript-eslint/no-var-requires": "error",

	// [problem] Disallow throwing non-`Error` values as exceptions
	// "@typescript-eslint/only-throw-error": "off",

	// [problem] Require or disallow parameter properties in class constructors
	// "@typescript-eslint/parameter-properties": "off",

	// [problem] Enforce using type parameter when calling `Array#reduce` instead of casting
	// "@typescript-eslint/prefer-reduce-type-parameter": "off",

	// [problem] Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
	// "@typescript-eslint/require-array-sort-compare": "off",

	// [problem] Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
	// "@typescript-eslint/restrict-plus-operands": "off",

	// [problem] Enforce template literal expressions to be of `string` type
	// "@typescript-eslint/restrict-template-expressions": "off",

	// [problem] Enforce consistent awaiting of returned promises
	// "@typescript-eslint/return-await": "off",

	// [problem] Enforce unbound methods are called with their expected scope
	// "@typescript-eslint/unbound-method": "off",
};
