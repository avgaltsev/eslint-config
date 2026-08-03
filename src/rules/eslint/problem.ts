/* eslint-disable @typescript-eslint/naming-convention */

import type {ESLintRules} from "eslint/rules";

export const rules: Partial<ESLintRules> = {
	// [problem] Enforce `return` statements in callbacks of array methods
	"array-callback-return": "error",

	// [problem] Require `super()` calls in constructors
	"constructor-super": "error",

	// [problem] Enforce `for` loop update clause moving the counter in the right direction
	"for-direction": "error",

	// [problem] Enforce `return` statements in getters
	"getter-return": "error",

	// [problem] Disallow using an async function as a Promise executor
	"no-async-promise-executor": "error",

	// [problem] Disallow `await` inside of loops
	"no-await-in-loop": "error",

	// [problem] Disallow reassigning class members
	"no-class-assign": "error",

	// [problem] Disallow comparing against `-0`
	"no-compare-neg-zero": "error",

	// [problem] Disallow assignment operators in conditional expressions
	"no-cond-assign": "error",

	// [problem] Disallow reassigning `const`, `using`, and `await using` variables
	"no-const-assign": "error",

	// [problem] Disallow expressions where the operation doesn't affect the value
	"no-constant-binary-expression": "error",

	// [problem] Disallow constant expressions in conditions
	"no-constant-condition": "error",

	// [problem] Disallow returning value from constructor
	"no-constructor-return": "error",

	// [problem] Disallow control characters in regular expressions
	"no-control-regex": "error",

	// [problem] Disallow the use of `debugger`
	"no-debugger": "error",

	// [problem] Disallow duplicate arguments in `function` definitions
	"no-dupe-args": "error",

	// [problem] Disallow duplicate class members
	"no-dupe-class-members": "error",

	// [problem] Disallow duplicate conditions in if-else-if chains
	"no-dupe-else-if": "error",

	// [problem] Disallow duplicate keys in object literals
	"no-dupe-keys": "error",

	// [problem] Disallow duplicate case labels
	"no-duplicate-case": "error",

	// [problem] Disallow duplicate module imports
	"no-duplicate-imports": "error",

	// [problem] Disallow empty character classes in regular expressions
	"no-empty-character-class": "error",

	// [problem] Disallow empty destructuring patterns
	"no-empty-pattern": "error",

	// [problem] Disallow reassigning exceptions in `catch` clauses
	"no-ex-assign": "error",

	// [problem] Disallow fallthrough of `case` statements
	"no-fallthrough": "error",

	// [problem] Disallow reassigning `function` declarations
	"no-func-assign": "error",

	// [problem] Disallow assigning to imported bindings
	"no-import-assign": "error",

	// [problem] Disallow variable or `function` declarations in nested blocks
	"no-inner-declarations": "error",

	// [problem] Disallow invalid regular expression strings in `RegExp` constructors
	"no-invalid-regexp": "error",

	// [problem] Disallow irregular whitespace
	"no-irregular-whitespace": "error",

	// [problem] Disallow literal numbers that lose precision
	"no-loss-of-precision": "error",

	// [problem] Disallow characters which are made with multiple code points in character class syntax
	"no-misleading-character-class": "error",

	// [problem] Disallow `new` operators with global non-constructor functions
	"no-new-native-nonconstructor": "error",

	// [problem] Disallow calling global object properties as functions
	"no-obj-calls": "error",

	// [problem] Disallow returning values from Promise executor functions
	"no-promise-executor-return": "error",

	// [problem] Disallow calling some `Object.prototype` methods directly on objects
	"no-prototype-builtins": "error",

	// [problem] Disallow assignments where both sides are exactly the same
	"no-self-assign": "error",

	// [problem] Disallow comparisons where both sides are exactly the same
	"no-self-compare": "error",

	// [problem] Disallow returning values from setters
	"no-setter-return": "error",

	// [problem] Disallow sparse arrays
	"no-sparse-arrays": "error",

	// [problem] Disallow template literal placeholder syntax in regular strings
	"no-template-curly-in-string": "error",

	// [problem] Disallow `this`/`super` before calling `super()` in constructors
	"no-this-before-super": "error",

	// [problem] Disallow `let` or `var` variables that are read but never assigned
	"no-unassigned-vars": "error",

	// [problem] Disallow the use of undeclared variables unless mentioned in `/*global */` comments
	"no-undef": "error",

	// [problem] Disallow confusing multiline expressions
	"no-unexpected-multiline": "error",

	// [problem] Disallow unmodified loop conditions
	"no-unmodified-loop-condition": "error",

	// [problem] Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
	"no-unreachable": "error",

	// [problem] Disallow loops with a body that allows only one iteration
	"no-unreachable-loop": "error",

	// [problem] Disallow control flow statements in `finally` blocks
	"no-unsafe-finally": "error",

	// [problem] Disallow negating the left operand of relational operators
	"no-unsafe-negation": "error",

	// [problem] Disallow use of optional chaining in contexts where the `undefined` value is not allowed
	"no-unsafe-optional-chaining": "error",

	// [problem] Disallow unused private class members
	"no-unused-private-class-members": "error",

	// [problem] Disallow unused variables
	"no-unused-vars": ["error", {
		"args": "none",
		"caughtErrors": "none",
		"ignoreRestSiblings": true,
	}],

	// [problem] Disallow the use of variables before they are defined
	"no-use-before-define": "error",

	// [problem] Disallow variable assignments when the value is not used
	"no-useless-assignment": "error",

	// [problem] Disallow useless backreferences in regular expressions
	"no-useless-backreference": "error",

	// [problem] Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
	"require-atomic-updates": "error",

	// [problem] Require calls to `isNaN()` when checking for `NaN`
	"use-isnan": "error",

	// [problem] Enforce comparing `typeof` expressions against valid strings
	"valid-typeof": "error",
};
