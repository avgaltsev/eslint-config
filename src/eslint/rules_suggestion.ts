/* eslint-disable @typescript-eslint/naming-convention */

import type {FlatConfig} from "@typescript-eslint/utils/dist/ts-eslint";

export const rules: FlatConfig.Rules = {
	// [suggestion] Enforce getter and setter pairs in objects and classes
	// "accessor-pairs": "off",

	// [suggestion] Require braces around arrow function bodies
	// "arrow-body-style": "off",

	// [suggestion] Enforce the use of variables within the scope they are defined
	// "block-scoped-var": "off",

	// [suggestion] Enforce camelcase naming convention
	"camelcase": [
		"error",
		{
			"properties": "always",
			"ignoreDestructuring": false,
			"ignoreImports": false,
			"ignoreGlobals": false,
			"allow": [],
		},
	],

	// [suggestion] Enforce or disallow capitalization of the first letter of a comment
	// "capitalized-comments": "off",

	// [suggestion] Enforce that class methods utilize `this`
	// "class-methods-use-this": "off",

	// [suggestion] Enforce a maximum cyclomatic complexity allowed in a program
	// "complexity": "off",

	// [suggestion] Require `return` statements to either always or never specify values
	// "consistent-return": "off",

	// [suggestion] Enforce consistent naming when capturing the current execution context
	// "consistent-this": "off",

	// [suggestion] Enforce consistent brace style for all control statements
	// "curly": "off",

	// [suggestion] Require `default` cases in `switch` statements
	// "default-case": "off",

	// [suggestion] Enforce default clauses in switch statements to be last
	// "default-case-last": "off",

	// [suggestion] Enforce default parameters to be last
	// "default-param-last": "off",

	// [suggestion] Enforce dot notation whenever possible
	// "dot-notation": "off",

	// [suggestion] Require the use of `===` and `!==`
	// "eqeqeq": "off",

	// [suggestion] Require function names to match the name of the variable or property to which they are assigned
	// "func-name-matching": "off",

	// [suggestion] Require or disallow named `function` expressions
	// "func-names": "off",

	// [suggestion] Enforce the consistent use of either `function` declarations or expressions
	// "func-style": "off",

	// [suggestion] Require grouped accessor pairs in object literals and classes
	// "grouped-accessor-pairs": "off",

	// [suggestion] Require `for-in` loops to include an `if` statement
	// "guard-for-in": "off",

	// [suggestion] Disallow specified identifiers
	// "id-denylist": "off",

	// [suggestion] Enforce minimum and maximum identifier lengths
	// "id-length": "off",

	// [suggestion] Require identifiers to match a specified regular expression
	// "id-match": "off",

	// [suggestion] Require or disallow initialization in variable declarations
	// "init-declarations": "off",

	// [suggestion] Require or disallow logical assignment operator shorthand
	// "logical-assignment-operators": "off",

	// [suggestion] Enforce a maximum number of classes per file
	// "max-classes-per-file": "off",

	// [suggestion] Enforce a maximum depth that blocks can be nested
	// "max-depth": "off",

	// [suggestion] Enforce a maximum number of lines per file
	// "max-lines": "off",

	// [suggestion] Enforce a maximum number of lines of code in a function
	// "max-lines-per-function": "off",

	// [suggestion] Enforce a maximum depth that callbacks can be nested
	// "max-nested-callbacks": "off",

	// [suggestion] Enforce a maximum number of parameters in function definitions
	// "max-params": "off",

	// [suggestion] Enforce a maximum number of statements allowed in function blocks
	// "max-statements": "off",

	// [suggestion] Enforce a particular style for multiline comments
	// "multiline-comment-style": "off",

	// [suggestion] Require constructor names to begin with a capital letter
	// "new-cap": "off",

	// [suggestion] Disallow the use of `alert`, `confirm`, and `prompt`
	// "no-alert": "off",

	// [suggestion] Disallow `Array` constructors
	// "no-array-constructor": "off",

	// [suggestion] Disallow bitwise operators
	// "no-bitwise": "off",

	// [suggestion] Disallow the use of `arguments.caller` or `arguments.callee`
	// "no-caller": "off",

	// [suggestion] Disallow lexical declarations in case clauses
	"no-case-declarations": "error",

	// [suggestion] Disallow the use of `console`
	// "no-console": "off",

	// [suggestion] Disallow `continue` statements
	// "no-continue": "off",

	// [suggestion] Disallow deleting variables
	"no-delete-var": "error",

	// [suggestion] Disallow equal signs explicitly at the beginning of regular expressions
	// "no-div-regex": "off",

	// [suggestion] Disallow `else` blocks after `return` statements in `if` statements
	// "no-else-return": "off",

	// [suggestion] Disallow empty block statements
	"no-empty": "error",

	// [suggestion] Disallow empty functions
	// "no-empty-function": "off",

	// [suggestion] Disallow empty static blocks
	// "no-empty-static-block": "off",

	// [suggestion] Disallow `null` comparisons without type-checking operators
	// "no-eq-null": "off",

	// [suggestion] Disallow the use of `eval()`
	// "no-eval": "off",

	// [suggestion] Disallow extending native types
	// "no-extend-native": "off",

	// [suggestion] Disallow unnecessary calls to `.bind()`
	// "no-extra-bind": "off",

	// [suggestion] Disallow unnecessary boolean casts
	"no-extra-boolean-cast": "error",

	// [suggestion] Disallow unnecessary labels
	// "no-extra-label": "off",

	// [suggestion] Disallow assignments to native objects or read-only global variables
	"no-global-assign": "error",

	// [suggestion] Disallow shorthand type conversions
	// "no-implicit-coercion": "off",

	// [suggestion] Disallow declarations in the global scope
	// "no-implicit-globals": "off",

	// [suggestion] Disallow the use of `eval()`-like methods
	// "no-implied-eval": "off",

	// [suggestion] Disallow inline comments after code
	// "no-inline-comments": "off",

	// [suggestion] Disallow use of `this` in contexts where the value of `this` is `undefined`
	// "no-invalid-this": "off",

	// [suggestion] Disallow the use of the `__iterator__` property
	// "no-iterator": "off",

	// [suggestion] Disallow labels that share a name with a variable
	// "no-label-var": "off",

	// [suggestion] Disallow labeled statements
	// "no-labels": "off",

	// [suggestion] Disallow unnecessary nested blocks
	// "no-lone-blocks": "off",

	// [suggestion] Disallow `if` statements as the only statement in `else` blocks
	// "no-lonely-if": "off",

	// [suggestion] Disallow function declarations that contain unsafe references inside loop statements
	// "no-loop-func": "off",

	// [suggestion] Disallow magic numbers
	// "no-magic-numbers": "off",

	// [suggestion] Disallow use of chained assignment expressions
	// "no-multi-assign": "off",

	// [suggestion] Disallow multiline strings
	// "no-multi-str": "off",

	// [suggestion] Disallow negated conditions
	// "no-negated-condition": "off",

	// [suggestion] Disallow nested ternary expressions
	// "no-nested-ternary": "off",

	// [suggestion] Disallow `new` operators outside of assignments or comparisons
	// "no-new": "off",

	// [suggestion] Disallow `new` operators with the `Function` object
	// "no-new-func": "off",

	// [suggestion] Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
	// "no-new-wrappers": "off",

	// [suggestion] Disallow `\8` and `\9` escape sequences in string literals
	// "no-nonoctal-decimal-escape": "off",

	// [suggestion] Disallow calls to the `Object` constructor without an argument
	// "no-object-constructor": "off",

	// [suggestion] Disallow octal literals
	"no-octal": "error",

	// [suggestion] Disallow octal escape sequences in string literals
	// "no-octal-escape": "off",

	// [suggestion] Disallow reassigning `function` parameters
	// "no-param-reassign": "off",

	// [suggestion] Disallow the unary operators `++` and `--`
	// "no-plusplus": "off",

	// [suggestion] Disallow the use of the `__proto__` property
	// "no-proto": "off",

	// [suggestion] Disallow variable redeclaration
	"no-redeclare": "error",

	// [suggestion] Disallow multiple spaces in regular expressions
	"no-regex-spaces": "error",

	// [suggestion] Disallow specified names in exports
	// "no-restricted-exports": "off",

	// [suggestion] Disallow specified global variables
	// "no-restricted-globals": "off",

	// [suggestion] Disallow specified modules when loaded by `import`
	// "no-restricted-imports": "off",

	// [suggestion] Disallow certain properties on certain objects
	// "no-restricted-properties": "off",

	// [suggestion] Disallow specified syntax
	// "no-restricted-syntax": "off",

	// [suggestion] Disallow assignment operators in `return` statements
	// "no-return-assign": "off",

	// [suggestion] Disallow `javascript:` urls
	// "no-script-url": "off",

	// [suggestion] Disallow comma operators
	// "no-sequences": "off",

	// [suggestion] Disallow variable declarations from shadowing variables declared in the outer scope
	// "no-shadow": "off",

	// [suggestion] Disallow identifiers from shadowing restricted names
	"no-shadow-restricted-names": "error",

	// [suggestion] Disallow ternary operators
	// "no-ternary": "off",

	// [suggestion] Disallow throwing literals as exceptions
	// "no-throw-literal": "off",

	// [suggestion] Disallow initializing variables to `undefined`
	// "no-undef-init": "off",

	// [suggestion] Disallow the use of `undefined` as an identifier
	// "no-undefined": "off",

	// [suggestion] Disallow dangling underscores in identifiers
	// "no-underscore-dangle": "off",

	// [suggestion] Disallow ternary operators when simpler alternatives exist
	// "no-unneeded-ternary": "off",

	// [suggestion] Disallow unused expressions
	// "no-unused-expressions": "off",

	// [suggestion] Disallow unused labels
	"no-unused-labels": "error",

	// [suggestion] Disallow unnecessary calls to `.call()` and `.apply()`
	// "no-useless-call": "off",

	// [suggestion] Disallow unnecessary `catch` clauses
	"no-useless-catch": "error",

	// [suggestion] Disallow unnecessary computed property keys in objects and classes
	// "no-useless-computed-key": "off",

	// [suggestion] Disallow unnecessary concatenation of literals or template literals
	// "no-useless-concat": "off",

	// [suggestion] Disallow unnecessary constructors
	// "no-useless-constructor": "off",

	// [suggestion] Disallow unnecessary escape characters
	"no-useless-escape": "error",

	// [suggestion] Disallow renaming import, export, and destructured assignments to the same name
	// "no-useless-rename": "off",

	// [suggestion] Disallow redundant return statements
	// "no-useless-return": "off",

	// [suggestion] Require `let` or `const` instead of `var`
	// "no-var": "off",

	// [suggestion] Disallow `void` operators
	// "no-void": "off",

	// [suggestion] Disallow specified warning terms in comments
	// "no-warning-comments": "off",

	// [suggestion] Disallow `with` statements
	"no-with": "error",

	// [suggestion] Require or disallow method and property shorthand syntax for object literals
	// "object-shorthand": "off",

	// [suggestion] Enforce variables to be declared either together or separately in functions
	// "one-var": "off",

	// [suggestion] Require or disallow assignment operator shorthand where possible
	// "operator-assignment": "off",

	// [suggestion] Require using arrow functions for callbacks
	// "prefer-arrow-callback": "off",

	// [suggestion] Require `const` declarations for variables that are never reassigned after declared
	"prefer-const": [
		"error",
		{
			"destructuring": "any",
			"ignoreReadBeforeAssign": false,
		},
	],

	// [suggestion] Require destructuring from arrays and/or objects
	// "prefer-destructuring": "off",

	// [suggestion] Disallow the use of `Math.pow` in favor of the `**` operator
	// "prefer-exponentiation-operator": "off",

	// [suggestion] Enforce using named capture group in regular expression
	// "prefer-named-capture-group": "off",

	// [suggestion] Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
	// "prefer-numeric-literals": "off",

	// [suggestion] Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
	// "prefer-object-has-own": "off",

	// [suggestion] Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
	// "prefer-object-spread": "off",

	// [suggestion] Require using Error objects as Promise rejection reasons
	// "prefer-promise-reject-errors": "off",

	// [suggestion] Disallow use of the `RegExp` constructor in favor of regular expression literals
	// "prefer-regex-literals": "off",

	// [suggestion] Require rest parameters instead of `arguments`
	// "prefer-rest-params": "off",

	// [suggestion] Require spread operators instead of `.apply()`
	// "prefer-spread": "off",

	// [suggestion] Require template literals instead of string concatenation
	// "prefer-template": "off",

	// [suggestion] Enforce the consistent use of the radix argument when using `parseInt()`
	// "radix": "off",

	// [suggestion] Disallow async functions which have no `await` expression
	// "require-await": "off",

	// [suggestion] Enforce the use of `u` or `v` flag on RegExp
	// "require-unicode-regexp": "off",

	// [suggestion] Require generator functions to contain `yield`
	"require-yield": "error",

	// [suggestion] Enforce sorted import declarations within modules
	// "sort-imports": "off",

	// [suggestion] Require object keys to be sorted
	// "sort-keys": "off",

	// [suggestion] Require variables within the same declaration block to be sorted
	// "sort-vars": "off",

	// [suggestion] Require or disallow strict mode directives
	// "strict": "off",

	// [suggestion] Require symbol descriptions
	// "symbol-description": "off",

	// [suggestion] Require `var` declarations be placed at the top of their containing scope
	// "vars-on-top": "off",

	// [suggestion] Require or disallow "Yoda" conditions
	// "yoda": "off",
};
