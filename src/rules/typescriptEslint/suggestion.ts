/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @stylistic/array-bracket-newline */
/* eslint-disable @stylistic/array-element-newline */

import type {FlatConfig} from "@typescript-eslint/utils/ts-eslint";

export const rules: FlatConfig.Rules = {
	// [suggestion] Require that function overload signatures be consecutive
	// []
	"@typescript-eslint/adjacent-overload-signatures": "error",

	// [suggestion] Require consistently using either `T[]` or `Array<T>` for arrays
	// [
	// 	{
	// 		"default": "array"
	// 	}
	// ]
	"@typescript-eslint/array-type": ["error", {
		"default": "generic",
	}],

	// [suggestion] Disallow `// tslint:<rule-flag>` comments
	// []
	// "@typescript-eslint/ban-tslint-comment": "off",

	// [suggestion] Enforce that class methods utilize `this`
	// [
	// 	{
	// 		"enforceForClassFields": true,
	// 		"exceptMethods": [],
	// 		"ignoreClassesThatImplementAnInterface": false,
	// 		"ignoreOverrideMethods": false
	// 	}
	// ]
	// "class-methods-use-this": "off",
	// "@typescript-eslint/class-methods-use-this": "off",

	// [suggestion] Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
	// [
	// 	"constructor"
	// ]
	"@typescript-eslint/consistent-generic-constructors": "error",

	// [suggestion] Require or disallow the `Record` type
	// [
	// 	"record"
	// ]
	// "@typescript-eslint/consistent-indexed-object-style": "off",

	// [suggestion] Require `return` statements to either always or never specify values
	// [
	// 	{
	// 		"treatUndefinedAsUnspecified": false
	// 	}
	// ]
	// "consistent-return": "off",
	// "@typescript-eslint/consistent-return": "off",

	// [suggestion] Enforce consistent usage of type assertions
	// [
	// 	{
	// 		"arrayLiteralTypeAssertions": "allow",
	// 		"assertionStyle": "as",
	// 		"objectLiteralTypeAssertions": "allow"
	// 	}
	// ]
	"@typescript-eslint/consistent-type-assertions": ["error", {
		"assertionStyle": "never",
	}],

	// [suggestion] Enforce type definitions to consistently use either `interface` or `type`
	// [
	// 	"interface"
	// ]
	"@typescript-eslint/consistent-type-definitions": "error",

	// [suggestion] Enforce consistent usage of type exports
	// [
	// 	{
	// 		"fixMixedExportsWithInlineTypeSpecifier": false
	// 	}
	// ]
	"@typescript-eslint/consistent-type-exports": "error",

	// [suggestion] Enforce consistent usage of type imports
	// [
	// 	{
	// 		"disallowTypeAnnotations": true,
	// 		"fixStyle": "separate-type-imports",
	// 		"prefer": "type-imports"
	// 	}
	// ]
	"@typescript-eslint/consistent-type-imports": "error",

	// [suggestion] Enforce default parameters to be last
	// []
	"default-param-last": "off",
	"@typescript-eslint/default-param-last": "error",

	// [suggestion] Enforce dot notation whenever possible
	// [
	// 	{
	// 		"allowIndexSignaturePropertyAccess": false,
	// 		"allowKeywords": true,
	// 		"allowPattern": "",
	// 		"allowPrivateClassPropertyAccess": false,
	// 		"allowProtectedClassPropertyAccess": false
	// 	}
	// ]
	// "dot-notation": "off",
	// "@typescript-eslint/dot-notation": "off",

	// [suggestion] Require or disallow initialization in variable declarations
	// [
	// 	"always"
	// ]
	// "init-declarations": "off",
	// "@typescript-eslint/init-declarations": "off",

	// [suggestion] Enforce a maximum number of parameters in function definitions
	// [
	// 	{
	// 		"countVoidThis": false,
	// 		"max": 3
	// 	}
	// ]
	// "max-params": "off",
	// "@typescript-eslint/max-params": "off",

	// [suggestion] Require a consistent member declaration order
	// [
	// 	{
	// 		"default": {
	// 			"memberTypes": [
	// 				"signature",
	// 				"call-signature",
	// 				"public-static-field",
	// 				"protected-static-field",
	// 				"private-static-field",
	// 				"#private-static-field",
	// 				"public-decorated-field",
	// 				"protected-decorated-field",
	// 				"private-decorated-field",
	// 				"public-instance-field",
	// 				"protected-instance-field",
	// 				"private-instance-field",
	// 				"#private-instance-field",
	// 				"public-abstract-field",
	// 				"protected-abstract-field",
	// 				"public-field",
	// 				"protected-field",
	// 				"private-field",
	// 				"#private-field",
	// 				"static-field",
	// 				"instance-field",
	// 				"abstract-field",
	// 				"decorated-field",
	// 				"field",
	// 				"static-initialization",
	// 				"public-constructor",
	// 				"protected-constructor",
	// 				"private-constructor",
	// 				"constructor",
	// 				"public-static-accessor",
	// 				"protected-static-accessor",
	// 				"private-static-accessor",
	// 				"#private-static-accessor",
	// 				"public-decorated-accessor",
	// 				"protected-decorated-accessor",
	// 				"private-decorated-accessor",
	// 				"public-instance-accessor",
	// 				"protected-instance-accessor",
	// 				"private-instance-accessor",
	// 				"#private-instance-accessor",
	// 				"public-abstract-accessor",
	// 				"protected-abstract-accessor",
	// 				"public-accessor",
	// 				"protected-accessor",
	// 				"private-accessor",
	// 				"#private-accessor",
	// 				"static-accessor",
	// 				"instance-accessor",
	// 				"abstract-accessor",
	// 				"decorated-accessor",
	// 				"accessor",
	// 				"public-static-get",
	// 				"protected-static-get",
	// 				"private-static-get",
	// 				"#private-static-get",
	// 				"public-decorated-get",
	// 				"protected-decorated-get",
	// 				"private-decorated-get",
	// 				"public-instance-get",
	// 				"protected-instance-get",
	// 				"private-instance-get",
	// 				"#private-instance-get",
	// 				"public-abstract-get",
	// 				"protected-abstract-get",
	// 				"public-get",
	// 				"protected-get",
	// 				"private-get",
	// 				"#private-get",
	// 				"static-get",
	// 				"instance-get",
	// 				"abstract-get",
	// 				"decorated-get",
	// 				"get",
	// 				"public-static-set",
	// 				"protected-static-set",
	// 				"private-static-set",
	// 				"#private-static-set",
	// 				"public-decorated-set",
	// 				"protected-decorated-set",
	// 				"private-decorated-set",
	// 				"public-instance-set",
	// 				"protected-instance-set",
	// 				"private-instance-set",
	// 				"#private-instance-set",
	// 				"public-abstract-set",
	// 				"protected-abstract-set",
	// 				"public-set",
	// 				"protected-set",
	// 				"private-set",
	// 				"#private-set",
	// 				"static-set",
	// 				"instance-set",
	// 				"abstract-set",
	// 				"decorated-set",
	// 				"set",
	// 				"public-static-method",
	// 				"protected-static-method",
	// 				"private-static-method",
	// 				"#private-static-method",
	// 				"public-decorated-method",
	// 				"protected-decorated-method",
	// 				"private-decorated-method",
	// 				"public-instance-method",
	// 				"protected-instance-method",
	// 				"private-instance-method",
	// 				"#private-instance-method",
	// 				"public-abstract-method",
	// 				"protected-abstract-method",
	// 				"public-method",
	// 				"protected-method",
	// 				"private-method",
	// 				"#private-method",
	// 				"static-method",
	// 				"instance-method",
	// 				"abstract-method",
	// 				"decorated-method",
	// 				"method"
	// 			]
	// 		}
	// 	}
	// ]
	// "@typescript-eslint/member-ordering": "off",

	// [suggestion] Enforce using a particular method signature syntax
	// [
	// 	"property"
	// ]
	"@typescript-eslint/method-signature-style": "error",

	// [suggestion] Enforce naming conventions for everything across a codebase
	// [
	// 	{
	// 		"format": [
	// 			"camelCase"
	// 		],
	// 		"leadingUnderscore": "allow",
	// 		"selector": "default",
	// 		"trailingUnderscore": "allow"
	// 	},
	// 	{
	// 		"format": [
	// 			"camelCase",
	// 			"PascalCase"
	// 		],
	// 		"selector": "import"
	// 	},
	// 	{
	// 		"format": [
	// 			"camelCase",
	// 			"UPPER_CASE"
	// 		],
	// 		"leadingUnderscore": "allow",
	// 		"selector": "variable",
	// 		"trailingUnderscore": "allow"
	// 	},
	// 	{
	// 		"format": [
	// 			"PascalCase"
	// 		],
	// 		"selector": "typeLike"
	// 	}
	// ]
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
	// []
	"no-array-constructor": "off",
	"@typescript-eslint/no-array-constructor": "error",

	// [suggestion] Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
	// [
	// 	{
	// 		"checkUnknown": false,
	// 		"ignoredTypeNames": [
	// 			"Error",
	// 			"RegExp",
	// 			"URL",
	// 			"URLSearchParams"
	// 		]
	// 	}
	// ]
	"@typescript-eslint/no-base-to-string": "error",

	// [suggestion] Disallow duplicate constituents of union or intersection types
	// [
	// 	{
	// 		"ignoreIntersections": false,
	// 		"ignoreUnions": false
	// 	}
	// ]
	"@typescript-eslint/no-duplicate-type-constituents": "error",

	// [suggestion] Disallow using the `delete` operator on computed key expressions
	// []
	"@typescript-eslint/no-dynamic-delete": "error",

	// [suggestion] Disallow empty functions
	// [
	// 	{
	// 		"allow": []
	// 	}
	// ]
	"no-empty-function": "off",
	"@typescript-eslint/no-empty-function": "error",

	// [suggestion] Disallow accidentally using the "empty object" type
	// [
	// 	{
	// 		"allowInterfaces": "never",
	// 		"allowObjectTypes": "never"
	// 	}
	// ]
	"@typescript-eslint/no-empty-object-type": "error",

	// [suggestion] Disallow the `any` type
	// [
	// 	{
	// 		"fixToUnknown": false,
	// 		"ignoreRestArgs": false
	// 	}
	// ]
	"@typescript-eslint/no-explicit-any": "error",

	// [suggestion] Disallow classes used as namespaces
	// [
	// 	{
	// 		"allowConstructorOnly": false,
	// 		"allowEmpty": false,
	// 		"allowStaticOnly": false,
	// 		"allowWithDecorator": false
	// 	}
	// ]
	"@typescript-eslint/no-extraneous-class": "error",

	// [suggestion] Disallow the use of `eval()`-like functions
	// []
	"no-implied-eval": "off",
	"@typescript-eslint/no-implied-eval": "error",

	// [suggestion] Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
	// [
	// 	{
	// 		"ignoreParameters": false,
	// 		"ignoreProperties": false
	// 	}
	// ]
	"@typescript-eslint/no-inferrable-types": "error",

	// [suggestion] Disallow `this` keywords outside of classes or class-like objects
	// [
	// 	{
	// 		"capIsConstructor": true
	// 	}
	// ]
	"no-invalid-this": "off",
	"@typescript-eslint/no-invalid-this": "error",

	// [suggestion] Disallow magic numbers
	// [
	// 	{
	// 		"detectObjects": false,
	// 		"enforceConst": false,
	// 		"ignore": [],
	// 		"ignoreArrayIndexes": false,
	// 		"ignoreEnums": false,
	// 		"ignoreNumericLiteralTypes": false,
	// 		"ignoreReadonlyClassProperties": false,
	// 		"ignoreTypeIndexes": false
	// 	}
	// ]
	// "no-magic-numbers": "off",
	// "@typescript-eslint/no-magic-numbers": "off",

	// [suggestion] Disallow the `void` operator except when used to discard a value
	// [
	// 	{
	// 		"checkNever": false
	// 	}
	// ]
	"@typescript-eslint/no-meaningless-void-operator": "error",

	// [suggestion] Disallow TypeScript namespaces
	// [
	// 	{
	// 		"allowDeclarations": false,
	// 		"allowDefinitionFiles": true
	// 	}
	// ]
	"@typescript-eslint/no-namespace": "error",

	// [suggestion] Disallow variable redeclaration
	// [
	// 	{
	// 		"builtinGlobals": true,
	// 		"ignoreDeclarationMerge": true
	// 	}
	// ]
	"no-redeclare": "off",
	"@typescript-eslint/no-redeclare": "error",

	// [suggestion] Disallow members of unions and intersections that do nothing or override type information
	// []
	"@typescript-eslint/no-redundant-type-constituents": "error",

	// [suggestion] Disallow certain types
	// [
	// 	{}
	// ]
	// "@typescript-eslint/no-restricted-types": "off",

	// [suggestion] Disallow variable declarations from shadowing variables declared in the outer scope
	// [
	// 	{
	// 		"allow": [],
	// 		"builtinGlobals": false,
	// 		"hoist": "functions-and-types",
	// 		"ignoreFunctionTypeParameterNameValueShadow": true,
	// 		"ignoreOnInitialization": false,
	// 		"ignoreTypeValueShadow": true
	// 	}
	// ]
	"no-shadow": "off",
	"@typescript-eslint/no-shadow": "error",

	// [suggestion] Disallow aliasing `this`
	// [
	// 	{
	// 		"allowDestructuring": true,
	// 		"allowedNames": []
	// 	}
	// ]
	"@typescript-eslint/no-this-alias": "error",

	// [suggestion] Disallow unnecessary equality comparisons against boolean literals
	// [
	// 	{
	// 		"allowComparingNullableBooleansToFalse": true,
	// 		"allowComparingNullableBooleansToTrue": true,
	// 		"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false
	// 	}
	// ]
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

	// [suggestion] Disallow conditionals where the type is always truthy or always falsy
	// [
	// 	{
	// 		"allowConstantLoopConditions": "never",
	// 		"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
	// 		"checkTypePredicates": false
	// 	}
	// ]
	"@typescript-eslint/no-unnecessary-condition": "error",

	// [suggestion] Disallow unnecessary assignment of constructor property parameter
	// []
	"@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",

	// [suggestion] Disallow unnecessary namespace qualifiers
	// []
	"@typescript-eslint/no-unnecessary-qualifier": "error",

	// [suggestion] Disallow unnecessary template expressions
	// []
	"@typescript-eslint/no-unnecessary-template-expression": "error",

	// [suggestion] Disallow type arguments that are equal to the default
	// []
	"@typescript-eslint/no-unnecessary-type-arguments": "error",

	// [suggestion] Disallow type assertions that do not change the type of an expression
	// [
	// 	{}
	// ]
	"@typescript-eslint/no-unnecessary-type-assertion": "error",

	// [suggestion] Disallow unnecessary constraints on generic types
	// []
	"@typescript-eslint/no-unnecessary-type-constraint": "error",

	// [suggestion] Disallow conversion idioms when they do not change the type or value of the expression
	// []
	"@typescript-eslint/no-unnecessary-type-conversion": "error",

	// [suggestion] Disallow comparing an enum value with a non-enum value
	// []
	"@typescript-eslint/no-unsafe-enum-comparison": "error",

	// [suggestion] Disallow unused expressions
	// [
	// 	{
	// 		"allowShortCircuit": false,
	// 		"allowTaggedTemplates": false,
	// 		"allowTernary": false
	// 	}
	// ]
	"no-unused-expressions": "off",
	"@typescript-eslint/no-unused-expressions": "error",

	// [suggestion] Disallow default values that will never be used
	// [
	// 	{
	// 		"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false
	// 	}
	// ]
	"@typescript-eslint/no-useless-default-assignment": "error",

	// [suggestion] Disallow empty exports that don't change anything in a module file
	// []
	"@typescript-eslint/no-useless-empty-export": "error",

	// [suggestion] Enforce non-null assertions over explicit type assertions
	// []
	// "@typescript-eslint/non-nullable-type-assertion-style": "off",

	// [suggestion] Enforce the use of `as const` over literal type
	// []
	"@typescript-eslint/prefer-as-const": "error",

	// [suggestion] Require destructuring from arrays and/or objects
	// [
	// 	{
	// 		"AssignmentExpression": {
	// 			"array": true,
	// 			"object": true
	// 		},
	// 		"VariableDeclarator": {
	// 			"array": true,
	// 			"object": true
	// 		}
	// 	},
	// 	{}
	// ]
	"prefer-destructuring": "off",
	"@typescript-eslint/prefer-destructuring": "error",

	// [suggestion] Require each enum member value to be explicitly initialized
	// []
	"@typescript-eslint/prefer-enum-initializers": "error",

	// [suggestion] Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
	// []
	"@typescript-eslint/prefer-find": "error",

	// [suggestion] Enforce the use of `for-of` loop over the standard `for` loop where possible
	// []
	"@typescript-eslint/prefer-for-of": "error",

	// [suggestion] Enforce using function types instead of interfaces with call signatures
	// []
	"@typescript-eslint/prefer-function-type": "error",

	// [suggestion] Enforce `includes` method over `indexOf` method
	// []
	"@typescript-eslint/prefer-includes": "error",

	// [suggestion] Require all enum members to be literal values
	// [
	// 	{
	// 		"allowBitwiseExpressions": false
	// 	}
	// ]
	"@typescript-eslint/prefer-literal-enum-member": "error",

	// [suggestion] Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
	// []
	"@typescript-eslint/prefer-namespace-keyword": "error",

	// [suggestion] Enforce using the nullish coalescing operator instead of logical assignments or chaining
	// [
	// 	{
	// 		"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
	// 		"ignoreBooleanCoercion": false,
	// 		"ignoreConditionalTests": true,
	// 		"ignoreIfStatements": false,
	// 		"ignoreMixedLogicalExpressions": false,
	// 		"ignorePrimitives": {
	// 			"bigint": false,
	// 			"boolean": false,
	// 			"number": false,
	// 			"string": false
	// 		},
	// 		"ignoreTernaryTests": false
	// 	}
	// ]
	"@typescript-eslint/prefer-nullish-coalescing": "error",

	// [suggestion] Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
	// [
	// 	{
	// 		"allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing": false,
	// 		"checkAny": true,
	// 		"checkBigInt": true,
	// 		"checkBoolean": true,
	// 		"checkNumber": true,
	// 		"checkString": true,
	// 		"checkUnknown": true,
	// 		"requireNullish": false
	// 	}
	// ]
	"@typescript-eslint/prefer-optional-chain": "error",

	// [suggestion] Require using Error objects as Promise rejection reasons
	// [
	// 	{
	// 		"allow": [],
	// 		"allowEmptyReject": false,
	// 		"allowThrowingAny": false,
	// 		"allowThrowingUnknown": false
	// 	}
	// ]
	"prefer-promise-reject-errors": "off",
	"@typescript-eslint/prefer-promise-reject-errors": "error",

	// [suggestion] Require private members to be marked as `readonly` if they're never modified outside of the constructor
	// [
	// 	{
	// 		"onlyInlineLambdas": false
	// 	}
	// ]
	"@typescript-eslint/prefer-readonly": "error",

	// [suggestion] Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
	// [
	// 	{
	// 		"allow": [],
	// 		"checkParameterProperties": true,
	// 		"ignoreInferredTypes": false,
	// 		"treatMethodsAsReadonly": false
	// 	}
	// ]
	// "@typescript-eslint/prefer-readonly-parameter-types": "off",

	// [suggestion] Enforce `RegExp#exec` over `String#match` if no global flag is provided
	// []
	// "@typescript-eslint/prefer-regexp-exec": "off",

	// [suggestion] Enforce that `this` is used when only `this` type is returned
	// []
	"@typescript-eslint/prefer-return-this-type": "error",

	// [suggestion] Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
	// [
	// 	{
	// 		"allowSingleElementEquality": "never"
	// 	}
	// ]
	"@typescript-eslint/prefer-string-starts-ends-with": "error",

	// [suggestion] Require any function or method that returns a Promise to be marked async
	// [
	// 	{
	// 		"allowAny": true,
	// 		"allowedPromiseNames": [],
	// 		"checkArrowFunctions": true,
	// 		"checkFunctionDeclarations": true,
	// 		"checkFunctionExpressions": true,
	// 		"checkMethodDeclarations": true
	// 	}
	// ]
	// "@typescript-eslint/promise-function-async": "off",

	// [suggestion] Disallow async functions which do not return promises and have no `await` expression
	// []
	"require-await": "off",
	"@typescript-eslint/require-await": "error",

	// [suggestion] Disallow certain types in boolean expressions
	// [
	// 	{
	// 		"allowAny": false,
	// 		"allowNullableBoolean": false,
	// 		"allowNullableEnum": false,
	// 		"allowNullableNumber": false,
	// 		"allowNullableObject": true,
	// 		"allowNullableString": false,
	// 		"allowNumber": true,
	// 		"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
	// 		"allowString": true
	// 	}
	// ]
	"@typescript-eslint/strict-boolean-expressions": ["error", {
		"allowString": false,
		"allowNumber": false,
		"allowNullableObject": false,
	}],

	// [suggestion] Require switch-case statements to be exhaustive
	// [
	// 	{
	// 		"allowDefaultCaseForExhaustiveSwitch": true,
	// 		"considerDefaultExhaustiveForUnions": false,
	// 		"requireDefaultForNonUnion": false
	// 	}
	// ]
	"@typescript-eslint/switch-exhaustiveness-check": "error",

	// [suggestion] Disallow certain triple slash directives in favor of ES6-style import declarations
	// [
	// 	{
	// 		"lib": "always",
	// 		"path": "never",
	// 		"types": "prefer-import"
	// 	}
	// ]
	"@typescript-eslint/triple-slash-reference": "error",

	// [suggestion] Disallow two overloads that could be unified into one with a union or an optional/rest parameter
	// [
	// 	{
	// 		"ignoreDifferentlyNamedParameters": false,
	// 		"ignoreOverloadsWithDifferentJSDoc": false
	// 	}
	// ]
	"@typescript-eslint/unified-signatures": "error",

	// [suggestion] Enforce typing arguments in Promise rejection callbacks as `unknown`
	// []
	"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
};
