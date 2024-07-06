import type { FlatConfig } from "@typescript-eslint/utils/dist/ts-eslint";

export const rules: FlatConfig.Rules = {
	// src/supported-rules.ts

	// Require that member overloads be consecutive
	"@typescript-eslint/adjacent-overload-signatures": "error",

	// Requires using either T[] or Array<T> for arrays
	"@typescript-eslint/array-type": [
		"error",
		{
			"default": "generic",
			"readonly": "generic",
		},
	],

	// Disallows awaiting a value that is not a Thenable
	// "@typescript-eslint/await-thenable": "off",

	// Bans @ts-<directive> comments from being used or requires descriptions after directive
	"@typescript-eslint/ban-ts-comment": "error",

	// Bans // tslint:<rule-flag> comments from being used
	// "@typescript-eslint/ban-tslint-comment": "off",

	// Bans specific types from being used
	"@typescript-eslint/ban-types": "error",

	// Ensures that literals on classes are exposed in a consistent style
	// "@typescript-eslint/class-literal-property-style": "off",

	// Enforce or disallow the use of the record type
	// "@typescript-eslint/consistent-indexed-object-style": "off",

	// Enforces consistent usage of type assertions
	// "@typescript-eslint/consistent-type-assertions": "off",

	// Consistent with type definition either interface or type
	// "@typescript-eslint/consistent-type-definitions": "off",

	// Enforces consistent usage of type imports
	// "@typescript-eslint/consistent-type-imports": "off",

	// Require explicit return types on functions and class methods
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

	// Require explicit accessibility modifiers on class properties and methods
	"@typescript-eslint/explicit-member-accessibility": [
		"error",
		{
			"accessibility": "explicit",
			"ignoredMethodNames": [],
			"overrides": {},
		},
	],

	// Require explicit return and argument types on exported functions' and classes' public class methods
	"@typescript-eslint/explicit-module-boundary-types": "warn",

	// Require a specific member delimiter style for interfaces and type literals
	// "@typescript-eslint/member-delimiter-style": "off",

	// Require a consistent member declaration order
	// "@typescript-eslint/member-ordering": "off",

	// Enforces using a particular method signature syntax.
	// "@typescript-eslint/method-signature-style": "off",

	// Enforces naming conventions for everything across a codebase
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

	// Requires that .toString() is only called on objects which provide useful information when stringified
	// "@typescript-eslint/no-base-to-string": "off",

	// Disallow non-null assertion in locations that may be confusing
	// "@typescript-eslint/no-confusing-non-null-assertion": "off",

	// Requires expressions of type void to appear in statement position
	// "@typescript-eslint/no-confusing-void-expression": "off",

	// Disallow the delete operator with computed key expressions
	// "@typescript-eslint/no-dynamic-delete": "off",

	// Disallow the declaration of empty interfaces
	"@typescript-eslint/no-empty-interface": "error",

	// Disallow usage of the any type
	"@typescript-eslint/no-explicit-any": "warn",

	// Disallow extra non-null assertion
	"@typescript-eslint/no-extra-non-null-assertion": "error",

	// Forbids the use of classes as namespaces
	// "@typescript-eslint/no-extraneous-class": "off",

	// Requires Promise-like values to be handled appropriately
	// "@typescript-eslint/no-floating-promises": "off",

	// Disallow iterating over an array with a for-in loop
	// "@typescript-eslint/no-for-in-array": "off",

	// Disallow usage of the implicit any type in catch clauses
	// "@typescript-eslint/no-implicit-any-catch": "off",

	// Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
	"@typescript-eslint/no-inferrable-types": "error",

	// Disallows usage of void type outside of generic or return types
	// "@typescript-eslint/no-invalid-void-type": "off",

	// Enforce valid definition of new and constructor
	"@typescript-eslint/no-misused-new": "error",

	// Avoid using promises in places not designed to handle them
	// "@typescript-eslint/no-misused-promises": "off",

	// Disallow the use of custom TypeScript modules and namespaces
	"@typescript-eslint/no-namespace": "error",

	// Disallows using a non-null assertion after an optional chain expression
	"@typescript-eslint/no-non-null-asserted-optional-chain": "error",

	// Disallows non-null assertions using the ! postfix operator
	"@typescript-eslint/no-non-null-assertion": "warn",

	// Disallow the use of parameter properties in class constructors
	// "@typescript-eslint/no-parameter-properties": "off",

	// Disallows invocation of require()
	// "@typescript-eslint/no-require-imports": "off",

	// Disallow aliasing this
	"@typescript-eslint/no-this-alias": "error",

	// Disallow the use of type aliases
	// "@typescript-eslint/no-type-alias": "off",

	// Flags unnecessary equality comparisons against boolean literals
	// "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",

	// Prevents conditionals where the type is always truthy or always falsy
	"@typescript-eslint/no-unnecessary-condition": [
		"error",
		{
			"allowConstantLoopConditions": true,
		},
	],

	// Warns when a namespace qualifier is unnecessary
	// "@typescript-eslint/no-unnecessary-qualifier": "off",

	// Enforces that type arguments will not be used if not required
	// "@typescript-eslint/no-unnecessary-type-arguments": "off",

	// Warns if a type assertion does not change the type of an expression
	// "@typescript-eslint/no-unnecessary-type-assertion": "off",

	// Disallows unnecessary constraints on generic types
	// "@typescript-eslint/no-unnecessary-type-constraint": "off",

	// Disallows calling an function with an any type value
	// "@typescript-eslint/no-unsafe-argument": "off",

	// Disallows assigning any to variables and properties
	// "@typescript-eslint/no-unsafe-assignment": "off",

	// Disallows calling an any type value
	// "@typescript-eslint/no-unsafe-call": "off",

	// Disallows member access on any typed variables
	// "@typescript-eslint/no-unsafe-member-access": "off",

	// Disallows returning any from a function
	// "@typescript-eslint/no-unsafe-return": "off",

	// Disallows the use of require statements except in import statements
	"@typescript-eslint/no-var-requires": "error",

	// Prefers a non-null assertion over explicit type cast when possible
	// "@typescript-eslint/non-nullable-type-assertion-style": "off",

	// Prefer usage of as const over literal type
	"@typescript-eslint/prefer-as-const": "error",

	// Prefer initializing each enums member value
	// "@typescript-eslint/prefer-enum-initializers": "off",

	// Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
	// "@typescript-eslint/prefer-for-of": "off",

	// Use function types instead of interfaces with call signatures
	"@typescript-eslint/prefer-function-type": ["error"],

	// Enforce includes method over indexOf method
	// "@typescript-eslint/prefer-includes": "off",

	// Require that all enum members be literal values to prevent unintended enum member name shadow issues
	// "@typescript-eslint/prefer-literal-enum-member": "off",

	// Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
	"@typescript-eslint/prefer-namespace-keyword": "error",

	// Enforce the usage of the nullish coalescing operator instead of logical chaining
	// "@typescript-eslint/prefer-nullish-coalescing": "off",

	// Prefer using concise optional chain expressions instead of chained logical ands
	// "@typescript-eslint/prefer-optional-chain": "off",

	// Requires that private members are marked as readonly if they're never modified outside of the constructor
	// "@typescript-eslint/prefer-readonly": "off",

	// Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
	// "@typescript-eslint/prefer-readonly-parameter-types": "off",

	// Prefer using type parameter when calling Array#reduce instead of casting
	// "@typescript-eslint/prefer-reduce-type-parameter": "off",

	// Enforce that RegExp#exec is used instead of String#match if no global flag is provided
	// "@typescript-eslint/prefer-regexp-exec": "off",

	// Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
	// "@typescript-eslint/prefer-string-starts-ends-with": "off",

	// Recommends using @ts-expect-error over @ts-ignore
	// "@typescript-eslint/prefer-ts-expect-error": "off",

	// Requires any function or method that returns a Promise to be marked async
	// "@typescript-eslint/promise-function-async": "off",

	// Requires Array#sort calls to always provide a compareFunction
	// "@typescript-eslint/require-array-sort-compare": "off",

	// When adding two variables, operands must both be of type number or of type string
	// "@typescript-eslint/restrict-plus-operands": "off",

	// Enforce template literal expressions to be of string type
	// "@typescript-eslint/restrict-template-expressions": "off",

	// Enforces that members of a type union/intersection are sorted alphabetically
	// "@typescript-eslint/sort-type-union-intersection-members": "off",

	// Restricts the types allowed in boolean expressions
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

	// Exhaustiveness checking in switch with union type
	// "@typescript-eslint/switch-exhaustiveness-check": "off",

	// Sets preference level for triple slash directives versus ES6-style import declarations
	"@typescript-eslint/triple-slash-reference": "error",

	// Require consistent spacing around type annotations
	// "@typescript-eslint/type-annotation-spacing": "off",

	// Requires type annotations to exist
	// "@typescript-eslint/typedef": "off",

	// Enforces unbound methods are called with their expected scope
	// "@typescript-eslint/unbound-method": "off",

	// Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
	// "@typescript-eslint/unified-signatures": "off",

	// src/extension-rules.ts

	// Enforce consistent brace style for blocks
	// "@typescript-eslint/brace-style": "off",

	// Require or disallow trailing comma
	"@typescript-eslint/comma-dangle": [
		"error",
		{
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "always-multiline",
			"enums": "always-multiline",
			"generics": "always-multiline",
			"tuples": "always-multiline",
		},
	],

	// Enforces consistent spacing before and after commas
	"@typescript-eslint/comma-spacing": [
		"error",
		{
			"before": false,
			"after": true,
		},
	],

	// Enforce default parameters to be last
	// "@typescript-eslint/default-param-last": "off",

	// enforce dot notation whenever possible
	// "@typescript-eslint/dot-notation": "off",

	// Require or disallow spacing between function identifiers and their invocations
	// "@typescript-eslint/func-call-spacing": "off",

	// Enforce consistent indentation
	"@typescript-eslint/indent": ["error", "tab"],

	// require or disallow initialization in variable declarations
	// "@typescript-eslint/init-declarations": "off",

	// Enforce consistent spacing before and after keywords
	// "@typescript-eslint/keyword-spacing": "off",

	// Require or disallow an empty line between class members
	// "@typescript-eslint/lines-between-class-members": "off",

	// Disallow generic Array constructors
	"@typescript-eslint/no-array-constructor": "error",

	// Disallow duplicate class members
	// "@typescript-eslint/no-dupe-class-members": "off",

	// Disallow duplicate imports
	// "@typescript-eslint/no-duplicate-imports": "off",

	// Disallow empty functions
	"@typescript-eslint/no-empty-function": "error",

	// Disallow unnecessary parentheses
	// "@typescript-eslint/no-extra-parens": "off",

	// Disallow unnecessary semicolons
	"@typescript-eslint/no-extra-semi": "error",

	// Disallow the use of eval()-like methods
	// "@typescript-eslint/no-implied-eval": "off",

	// Disallow this keywords outside of classes or class-like objects
	// "@typescript-eslint/no-invalid-this": "off",

	// Disallow function declarations that contain unsafe references inside loop statements
	// "@typescript-eslint/no-loop-func": "off",

	// Disallow literal numbers that lose precision
	// "@typescript-eslint/no-loss-of-precision": "off",

	// Disallow magic numbers
	// "@typescript-eslint/no-magic-numbers": "off",

	// Disallow variable redeclaration
	// "@typescript-eslint/no-redeclare": "off",

	// Disallow variable declarations from shadowing variables declared in the outer scope
	// "@typescript-eslint/no-shadow": "off",

	// Disallow throwing literals as exceptions
	// "@typescript-eslint/no-throw-literal": "off",

	// Disallow unused expressions
	// "@typescript-eslint/no-unused-expressions": "off",

	// Disallow unused variables
	// AG: there is no support for contructor parameter properties, thereby allowing all unused parameters.
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

	// Disallow the use of variables before they are defined
	// "@typescript-eslint/no-use-before-define": "off",

	// Disallow unnecessary constructors
	// "@typescript-eslint/no-useless-constructor": "off",

	// Enforce consistent spacing inside braces
	// "@typescript-eslint/object-curly-spacing": "off",

	// Enforce the consistent use of either backticks, double, or single quotes
	// "@typescript-eslint/quotes": "off",

	// Disallow async functions which have no await expression
	// "@typescript-eslint/require-await": "off",

	// Enforces consistent returning of awaited values
	// "@typescript-eslint/return-await": "off",

	// Require or disallow semicolons instead of ASI
	// "@typescript-eslint/semi": "off",

	// Enforces consistent spacing before function parenthesis
	// "@typescript-eslint/space-before-function-paren": "off",

	// This rule is aimed at ensuring there are spaces around infix operators.
	// "@typescript-eslint/space-infix-ops": "off",
};
