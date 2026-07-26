/* eslint-disable @typescript-eslint/naming-convention */

import type {Linter} from "eslint";

export const rules: Linter.RulesRecord = {
	// [layout] Enforce linebreaks after opening and before closing array brackets
	// "@stylistic/array-bracket-newline": "off",

	// [layout] Enforce consistent spacing inside array brackets
	"@stylistic/array-bracket-spacing": ["error", "never", {
		"singleValue": false,
		"objectsInArrays": false,
		"arraysInArrays": false,
	}],

	// [layout] Enforce line breaks after each array element
	// "@stylistic/array-element-newline": "off",

	// [layout] Require parentheses around arrow function arguments
	// "@stylistic/arrow-parens": "off",

	// [layout] Enforce consistent spacing before and after the arrow in arrow functions
	// "@stylistic/arrow-spacing": "off",

	// [layout] Disallow or enforce spaces inside of blocks after opening block and before closing block
	// "@stylistic/block-spacing": "off",

	// [layout] Enforce consistent brace style for blocks
	// "@stylistic/brace-style": "off",

	// [layout] Require or disallow trailing commas
	"@stylistic/comma-dangle": ["error", {
		"arrays": "always-multiline",
		"objects": "always-multiline",
		"imports": "always-multiline",
		"exports": "always-multiline",
		"functions": "always-multiline",
		"enums": "always-multiline",
		"generics": "always-multiline",
		"tuples": "always-multiline",
	}],

	// [layout] Enforce consistent spacing before and after commas
	"@stylistic/comma-spacing": ["error", {
		"before": false,
		"after": true,
	}],

	// [layout] Enforce consistent comma style
	// "@stylistic/comma-style": "off",

	// [layout] Enforce consistent spacing inside computed property brackets
	// "@stylistic/computed-property-spacing": "off",

	// [layout] Enforce consistent line breaks after opening and before closing braces
	// "@stylistic/curly-newline": "off",

	// [layout] Enforce consistent newlines before and after dots
	// "@stylistic/dot-location": "off",

	// [layout] Require or disallow newline at the end of files
	// "@stylistic/eol-last": "off",

	// [layout] Enforce line breaks between arguments of a function call
	// "@stylistic/function-call-argument-newline": "off",

	// [layout] Require or disallow spacing between function identifiers and their invocations
	// "@stylistic/function-call-spacing": "off",

	// [layout] Enforce consistent line breaks inside function parentheses
	// "@stylistic/function-paren-newline": "off",

	// [layout] Enforce consistent spacing around `*` operators in generator functions
	// "@stylistic/generator-star-spacing": "off",

	// [layout] Enforce the location of arrow function bodies
	// "@stylistic/implicit-arrow-linebreak": "off",

	// [layout] Enforce consistent indentation
	"@stylistic/indent": ["error", "tab"],

	// [layout] Indentation for binary operators
	// "@stylistic/indent-binary-ops": "off",

	// [layout] Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
	// "@stylistic/jsx-child-element-spacing": "off",

	// [layout] Enforce closing bracket location in JSX
	// "@stylistic/jsx-closing-bracket-location": "off",

	// [layout] Enforce closing tag location for multiline JSX
	// "@stylistic/jsx-closing-tag-location": "off",

	// [layout] Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
	// "@stylistic/jsx-curly-brace-presence": "off",

	// [layout] Enforce consistent linebreaks in curly braces in JSX attributes and expressions
	// "@stylistic/jsx-curly-newline": "off",

	// [layout] Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
	// "@stylistic/jsx-curly-spacing": "off",

	// [layout] Enforce or disallow spaces around equal signs in JSX attributes
	// "@stylistic/jsx-equals-spacing": "off",

	// [layout] Enforce proper position of the first property in JSX
	// "@stylistic/jsx-first-prop-new-line": "off",

	// [layout] Enforce line breaks before and after JSX elements when they are used as arguments to a function.
	// "@stylistic/jsx-function-call-newline": "off",

	// [layout] Enforce props indentation in JSX
	// "@stylistic/jsx-indent-props": "off",

	// [layout] Enforce maximum of props on a single line in JSX
	// "@stylistic/jsx-max-props-per-line": "off",

	// [layout] Require or prevent a new line after jsx elements and expressions.
	// "@stylistic/jsx-newline": "off",

	// [layout] Require one JSX element per line
	// "@stylistic/jsx-one-expression-per-line": "off",

	// [layout] Enforce consistent line break styles for JSX props
	// "@stylistic/exp-jsx-props-style": "off",

	// [layout] Enforce the consistent use of either double or single quotes in JSX attributes
	// "@stylistic/jsx-quotes": "off",

	// [layout] Disallow extra closing tags for components without children
	// "@stylistic/jsx-self-closing-comp": "off",

	// [layout] Enforce whitespace in and around the JSX opening and closing brackets
	// "@stylistic/jsx-tag-spacing": "off",

	// [layout] Disallow missing parentheses around multiline JSX
	// "@stylistic/jsx-wrap-multilines": "off",

	// [layout] Enforce consistent spacing between property names and type annotations in types and interfaces
	// "@stylistic/key-spacing": "off",

	// [layout] Enforce consistent spacing before and after keywords
	// "@stylistic/keyword-spacing": "off",

	// [layout] Enforce position of line comments
	// "@stylistic/line-comment-position": "off",

	// [layout] Enforce consistent linebreak style
	// "@stylistic/linebreak-style": "off",

	// [layout] Require empty lines around comments
	// "@stylistic/lines-around-comment": "off",

	// [layout] Require or disallow an empty line between class members
	// "@stylistic/lines-between-class-members": "off",

	// [layout] Enforce consistent spacing and line break styles inside brackets.
	// "@stylistic/exp-list-style": "off",

	// [layout] Enforce a maximum line length
	// "@stylistic/max-len": "off",

	// [layout] Enforce a maximum number of statements allowed per line
	// "@stylistic/max-statements-per-line": "off",

	// [layout] Require a specific member delimiter style for interfaces and type literals
	// "@stylistic/member-delimiter-style": "off",

	// [layout] Enforce newlines between operands of ternary expressions
	// "@stylistic/multiline-ternary": "off",

	// [layout] Enforce or disallow parentheses when invoking a constructor with no arguments
	// "@stylistic/new-parens": "off",

	// [layout] Require a newline after each call in a method chain
	// "@stylistic/newline-per-chained-call": "off",

	// [layout] Disallow arrow functions where they could be confused with comparisons
	// "@stylistic/no-confusing-arrow": "off",

	// [layout] Disallow unnecessary parentheses
	// "@stylistic/no-extra-parens": "off",

	// [layout] Disallow unnecessary semicolons
	"@stylistic/no-extra-semi": "error",

	// [layout] Disallow leading or trailing decimal points in numeric literals
	// "@stylistic/no-floating-decimal": "off",

	// [layout] Disallow mixed binary operators
	// "@stylistic/no-mixed-operators": "off",

	// [layout] Disallow mixed spaces and tabs for indentation
	"@stylistic/no-mixed-spaces-and-tabs": "error",

	// [layout] Disallow multiple spaces
	// "@stylistic/no-multi-spaces": "off",

	// [layout] Disallow multiple empty lines
	// "@stylistic/no-multiple-empty-lines": "off",

	// [layout] Disallow all tabs
	// "@stylistic/no-tabs": "off",

	// [layout] Disallow trailing whitespace at the end of lines
	// "@stylistic/no-trailing-spaces": "off",

	// [layout] Disallow whitespace before properties
	// "@stylistic/no-whitespace-before-property": "off",

	// [layout] Enforce the location of single-line statements
	// "@stylistic/nonblock-statement-body-position": "off",

	// [layout] Enforce consistent line breaks after opening and before closing braces
	"@stylistic/object-curly-newline": ["error", {
		"ObjectExpression": {"multiline": true, "minProperties": 0, "consistent": true},
		"ObjectPattern": {"multiline": true, "minProperties": 0, "consistent": true},
		"ImportDeclaration": {"multiline": true, "minProperties": 0, "consistent": true},
		"ExportDeclaration": {"multiline": true, "minProperties": 0, "consistent": true},
	}],

	// [layout] Enforce consistent spacing inside braces
	"@stylistic/object-curly-spacing": ["error", "never", {
		"arraysInObjects": false,
		"objectsInObjects": false,
	}],

	// [layout] Enforce placing object properties on separate lines
	// "@stylistic/object-property-newline": "off",

	// [layout] Require or disallow newlines around variable declarations
	// "@stylistic/one-var-declaration-per-line": "off",

	// [layout] Enforce consistent linebreak style for operators
	// "@stylistic/operator-linebreak": "off",

	// [layout] Require or disallow padding within blocks
	// "@stylistic/padded-blocks": "off",

	// [layout] Require or disallow padding lines between statements
	// "@stylistic/padding-line-between-statements": "off",

	// [layout] Require quotes around object literal, type literal, interfaces and enums property names
	// "@stylistic/quote-props": "off",

	// [layout] Enforce the consistent use of either backticks, double, or single quotes
	"@stylistic/quotes": ["error", "double"],

	// [layout] Enforce spacing between rest and spread operators and their expressions
	// "@stylistic/rest-spread-spacing": "off",

	// [layout] Require or disallow semicolons instead of ASI
	"@stylistic/semi": ["error", "always", {
		"omitLastInOneLineBlock": false,
	}],

	// [layout] Enforce consistent spacing before and after semicolons
	// "@stylistic/semi-spacing": "off",

	// [layout] Enforce location of semicolons
	// "@stylistic/semi-style": "off",

	// [layout] Enforce consistent spacing before blocks
	// "@stylistic/space-before-blocks": "off",

	// [layout] Enforce consistent spacing before function parenthesis
	// "@stylistic/space-before-function-paren": "off",

	// [layout] Enforce consistent spacing inside parentheses
	"@stylistic/space-in-parens": ["error", "never"],

	// [layout] Require spacing around infix operators
	// "@stylistic/space-infix-ops": "off",

	// [layout] Enforce consistent spacing before or after unary operators
	// "@stylistic/space-unary-ops": "off",

	// [layout] Enforce consistent spacing after the `//` or `/*` in a comment
	// "@stylistic/spaced-comment": "off",

	// [layout] Enforce spacing around colons of switch statements
	// "@stylistic/switch-colon-spacing": "off",

	// [layout] Require or disallow spacing around embedded expressions of template strings
	// "@stylistic/template-curly-spacing": "off",

	// [layout] Require or disallow spacing between template tags and their literals
	// "@stylistic/template-tag-spacing": "off",

	// [layout] Require consistent spacing around type annotations
	// "@stylistic/type-annotation-spacing": "off",

	// [layout] Enforces consistent spacing inside TypeScript type generics
	// "@stylistic/type-generic-spacing": "off",

	// [layout] Expect space before the type declaration in the named tuple
	// "@stylistic/type-named-tuple-spacing": "off",

	// [layout] Require parentheses around immediate `function` invocations
	// "@stylistic/wrap-iife": "off",

	// [layout] Require parenthesis around regex literals
	// "@stylistic/wrap-regex": "off",

	// [layout] Require or disallow spacing around the `*` in `yield*` expressions
	// "@stylistic/yield-star-spacing": "off",
};
