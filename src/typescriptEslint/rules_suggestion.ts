/* eslint-disable @typescript-eslint/naming-convention */

import type {FlatConfig} from "@typescript-eslint/utils/dist/ts-eslint";

export const rules: FlatConfig.Rules = {
	// [suggestion] Require that function overload signatures be consecutive
	"@typescript-eslint/adjacent-overload-signatures": "error",

	// [suggestion] Require consistently using either `T[]` or `Array<T>` for arrays
	"@typescript-eslint/array-type": [
		"error",
		{
			"default": "generic",
			"readonly": "generic",
		},
	],

	// [suggestion] Disallow `// tslint:<rule-flag>` comments
	// "@typescript-eslint/ban-tslint-comment": "off",

	// [suggestion] Disallow certain types
	"@typescript-eslint/ban-types": "error",

	// [suggestion] Enforce that class methods utilize `this`
	// "@typescript-eslint/class-methods-use-this": "off",

	// [suggestion] Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
	// "@typescript-eslint/consistent-generic-constructors": "off",

	// [suggestion] Require or disallow the `Record` type
	// "@typescript-eslint/consistent-indexed-object-style": "off",

	// [suggestion] Require `return` statements to either always or never specify values
	// "@typescript-eslint/consistent-return": "off",

	// [suggestion] Enforce consistent usage of type assertions
	// "@typescript-eslint/consistent-type-assertions": "off",

	// [suggestion] Enforce type definitions to consistently use either `interface` or `type`
	// "@typescript-eslint/consistent-type-definitions": "off",

	// [suggestion] Enforce consistent usage of type exports
	// "@typescript-eslint/consistent-type-exports": "off",

	// [suggestion] Enforce consistent usage of type imports
	// "@typescript-eslint/consistent-type-imports": "off",

	// [suggestion] Enforce default parameters to be last
	// "@typescript-eslint/default-param-last": "off",

	// [suggestion] Enforce dot notation whenever possible
	// "@typescript-eslint/dot-notation": "off",

	// [suggestion] Require or disallow initialization in variable declarations
	// "@typescript-eslint/init-declarations": "off",

	// [suggestion] Enforce a maximum number of parameters in function definitions
	// "@typescript-eslint/max-params": "off",

	// [suggestion] Require a consistent member declaration order
	// "@typescript-eslint/member-ordering": "off",

	// [suggestion] Enforce using a particular method signature syntax
	// "@typescript-eslint/method-signature-style": "off",

	// [suggestion] Enforce naming conventions for everything across a codebase
	"@typescript-eslint/naming-convention": [
		"error",
		{
			"selector": "default",
			"format": ["camelCase"],
			"leadingUnderscore": "forbid",
			"trailingUnderscore": "forbid",
		},
		{
			"selector": "variable",
			"modifiers": ["const", "global"],
			"types": ["boolean", "number", "string"],
			"format": ["UPPER_CASE"],
			"leadingUnderscore": "forbid",
			"trailingUnderscore": "forbid",
		},
		{
			"selector": "typeAlias",
			"format": ["PascalCase"],
			"leadingUnderscore": "forbid",
			"trailingUnderscore": "forbid",
		},
		{
			"selector": "enum",
			"format": ["PascalCase"],
			"leadingUnderscore": "forbid",
			"trailingUnderscore": "forbid",
		},
		{
			"selector": "class",
			"format": ["PascalCase"],
			"leadingUnderscore": "forbid",
			"trailingUnderscore": "forbid",
		},
		{
			"selector": "interface",
			"format": ["PascalCase"],
			"custom": {
				"regex": "^I[A-Z]",
				"match": false,
			},
			"leadingUnderscore": "forbid",
			"trailingUnderscore": "forbid",
		},
		{
			"selector": "typeParameter",
			"format": ["PascalCase"],
			"leadingUnderscore": "forbid",
			"trailingUnderscore": "forbid",
		},
	],

	// [suggestion] Disallow generic `Array` constructors
	"@typescript-eslint/no-array-constructor": "error",

	// [suggestion] Require `.toString()` to only be called on objects which provide useful information when stringified
	// "@typescript-eslint/no-base-to-string": "off",

	// [suggestion] Disallow duplicate constituents of union or intersection types
	// "@typescript-eslint/no-duplicate-type-constituents": "off",

	// [suggestion] Disallow using the `delete` operator on computed key expressions
	// "@typescript-eslint/no-dynamic-delete": "off",

	// [suggestion] Disallow empty functions
	"@typescript-eslint/no-empty-function": "error",

	// [suggestion] Disallow the declaration of empty interfaces
	"@typescript-eslint/no-empty-interface": "error",

	// [suggestion] Disallow accidentally using the "empty object" type
	// "@typescript-eslint/no-empty-object-type": "off",

	// [suggestion] Disallow the `any` type
	"@typescript-eslint/no-explicit-any": "warn",

	// [suggestion] Disallow classes used as namespaces
	// "@typescript-eslint/no-extraneous-class": "off",

	// [suggestion] Disallow the use of `eval()`-like methods
	// "@typescript-eslint/no-implied-eval": "off",

	// [suggestion] Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
	"@typescript-eslint/no-inferrable-types": "error",

	// [suggestion] Disallow `this` keywords outside of classes or class-like objects
	// "@typescript-eslint/no-invalid-this": "off",

	// [suggestion] Disallow function declarations that contain unsafe references inside loop statements
	// "@typescript-eslint/no-loop-func": "off",

	// [suggestion] Disallow magic numbers
	// "@typescript-eslint/no-magic-numbers": "off",

	// [suggestion] Disallow the `void` operator except when used to discard a value
	// "@typescript-eslint/no-meaningless-void-operator": "off",

	// [suggestion] Disallow TypeScript namespaces
	"@typescript-eslint/no-namespace": "error",

	// [suggestion] Disallow variable redeclaration
	// "@typescript-eslint/no-redeclare": "off",

	// [suggestion] Disallow members of unions and intersections that do nothing or override type information
	// "@typescript-eslint/no-redundant-type-constituents": "off",

	// [suggestion] Disallow specified modules when loaded by `import`
	// "@typescript-eslint/no-restricted-imports": "off",

	// [suggestion] Disallow variable declarations from shadowing variables declared in the outer scope
	// "@typescript-eslint/no-shadow": "off",

	// [suggestion] Disallow aliasing `this`
	"@typescript-eslint/no-this-alias": "error",

	// [suggestion] Disallow unnecessary equality comparisons against boolean literals
	// "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",

	// [suggestion] Disallow conditionals where the type is always truthy or always falsy
	"@typescript-eslint/no-unnecessary-condition": [
		"error",
		{
			"allowConstantLoopConditions": true,
		},
	],

	// [suggestion] Disallow unnecessary namespace qualifiers
	// "@typescript-eslint/no-unnecessary-qualifier": "off",

	// [suggestion] Disallow unnecessary template expressions
	// "@typescript-eslint/no-unnecessary-template-expression": "off",

	// [suggestion] Disallow type arguments that are equal to the default
	// "@typescript-eslint/no-unnecessary-type-arguments": "off",

	// [suggestion] Disallow type assertions that do not change the type of an expression
	// "@typescript-eslint/no-unnecessary-type-assertion": "off",

	// [suggestion] Disallow unnecessary constraints on generic types
	// "@typescript-eslint/no-unnecessary-type-constraint": "off",

	// [suggestion] Disallow comparing an enum value with a non-enum value
	// "@typescript-eslint/no-unsafe-enum-comparison": "off",

	// [suggestion] Disallow unused expressions
	// "@typescript-eslint/no-unused-expressions": "off",

	// [suggestion] Disallow empty exports that don't change anything in a module file
	// "@typescript-eslint/no-useless-empty-export": "off",

	// [suggestion] Enforce non-null assertions over explicit type casts
	// "@typescript-eslint/non-nullable-type-assertion-style": "off",

	// [suggestion] Enforce the use of `as const` over literal type
	"@typescript-eslint/prefer-as-const": "error",

	// [suggestion] Require destructuring from arrays and/or objects
	// "@typescript-eslint/prefer-destructuring": "off",

	// [suggestion] Require each enum member value to be explicitly initialized
	// "@typescript-eslint/prefer-enum-initializers": "off",

	// [suggestion] Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
	// "@typescript-eslint/prefer-find": "off",

	// [suggestion] Enforce the use of `for-of` loop over the standard `for` loop where possible
	// "@typescript-eslint/prefer-for-of": "off",

	// [suggestion] Enforce using function types instead of interfaces with call signatures
	"@typescript-eslint/prefer-function-type": "error",

	// [suggestion] Enforce `includes` method over `indexOf` method
	// "@typescript-eslint/prefer-includes": "off",

	// [suggestion] Require all enum members to be literal values
	// "@typescript-eslint/prefer-literal-enum-member": "off",

	// [suggestion] Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
	"@typescript-eslint/prefer-namespace-keyword": "error",

	// [suggestion] Enforce using the nullish coalescing operator instead of logical assignments or chaining
	// "@typescript-eslint/prefer-nullish-coalescing": "off",

	// [suggestion] Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
	// "@typescript-eslint/prefer-optional-chain": "off",

	// [suggestion] Require using Error objects as Promise rejection reasons
	// "@typescript-eslint/prefer-promise-reject-errors": "off",

	// [suggestion] Require private members to be marked as `readonly` if they're never modified outside of the constructor
	// "@typescript-eslint/prefer-readonly": "off",

	// [suggestion] Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
	// "@typescript-eslint/prefer-readonly-parameter-types": "off",

	// [suggestion] Enforce `RegExp#exec` over `String#match` if no global flag is provided
	// "@typescript-eslint/prefer-regexp-exec": "off",

	// [suggestion] Enforce that `this` is used when only `this` type is returned
	// "@typescript-eslint/prefer-return-this-type": "off",

	// [suggestion] Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
	// "@typescript-eslint/prefer-string-starts-ends-with": "off",

	// [suggestion] Require any function or method that returns a Promise to be marked async
	// "@typescript-eslint/promise-function-async": "off",

	// [suggestion] Disallow async functions which do not return promises and have no `await` expression
	// "@typescript-eslint/require-await": "off",

	// [suggestion] Disallow certain types in boolean expressions
	"@typescript-eslint/strict-boolean-expressions": [
		"error",
		{
			"allowString": false,
			"allowNumber": false,
			"allowNullableObject": false,
			"allowNullableBoolean": false,
			"allowNullableString": false,
			"allowNullableNumber": false,
			"allowAny": false,
		},
	],

	// [suggestion] Require switch-case statements to be exhaustive
	// "@typescript-eslint/switch-exhaustiveness-check": "off",

	// [suggestion] Disallow certain triple slash directives in favor of ES6-style import declarations
	"@typescript-eslint/triple-slash-reference": "error",

	// [suggestion] Require type annotations in certain places
	// "@typescript-eslint/typedef": "off",

	// [suggestion] Disallow two overloads that could be unified into one with a union or an optional/rest parameter
	// "@typescript-eslint/unified-signatures": "off",

	// [suggestion] Enforce typing arguments in `.catch()` callbacks as `unknown`
	// "@typescript-eslint/use-unknown-in-catch-callback-variable": "off",
};
