/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @stylistic/array-bracket-newline */
/* eslint-disable @stylistic/array-element-newline */

import type {ESLintRules} from "eslint/rules";

export const rules: Partial<ESLintRules> = {
	// [suggestion] Enforce getter and setter pairs in objects and classes
	// [
	// 	{
	// 		"enforceForTSTypes": false,
	// 		"enforceForClassMembers": true,
	// 		"getWithoutSet": false,
	// 		"setWithoutGet": true
	// 	}
	// ]
	// "accessor-pairs": "off",

	// [suggestion] Require braces around arrow function bodies
	// [
	// 	"as-needed"
	// ]
	// "arrow-body-style": "off",

	// [suggestion] Enforce the use of variables within the scope they are defined
	// "block-scoped-var": "off",

	// [suggestion] Enforce camelcase naming convention
	// [
	// 	{
	// 		"allow": [],
	// 		"ignoreDestructuring": false,
	// 		"ignoreGlobals": false,
	// 		"ignoreImports": false,
	// 		"properties": "always"
	// 	}
	// ]
	"camelcase": "error",

	// [suggestion] Enforce or disallow capitalization of the first letter of a comment
	// [
	// 	"always"
	// ]
	// "capitalized-comments": "off",

	// [suggestion] Enforce that class methods utilize `this`
	// [
	// 	{
	// 		"enforceForClassFields": true,
	// 		"exceptMethods": [],
	// 		"ignoreOverrideMethods": false
	// 	}
	// ]
	// "class-methods-use-this": "off",

	// [suggestion] Enforce a maximum cyclomatic complexity allowed in a program
	// [
	// 	20
	// ]
	// "complexity": "off",

	// [suggestion] Require `return` statements to either always or never specify values
	// [
	// 	{
	// 		"treatUndefinedAsUnspecified": false
	// 	}
	// ]
	// "consistent-return": "off",

	// [suggestion] Enforce consistent naming when capturing the current execution context
	// [
	// 	"that"
	// ]
	// "consistent-this": "off",

	// [suggestion] Enforce consistent brace style for all control statements
	// [
	// 	"all"
	// ]
	"curly": "error",

	// [suggestion] Require `default` cases in `switch` statements
	// [
	// 	{}
	// ]
	// "default-case": "off",

	// [suggestion] Enforce `default` clauses in `switch` statements to be last
	"default-case-last": "error",

	// [suggestion] Enforce default parameters to be last
	"default-param-last": "error",

	// [suggestion] Enforce dot notation whenever possible
	// [
	// 	{
	// 		"allowKeywords": true,
	// 		"allowPattern": ""
	// 	}
	// ]
	// "dot-notation": "off",

	// [suggestion] Require the use of `===` and `!==`
	// [
	// 	"always"
	// ]
	"eqeqeq": "error",

	// [suggestion] Require function names to match the name of the variable or property to which they are assigned
	// [
	// 	"always"
	// ]
	// "func-name-matching": "off",

	// [suggestion] Require or disallow named `function` expressions
	// [
	// 	"always",
	// 	{}
	// ]
	"func-names": ["error", "never"],

	// [suggestion] Enforce the consistent use of either `function` declarations or expressions assigned to variables
	// [
	// 	"expression",
	// 	{
	// 		"allowArrowFunctions": false,
	// 		"allowTypeAnnotation": false,
	// 		"overrides": {}
	// 	}
	// ]
	"func-style": ["error", "declaration", {
		"allowArrowFunctions": true,
	}],

	// [suggestion] Require grouped accessor pairs in object literals and classes
	// [
	// 	"anyOrder",
	// 	{
	// 		"enforceForTSTypes": false
	// 	}
	// ]
	"grouped-accessor-pairs": ["error", "setBeforeGet"],

	// [suggestion] Require `for-in` loops to include an `if` statement
	"guard-for-in": "error",

	// [suggestion] Disallow specified identifiers
	// []
	// "id-denylist": "off",

	// [suggestion] Enforce minimum and maximum identifier lengths
	// [
	// 	{
	// 		"exceptionPatterns": [],
	// 		"exceptions": [],
	// 		"min": 2,
	// 		"properties": "always"
	// 	}
	// ]
	// "id-length": "off",

	// [suggestion] Require identifiers to match a specified regular expression
	// [
	// 	"^.+$",
	// 	{
	// 		"classFields": false,
	// 		"ignoreDestructuring": false,
	// 		"onlyDeclarations": false,
	// 		"properties": false
	// 	}
	// ]
	// "id-match": "off",

	// [suggestion] Require or disallow initialization in variable declarations
	// [
	// 	"always"
	// ]
	// "init-declarations": "off",

	// [suggestion] Require or disallow logical assignment operator shorthand
	// [
	// 	"always"
	// ]
	"logical-assignment-operators": "error",

	// [suggestion] Enforce a maximum number of classes per file
	// [
	// 	1
	// ]
	// "max-classes-per-file": "off",

	// [suggestion] Enforce a maximum depth that blocks can be nested
	// [
	// 	4
	// ]
	// "max-depth": "off",

	// [suggestion] Enforce a maximum number of lines per file
	// [
	// 	300
	// ]
	// "max-lines": "off",

	// [suggestion] Enforce a maximum number of lines of code in a function
	// [
	// 	50
	// ]
	// "max-lines-per-function": "off",

	// [suggestion] Enforce a maximum depth that callbacks can be nested
	// [
	// 	10
	// ]
	// "max-nested-callbacks": "off",

	// [suggestion] Enforce a maximum number of parameters in function definitions
	// [
	// 	3
	// ]
	// "max-params": "off",

	// [suggestion] Enforce a maximum number of statements allowed in function blocks
	// [
	// 	10
	// ]
	// "max-statements": "off",

	// [suggestion] Require constructor names to begin with a capital letter
	// [
	// 	{
	// 		"capIsNew": true,
	// 		"capIsNewExceptions": [
	// 			"Array",
	// 			"Boolean",
	// 			"Date",
	// 			"Error",
	// 			"Function",
	// 			"Number",
	// 			"Object",
	// 			"RegExp",
	// 			"String",
	// 			"Symbol",
	// 			"BigInt"
	// 		],
	// 		"newIsCap": true,
	// 		"newIsCapExceptions": [],
	// 		"properties": true
	// 	}
	// ]
	"new-cap": "error",

	// [suggestion] Disallow the use of `alert`, `confirm`, and `prompt`
	"no-alert": "error",

	// [suggestion] Disallow `Array` constructors
	"no-array-constructor": "error",

	// [suggestion] Disallow bitwise operators
	// [
	// 	{
	// 		"allow": [],
	// 		"int32Hint": false
	// 	}
	// ]
	// "no-bitwise": "off",

	// [suggestion] Disallow the use of `arguments.caller` or `arguments.callee`
	"no-caller": "error",

	// [suggestion] Disallow lexical declarations in case clauses
	"no-case-declarations": "error",

	// [suggestion] Disallow the use of `console`
	// [
	// 	{}
	// ]
	// "no-console": "off",

	// [suggestion] Disallow `continue` statements
	// "no-continue": "off",

	// [suggestion] Disallow deleting variables
	"no-delete-var": "error",

	// [suggestion] Disallow equal signs explicitly at the beginning of regular expressions
	// "no-div-regex": "off",

	// [suggestion] Disallow `else` blocks after `return` statements in `if` statements
	// [
	// 	{
	// 		"allowElseIf": true
	// 	}
	// ]
	// "no-else-return": "off",

	// [suggestion] Disallow empty block statements
	// [
	// 	{
	// 		"allowEmptyCatch": false
	// 	}
	// ]
	"no-empty": "error",

	// [suggestion] Disallow empty functions
	// [
	// 	{
	// 		"allow": []
	// 	}
	// ]
	"no-empty-function": "error",

	// [suggestion] Disallow empty static blocks
	"no-empty-static-block": "error",

	// [suggestion] Disallow `null` comparisons without type-checking operators
	// "no-eq-null": "off",

	// [suggestion] Disallow the use of `eval()`
	// [
	// 	{
	// 		"allowIndirect": false
	// 	}
	// ]
	"no-eval": "error",

	// [suggestion] Disallow extending native types
	// [
	// 	{
	// 		"exceptions": []
	// 	}
	// ]
	"no-extend-native": "error",

	// [suggestion] Disallow unnecessary calls to `.bind()`
	"no-extra-bind": "error",

	// [suggestion] Disallow unnecessary boolean casts
	// [
	// 	{}
	// ]
	"no-extra-boolean-cast": "error",

	// [suggestion] Disallow unnecessary labels
	// "no-extra-label": "off",

	// [suggestion] Disallow assignments to native objects or read-only global variables
	// [
	// 	{
	// 		"exceptions": []
	// 	}
	// ]
	"no-global-assign": "error",

	// [suggestion] Disallow shorthand type conversions
	// [
	// 	{
	// 		"allow": [],
	// 		"boolean": true,
	// 		"disallowTemplateShorthand": false,
	// 		"number": true,
	// 		"string": true
	// 	}
	// ]
	"no-implicit-coercion": "error",

	// [suggestion] Disallow declarations in the global scope
	// [
	// 	{
	// 		"lexicalBindings": false
	// 	}
	// ]
	"no-implicit-globals": "error",

	// [suggestion] Disallow the use of `eval()`-like methods
	"no-implied-eval": "error",

	// [suggestion] Disallow inline comments after code
	// [
	// 	{}
	// ]
	// "no-inline-comments": "off",

	// [suggestion] Disallow use of `this` in contexts where the value of `this` is `undefined`
	// [
	// 	{
	// 		"capIsConstructor": true
	// 	}
	// ]
	"no-invalid-this": "error",

	// [suggestion] Disallow the use of the `__iterator__` property
	"no-iterator": "error",

	// [suggestion] Disallow labels that share a name with a variable
	// "no-label-var": "off",

	// [suggestion] Disallow labeled statements
	// [
	// 	{
	// 		"allowLoop": false,
	// 		"allowSwitch": false
	// 	}
	// ]
	"no-labels": "error",

	// [suggestion] Disallow unnecessary nested blocks
	"no-lone-blocks": "error",

	// [suggestion] Disallow `if` statements as the only statement in `else` blocks
	"no-lonely-if": "error",

	// [suggestion] Disallow function declarations that contain unsafe references inside loop statements
	"no-loop-func": "error",

	// [suggestion] Disallow magic numbers
	// [
	// 	{
	// 		"detectObjects": false,
	// 		"enforceConst": false,
	// 		"ignore": [],
	// 		"ignoreArrayIndexes": false,
	// 		"ignoreDefaultValues": false,
	// 		"ignoreClassFieldInitialValues": false,
	// 		"ignoreEnums": false,
	// 		"ignoreNumericLiteralTypes": false,
	// 		"ignoreReadonlyClassProperties": false,
	// 		"ignoreTypeIndexes": false
	// 	}
	// ]
	// "no-magic-numbers": "off",

	// [suggestion] Disallow use of chained assignment expressions
	// [
	// 	{
	// 		"ignoreNonDeclaration": false
	// 	}
	// ]
	"no-multi-assign": "error",

	// [suggestion] Disallow multiline strings
	// "no-multi-str": "off",

	// [suggestion] Disallow negated conditions
	// "no-negated-condition": "off",

	// [suggestion] Disallow nested ternary expressions
	// "no-nested-ternary": "off",

	// [suggestion] Disallow `new` operators outside of assignments or comparisons
	// "no-new": "off",

	// [suggestion] Disallow `new` operators with the `Function` object
	"no-new-func": "error",

	// [suggestion] Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
	"no-new-wrappers": "error",

	// [suggestion] Disallow `\8` and `\9` escape sequences in string literals
	// "no-nonoctal-decimal-escape": "off",

	// [suggestion] Disallow calls to the `Object` constructor without an argument
	"no-object-constructor": "error",

	// [suggestion] Disallow octal literals
	"no-octal": "error",

	// [suggestion] Disallow octal escape sequences in string literals
	"no-octal-escape": "error",

	// [suggestion] Disallow reassigning function parameters
	"no-param-reassign": "error",

	// [suggestion] Disallow the unary operators `++` and `--`
	// [
	// 	{
	// 		"allowForLoopAfterthoughts": false
	// 	}
	// ]
	// "no-plusplus": "off",

	// [suggestion] Disallow the use of the `__proto__` property
	"no-proto": "error",

	// [suggestion] Disallow variable redeclaration
	// [
	// 	{
	// 		"builtinGlobals": true
	// 	}
	// ]
	"no-redeclare": "error",

	// [suggestion] Disallow multiple spaces in regular expressions
	"no-regex-spaces": "error",

	// [suggestion] Disallow specified names in exports
	// [
	// 	{}
	// ]
	// "no-restricted-exports": "off",

	// [suggestion] Disallow specified global variables
	// "no-restricted-globals": "off",

	// [suggestion] Disallow specified modules when loaded by `import`
	// "no-restricted-imports": "off",

	// [suggestion] Disallow certain properties on certain objects
	// []
	// "no-restricted-properties": "off",

	// [suggestion] Disallow specified syntax
	// []
	// "no-restricted-syntax": "off",

	// [suggestion] Disallow assignment operators in `return` statements
	// [
	// 	"except-parens"
	// ]
	"no-return-assign": "error",

	// [suggestion] Disallow `javascript:` URLs
	"no-script-url": "error",

	// [suggestion] Disallow comma operators
	// [
	// 	{
	// 		"allowInParentheses": true
	// 	}
	// ]
	"no-sequences": "error",

	// [suggestion] Disallow variable declarations from shadowing variables declared in the outer scope
	// [
	// 	{
	// 		"allow": [],
	// 		"builtinGlobals": false,
	// 		"hoist": "functions",
	// 		"ignoreOnInitialization": false,
	// 		"ignoreTypeValueShadow": true,
	// 		"ignoreFunctionTypeParameterNameValueShadow": true
	// 	}
	// ]
	"no-shadow": "error",

	// [suggestion] Disallow identifiers from shadowing restricted names
	// [
	// 	{
	// 		"reportGlobalThis": true
	// 	}
	// ]
	"no-shadow-restricted-names": "error",

	// [suggestion] Disallow ternary operators
	// "no-ternary": "off",

	// [suggestion] Disallow throwing literals as exceptions
	"no-throw-literal": "error",

	// [suggestion] Disallow initializing variables to `undefined`
	// "no-undef-init": "off",

	// [suggestion] Disallow the use of `undefined` as an identifier
	// "no-undefined": "off",

	// [suggestion] Disallow dangling underscores in identifiers
	// [
	// 	{
	// 		"allow": [],
	// 		"allowAfterSuper": false,
	// 		"allowAfterThis": false,
	// 		"allowAfterThisConstructor": false,
	// 		"allowFunctionParams": true,
	// 		"allowInArrayDestructuring": true,
	// 		"allowInObjectDestructuring": true,
	// 		"enforceInClassFields": false,
	// 		"enforceInMethodNames": false
	// 	}
	// ]
	"no-underscore-dangle": "error",

	// [suggestion] Disallow ternary operators when simpler alternatives exist
	// [
	// 	{
	// 		"defaultAssignment": true
	// 	}
	// ]
	// "no-unneeded-ternary": "off",

	// [suggestion] Disallow unused expressions
	// [
	// 	{
	// 		"allowShortCircuit": false,
	// 		"allowTernary": false,
	// 		"allowTaggedTemplates": false,
	// 		"enforceForJSX": false,
	// 		"ignoreDirectives": false
	// 	}
	// ]
	"no-unused-expressions": "error",

	// [suggestion] Disallow unused labels
	"no-unused-labels": "error",

	// [suggestion] Disallow unnecessary calls to `.call()` and `.apply()`
	"no-useless-call": "error",

	// [suggestion] Disallow unnecessary `catch` clauses
	"no-useless-catch": "error",

	// [suggestion] Disallow unnecessary computed property keys in objects and classes
	// [
	// 	{
	// 		"enforceForClassMembers": true
	// 	}
	// ]
	// "no-useless-computed-key": "off",

	// [suggestion] Disallow unnecessary concatenation of literals or template literals
	"no-useless-concat": "error",

	// [suggestion] Disallow unnecessary constructors
	"no-useless-constructor": "error",

	// [suggestion] Disallow unnecessary escape characters
	// [
	// 	{
	// 		"allowRegexCharacters": []
	// 	}
	// ]
	"no-useless-escape": "error",

	// [suggestion] Disallow renaming import, export, and destructured assignments to the same name
	// [
	// 	{
	// 		"ignoreDestructuring": false,
	// 		"ignoreImport": false,
	// 		"ignoreExport": false
	// 	}
	// ]
	// "no-useless-rename": "off",

	// [suggestion] Disallow redundant return statements
	"no-useless-return": "error",

	// [suggestion] Require `let` or `const` instead of `var`
	"no-var": "error",

	// [suggestion] Disallow `void` operators
	// [
	// 	{
	// 		"allowAsStatement": false
	// 	}
	// ]
	"no-void": "error",

	// [suggestion] Disallow specified warning terms in comments
	// [
	// 	{
	// 		"location": "start",
	// 		"terms": [
	// 			"todo",
	// 			"fixme",
	// 			"xxx"
	// 		]
	// 	}
	// ]
	// "no-warning-comments": "off",

	// [suggestion] Disallow `with` statements
	"no-with": "error",

	// [suggestion] Require or disallow method and property shorthand syntax for object literals
	// [
	// 	"always"
	// ]
	"object-shorthand": "error",

	// [suggestion] Enforce variables to be declared either together or separately in functions
	// [
	// 	"always"
	// ]
	"one-var": ["error", "never"],

	// [suggestion] Require or disallow assignment operator shorthand where possible
	// [
	// 	"always"
	// ]
	"operator-assignment": "error",

	// [suggestion] Require using arrow functions for callbacks
	// [
	// 	{
	// 		"allowNamedFunctions": false,
	// 		"allowUnboundThis": true
	// 	}
	// ]
	"prefer-arrow-callback": "error",

	// [suggestion] Require `const` declarations for variables that are never reassigned after declared
	// [
	// 	{
	// 		"destructuring": "any",
	// 		"ignoreReadBeforeAssign": false
	// 	}
	// ]
	"prefer-const": "error",

	// [suggestion] Require destructuring from arrays and/or objects
	"prefer-destructuring": "error",

	// [suggestion] Disallow the use of `Math.pow` in favor of the `**` operator
	"prefer-exponentiation-operator": "error",

	// [suggestion] Enforce using named capture group in regular expression
	// "prefer-named-capture-group": "off",

	// [suggestion] Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
	"prefer-numeric-literals": "error",

	// [suggestion] Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
	"prefer-object-has-own": "error",

	// [suggestion] Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
	"prefer-object-spread": "error",

	// [suggestion] Require using Error objects as Promise rejection reasons
	// [
	// 	{
	// 		"allowEmptyReject": false
	// 	}
	// ]
	"prefer-promise-reject-errors": "error",

	// [suggestion] Disallow use of the `RegExp` constructor in favor of regular expression literals
	// [
	// 	{
	// 		"disallowRedundantWrapping": false
	// 	}
	// ]
	"prefer-regex-literals": "error",

	// [suggestion] Require rest parameters instead of `arguments`
	"prefer-rest-params": "error",

	// [suggestion] Require spread operators instead of `.apply()`
	"prefer-spread": "error",

	// [suggestion] Require template literals instead of string concatenation
	"prefer-template": "error",

	// [suggestion] Disallow losing originally caught error when re-throwing custom errors
	// [
	// 	{
	// 		"requireCatchParameter": false,
	// 		"errorClassNames": []
	// 	}
	// ]
	// "preserve-caught-error": "off",

	// [suggestion] Enforce the use of the radix argument when using `parseInt()`
	"radix": "error",

	// [suggestion] Disallow async functions which have no `await` expression
	"require-await": "error",

	// [suggestion] Enforce the use of `u` or `v` flag on regular expressions
	// [
	// 	{}
	// ]
	// "require-unicode-regexp": "off",

	// [suggestion] Require generator functions to contain `yield`
	"require-yield": "error",

	// [suggestion] Enforce sorted `import` declarations within modules
	// [
	// 	{
	// 		"allowSeparatedGroups": false,
	// 		"ignoreCase": false,
	// 		"ignoreDeclarationSort": false,
	// 		"ignoreMemberSort": false,
	// 		"memberSyntaxSortOrder": [
	// 			"none",
	// 			"all",
	// 			"multiple",
	// 			"single"
	// 		]
	// 	}
	// ]
	// "sort-imports": "off",

	// [suggestion] Require object keys to be sorted
	// [
	// 	"asc",
	// 	{
	// 		"allowLineSeparatedGroups": false,
	// 		"caseSensitive": true,
	// 		"ignoreComputedKeys": false,
	// 		"minKeys": 2,
	// 		"natural": false
	// 	}
	// ]
	// "sort-keys": "off",

	// [suggestion] Require variables within the same declaration block to be sorted
	// [
	// 	{
	// 		"ignoreCase": false
	// 	}
	// ]
	// "sort-vars": "off",

	// [suggestion] Require or disallow strict mode directives
	// [
	// 	"safe"
	// ]
	// "strict": "off",

	// [suggestion] Require symbol descriptions
	"symbol-description": "error",

	// [suggestion] Require `var` declarations be placed at the top of their containing scope
	// "vars-on-top": "off",

	// [suggestion] Require or disallow "Yoda" conditions
	// [
	// 	"never",
	// 	{
	// 		"exceptRange": false,
	// 		"onlyEquality": false
	// 	}
	// ]
	"yoda": "error",
};
