/* eslint-disable @typescript-eslint/naming-convention */

import type {FlatConfig} from "@typescript-eslint/utils/ts-eslint";

export const rules: FlatConfig.Rules = {
	// [problem] Disallow awaiting a value that is not a Thenable
	"@typescript-eslint/await-thenable": "error",

	// [problem] Disallow `@ts-<directive>` comments or require descriptions after directives
	"@typescript-eslint/ban-ts-comment": "error",

	// [problem] Enforce that literals on classes are exposed in a consistent style
	// "@typescript-eslint/class-literal-property-style": "off",

	// [problem] Require explicit return types on functions and class methods
	"@typescript-eslint/explicit-function-return-type": "error",

	// [problem] Require explicit accessibility modifiers on class properties and methods
	"@typescript-eslint/explicit-member-accessibility": ["error", {
		"accessibility": "no-public",
	}],

	// [problem] Require explicit return and argument types on exported functions' and classes' public class methods
	"@typescript-eslint/explicit-module-boundary-types": "error",

	// [problem] Disallow using the `delete` operator on array values
	"@typescript-eslint/no-array-delete": "error",

	// [problem] Disallow non-null assertion in locations that may be confusing
	// "@typescript-eslint/no-confusing-non-null-assertion": "off",

	// [problem] Require expressions of type void to appear in statement position
	"@typescript-eslint/no-confusing-void-expression": "error",

	// [problem] Disallow using code marked as `@deprecated`
	"@typescript-eslint/no-deprecated": "error",

	// [problem] Disallow duplicate class members
	"no-dupe-class-members": "off",
	"@typescript-eslint/no-dupe-class-members": "error",

	// [problem] Disallow duplicate enum member values
	"@typescript-eslint/no-duplicate-enum-values": "error",

	// [problem] Disallow extra non-null assertions
	// "@typescript-eslint/no-extra-non-null-assertion": "off",

	// [problem] Require Promise-like statements to be handled appropriately
	"@typescript-eslint/no-floating-promises": "error",

	// [problem] Disallow iterating over an array with a for-in loop
	"@typescript-eslint/no-for-in-array": "error",

	// [problem] Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
	"@typescript-eslint/no-import-type-side-effects": "error",

	// [problem] Disallow `void` type outside of generic or return types
	"@typescript-eslint/no-invalid-void-type": "error",

	// [problem] Enforce valid definition of `new` and `constructor`
	"@typescript-eslint/no-misused-new": "error",

	// [problem] Disallow Promises in places not designed to handle them
	"@typescript-eslint/no-misused-promises": "error",

	// [problem] Disallow using the spread operator when it might cause unexpected behavior
	"@typescript-eslint/no-misused-spread": "error",

	// [problem] Disallow enums from having both number and string members
	"@typescript-eslint/no-mixed-enums": "error",

	// [problem] Disallow non-null assertions in the left operand of a nullish coalescing operator
	// "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off",

	// [problem] Disallow non-null assertions after an optional chain expression
	// "@typescript-eslint/no-non-null-asserted-optional-chain": "off",

	// [problem] Disallow non-null assertions using the `!` postfix operator
	"@typescript-eslint/no-non-null-assertion": "error",

	// [problem] Disallow invocation of `require()`
	"@typescript-eslint/no-require-imports": "error",

	// [problem] Disallow type parameters that aren't used multiple times
	// "@typescript-eslint/no-unnecessary-type-parameters": "off",

	// [problem] Disallow calling a function with a value with type `any`
	"@typescript-eslint/no-unsafe-argument": "error",

	// [problem] Disallow assigning a value with type `any` to variables and properties
	"@typescript-eslint/no-unsafe-assignment": "error",

	// [problem] Disallow calling a value with type `any`
	"@typescript-eslint/no-unsafe-call": "error",

	// [problem] Disallow unsafe declaration merging
	"@typescript-eslint/no-unsafe-declaration-merging": "error",

	// [problem] Disallow using the unsafe built-in Function type
	"@typescript-eslint/no-unsafe-function-type": "error",

	// [problem] Disallow member access on a value with type `any`
	"@typescript-eslint/no-unsafe-member-access": "error",

	// [problem] Disallow returning a value with type `any` from a function
	"@typescript-eslint/no-unsafe-return": "error",

	// [problem] Disallow type assertions that narrow a type
	"@typescript-eslint/no-unsafe-type-assertion": "error",

	// [problem] Require unary negation to take a number
	"@typescript-eslint/no-unsafe-unary-minus": "error",

	// [problem] Disallow unused private class members
	"no-unused-private-class-members": "off",
	"@typescript-eslint/no-unused-private-class-members": "error",

	// [problem] Disallow unused variables
	"no-unused-vars": "off",
	"@typescript-eslint/no-unused-vars": ["error", {
		"args": "none",
		"caughtErrors": "none",
		"ignoreRestSiblings": true,
	}],

	// [problem] Disallow the use of variables before they are defined
	"no-use-before-define": "off",
	"@typescript-eslint/no-use-before-define": "error",

	// [problem] Disallow unnecessary constructors
	"no-useless-constructor": "off",
	"@typescript-eslint/no-useless-constructor": "error",

	// [problem] Disallow using confusing built-in primitive class wrappers
	"@typescript-eslint/no-wrapper-object-types": "error",

	// [problem] Disallow throwing non-`Error` values as exceptions
	"@typescript-eslint/only-throw-error": "error",

	// [problem] Require or disallow parameter properties in class constructors
	"@typescript-eslint/parameter-properties": "error",

	// [problem] Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
	"@typescript-eslint/prefer-reduce-type-parameter": "error",

	// [problem] Enforce that `get()` types should be assignable to their equivalent `set()` type
	"@typescript-eslint/related-getter-setter-pairs": "error",

	// [problem] Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
	"@typescript-eslint/require-array-sort-compare": "error",

	// [problem] Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
	"@typescript-eslint/restrict-plus-operands": "error",

	// [problem] Enforce template literal expressions to be of `string` type
	"@typescript-eslint/restrict-template-expressions": "error",

	// [problem] Enforce consistent awaiting of returned promises
	"@typescript-eslint/return-await": "error",

	// [problem] Disallow passing a value-returning function in a position accepting a void function
	"@typescript-eslint/strict-void-return": "error",

	// [problem] Enforce unbound methods are called with their expected scope
	"@typescript-eslint/unbound-method": "error",
};
