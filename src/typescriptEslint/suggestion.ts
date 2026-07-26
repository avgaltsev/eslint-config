/* eslint-disable @typescript-eslint/naming-convention */

import type {FlatConfig} from "@typescript-eslint/utils/ts-eslint";

export const rules: FlatConfig.Rules = {
	// [suggestion] Require that function overload signatures be consecutive
	"@typescript-eslint/adjacent-overload-signatures": "error",

	// [suggestion] Require consistently using either `T[]` or `Array<T>` for arrays
	"@typescript-eslint/array-type": ["error", {
		"default": "generic",
	}],

	// [suggestion] Disallow `// tslint:<rule-flag>` comments
	// "@typescript-eslint/ban-tslint-comment": "off",

	// [suggestion] Enforce that class methods utilize `this`
	// "class-methods-use-this": "off",
	// "@typescript-eslint/class-methods-use-this": "off",

	// [suggestion] Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
	"@typescript-eslint/consistent-generic-constructors": "error",

	// [suggestion] Require or disallow the `Record` type
	// "@typescript-eslint/consistent-indexed-object-style": "off",

	// [suggestion] Require `return` statements to either always or never specify values
	// "consistent-return": "off",
	// "@typescript-eslint/consistent-return": "off",

	// [suggestion] Enforce consistent usage of type assertions
	"@typescript-eslint/consistent-type-assertions": ["error", {
		"assertionStyle": "never",
	}],

	// [suggestion] Enforce type definitions to consistently use either `interface` or `type`
	"@typescript-eslint/consistent-type-definitions": "error",

	// [suggestion] Enforce consistent usage of type exports
	"@typescript-eslint/consistent-type-exports": "error",

	// [suggestion] Enforce consistent usage of type imports
	"@typescript-eslint/consistent-type-imports": "error",

	// [suggestion] Enforce default parameters to be last
	"default-param-last": "off",
	"@typescript-eslint/default-param-last": "error",

	// [suggestion] Enforce dot notation whenever possible
	// "dot-notation": "off",
	// "@typescript-eslint/dot-notation": "off",

	// [suggestion] Require or disallow initialization in variable declarations
	// "init-declarations": "off",
	// "@typescript-eslint/init-declarations": "off",

	// [suggestion] Enforce a maximum number of parameters in function definitions
	// "max-params": "off",
	// "@typescript-eslint/max-params": "off",

	// [suggestion] Require a consistent member declaration order
	// "@typescript-eslint/member-ordering": "off",

	// [suggestion] Enforce using a particular method signature syntax
	"@typescript-eslint/method-signature-style": "error",

	// [suggestion] Enforce naming conventions for everything across a codebase
	"@typescript-eslint/naming-convention": ["error", {
		"selector": "default",
		"format": ["strictCamelCase"],
		"leadingUnderscore": "forbid",
		"trailingUnderscore": "forbid",
	}, {
		"selector": "typeLike",
		"format": ["StrictPascalCase"],
		"leadingUnderscore": "forbid",
		"trailingUnderscore": "forbid",
	}, {
		"selector": "variable",
		"modifiers": ["const", "global"],
		"types": ["boolean", "number", "string"],
		"format": ["UPPER_CASE"],
		"leadingUnderscore": "forbid",
		"trailingUnderscore": "forbid",
	}, {
		"selector": "enumMember",
		"format": ["UPPER_CASE"],
		"leadingUnderscore": "forbid",
		"trailingUnderscore": "forbid",
	}],

	// [suggestion] Disallow generic `Array` constructors
	"no-array-constructor": "off",
	"@typescript-eslint/no-array-constructor": "error",

	// [suggestion] Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
	"@typescript-eslint/no-base-to-string": "error",

	// [suggestion] Disallow duplicate constituents of union or intersection types
	"@typescript-eslint/no-duplicate-type-constituents": "error",

	// [suggestion] Disallow using the `delete` operator on computed key expressions
	"@typescript-eslint/no-dynamic-delete": "error",

	// [suggestion] Disallow empty functions
	"no-empty-function": "off",
	"@typescript-eslint/no-empty-function": "error",

	// [suggestion] Disallow accidentally using the "empty object" type
	"@typescript-eslint/no-empty-object-type": "error",

	// [suggestion] Disallow the `any` type
	"@typescript-eslint/no-explicit-any": "error",

	// [suggestion] Disallow classes used as namespaces
	"@typescript-eslint/no-extraneous-class": "error",

	// [suggestion] Disallow the use of `eval()`-like functions
	"no-implied-eval": "off",
	"@typescript-eslint/no-implied-eval": "error",

	// [suggestion] Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
	"@typescript-eslint/no-inferrable-types": "error",

	// [suggestion] Disallow `this` keywords outside of classes or class-like objects
	"no-invalid-this": "off",
	"@typescript-eslint/no-invalid-this": "error",

	// [suggestion] Disallow magic numbers
	// "no-magic-numbers": "off",
	// "@typescript-eslint/no-magic-numbers": "off",

	// [suggestion] Disallow the `void` operator except when used to discard a value
	"@typescript-eslint/no-meaningless-void-operator": "error",

	// [suggestion] Disallow TypeScript namespaces
	"@typescript-eslint/no-namespace": "error",

	// [suggestion] Disallow variable redeclaration
	"no-redeclare": "off",
	"@typescript-eslint/no-redeclare": "error",

	// [suggestion] Disallow members of unions and intersections that do nothing or override type information
	"@typescript-eslint/no-redundant-type-constituents": "error",

	// [suggestion] Disallow certain types
	// "@typescript-eslint/no-restricted-types": "off",

	// [suggestion] Disallow variable declarations from shadowing variables declared in the outer scope
	"no-shadow": "off",
	"@typescript-eslint/no-shadow": "error",

	// [suggestion] Disallow aliasing `this`
	"@typescript-eslint/no-this-alias": "error",

	// [suggestion] Disallow unnecessary equality comparisons against boolean literals
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

	// [suggestion] Disallow conditionals where the type is always truthy or always falsy
	"@typescript-eslint/no-unnecessary-condition": "error",

	// [suggestion] Disallow unnecessary assignment of constructor property parameter
	"@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",

	// [suggestion] Disallow unnecessary namespace qualifiers
	"@typescript-eslint/no-unnecessary-qualifier": "error",

	// [suggestion] Disallow unnecessary template expressions
	"@typescript-eslint/no-unnecessary-template-expression": "error",

	// [suggestion] Disallow type arguments that are equal to the default
	"@typescript-eslint/no-unnecessary-type-arguments": "error",

	// [suggestion] Disallow type assertions that do not change the type of an expression
	"@typescript-eslint/no-unnecessary-type-assertion": "error",

	// [suggestion] Disallow unnecessary constraints on generic types
	"@typescript-eslint/no-unnecessary-type-constraint": "error",

	// [suggestion] Disallow conversion idioms when they do not change the type or value of the expression
	"@typescript-eslint/no-unnecessary-type-conversion": "error",

	// [suggestion] Disallow comparing an enum value with a non-enum value
	"@typescript-eslint/no-unsafe-enum-comparison": "error",

	// [suggestion] Disallow unused expressions
	"no-unused-expressions": "off",
	"@typescript-eslint/no-unused-expressions": "error",

	// [suggestion] Disallow default values that will never be used
	"@typescript-eslint/no-useless-default-assignment": "error",

	// [suggestion] Disallow empty exports that don't change anything in a module file
	"@typescript-eslint/no-useless-empty-export": "error",

	// [suggestion] Enforce non-null assertions over explicit type assertions
	// "@typescript-eslint/non-nullable-type-assertion-style": "off",

	// [suggestion] Enforce the use of `as const` over literal type
	"@typescript-eslint/prefer-as-const": "error",

	// [suggestion] Require destructuring from arrays and/or objects
	"prefer-destructuring": "off",
	"@typescript-eslint/prefer-destructuring": "error",

	// [suggestion] Require each enum member value to be explicitly initialized
	"@typescript-eslint/prefer-enum-initializers": "error",

	// [suggestion] Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
	"@typescript-eslint/prefer-find": "error",

	// [suggestion] Enforce the use of `for-of` loop over the standard `for` loop where possible
	"@typescript-eslint/prefer-for-of": "error",

	// [suggestion] Enforce using function types instead of interfaces with call signatures
	"@typescript-eslint/prefer-function-type": "error",

	// [suggestion] Enforce `includes` method over `indexOf` method
	"@typescript-eslint/prefer-includes": "error",

	// [suggestion] Require all enum members to be literal values
	"@typescript-eslint/prefer-literal-enum-member": "error",

	// [suggestion] Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
	"@typescript-eslint/prefer-namespace-keyword": "error",

	// [suggestion] Enforce using the nullish coalescing operator instead of logical assignments or chaining
	"@typescript-eslint/prefer-nullish-coalescing": "error",

	// [suggestion] Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
	"@typescript-eslint/prefer-optional-chain": "error",

	// [suggestion] Require using Error objects as Promise rejection reasons
	"prefer-promise-reject-errors": "off",
	"@typescript-eslint/prefer-promise-reject-errors": "error",

	// [suggestion] Require private members to be marked as `readonly` if they're never modified outside of the constructor
	"@typescript-eslint/prefer-readonly": "error",

	// [suggestion] Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
	// "@typescript-eslint/prefer-readonly-parameter-types": "off",

	// [suggestion] Enforce `RegExp#exec` over `String#match` if no global flag is provided
	// "@typescript-eslint/prefer-regexp-exec": "off",

	// [suggestion] Enforce that `this` is used when only `this` type is returned
	"@typescript-eslint/prefer-return-this-type": "error",

	// [suggestion] Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
	"@typescript-eslint/prefer-string-starts-ends-with": "error",

	// [suggestion] Require any function or method that returns a Promise to be marked async
	// "@typescript-eslint/promise-function-async": "off",

	// [suggestion] Disallow async functions which do not return promises and have no `await` expression
	"require-await": "off",
	"@typescript-eslint/require-await": "error",

	// [suggestion] Disallow certain types in boolean expressions
	"@typescript-eslint/strict-boolean-expressions": ["error", {
		"allowString": false,
		"allowNumber": false,
		"allowNullableObject": false,
	}],

	// [suggestion] Require switch-case statements to be exhaustive
	"@typescript-eslint/switch-exhaustiveness-check": "error",

	// [suggestion] Disallow certain triple slash directives in favor of ES6-style import declarations
	"@typescript-eslint/triple-slash-reference": "error",

	// [suggestion] Disallow two overloads that could be unified into one with a union or an optional/rest parameter
	"@typescript-eslint/unified-signatures": "error",

	// [suggestion] Enforce typing arguments in Promise rejection callbacks as `unknown`
	"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
};
