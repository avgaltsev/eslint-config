/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @stylistic/array-bracket-newline */
/* eslint-disable @stylistic/array-element-newline */

import type {Linter} from "eslint";
import type {RuleOptions} from "@stylistic/eslint-plugin";

export const rules: Partial<{[K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>}> = {
	// [layout] Enforce linebreaks after opening and before closing array brackets
	// []
	"@stylistic/array-bracket-newline": "error",

	// [layout] Enforce consistent spacing inside array brackets
	// [
	// 	"never"
	// ]
	"@stylistic/array-bracket-spacing": "error",

	// [layout] Enforce line breaks after each array element
	// []
	"@stylistic/array-element-newline": ["error", {
		"multiline": true,
		"consistent": true,
	}],

	// [layout] Require parentheses around arrow function arguments
	// [
	// 	"always"
	// ]
	"@stylistic/arrow-parens": "error",

	// [layout] Enforce consistent spacing before and after the arrow in arrow functions
	// [
	// 	{
	// 		"before": true,
	// 		"after": true
	// 	}
	// ]
	"@stylistic/arrow-spacing": "error",

	// [layout] Disallow or enforce spaces inside of blocks after opening block and before closing block
	// [
	// 	"always"
	// ]
	"@stylistic/block-spacing": "error",

	// [layout] Enforce consistent brace style for blocks
	// [
	// 	"1tbs",
	// 	{
	// 		"allowSingleLine": false
	// 	}
	// ]
	"@stylistic/brace-style": ["error", "1tbs", {
		"allowSingleLine": true,
	}],

	// [layout] Require or disallow trailing commas
	// [
	// 	"never"
	// ]
	"@stylistic/comma-dangle": ["error", "always-multiline"],

	// [layout] Enforce consistent spacing before and after commas
	// [
	// 	{
	// 		"before": false,
	// 		"after": true
	// 	}
	// ]
	"@stylistic/comma-spacing": "error",

	// [layout] Enforce consistent comma style
	// [
	// 	"last"
	// ]
	"@stylistic/comma-style": "error",

	// [layout] Enforce consistent spacing inside computed property brackets
	// [
	// 	"never",
	// 	{
	// 		"enforceForClassMembers": true
	// 	}
	// ]
	"@stylistic/computed-property-spacing": "error",

	// [layout] Enforce consistent line breaks after opening and before closing braces
	// []
	"@stylistic/curly-newline": ["error", {
		"multiline": true,
		"consistent": true,
	}],

	// [layout] Enforce consistent newlines before and after dots
	// [
	// 	"object"
	// ]
	"@stylistic/dot-location": "error",

	// [layout] Require or disallow newline at the end of files
	// [
	// 	"always"
	// ]
	"@stylistic/eol-last": "error",

	// [layout] Enforce line breaks between arguments of a function call
	// [
	// 	"always"
	// ]
	"@stylistic/function-call-argument-newline": ["error", "consistent"],

	// [layout] Require or disallow spacing between function identifiers and their invocations
	// [
	// 	"never"
	// ]
	"@stylistic/function-call-spacing": "error",

	// [layout] Enforce consistent line breaks inside function parentheses
	// [
	// 	"multiline"
	// ]
	"@stylistic/function-paren-newline": ["error", "consistent"],

	// [layout] Enforce consistent spacing around `*` operators in generator functions
	// [
	// 	{
	// 		"before": true,
	// 		"after": false
	// 	}
	// ]
	"@stylistic/generator-star-spacing": "error",

	// [layout] Enforce the location of arrow function bodies
	// [
	// 	"beside"
	// ]
	"@stylistic/implicit-arrow-linebreak": "error",

	// [layout] Enforce consistent indentation
	// [
	// 	4,
	// 	{
	// 		"SwitchCase": 1,
	// 		"flatTernaryExpressions": false,
	// 		"ignoredNodes": []
	// 	}
	// ]
	"@stylistic/indent": ["error", "tab"],

	// [layout] Indentation for binary operators
	// [
	// 	2
	// ]
	"@stylistic/indent-binary-ops": ["error", "tab"],

	// [layout] Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
	// "@stylistic/jsx-child-element-spacing": "off",

	// [layout] Enforce closing bracket location in JSX
	// [
	// 	"tag-aligned"
	// ]
	// "@stylistic/jsx-closing-bracket-location": "off",

	// [layout] Enforce closing tag location for multiline JSX
	// [
	// 	"tag-aligned"
	// ]
	// "@stylistic/jsx-closing-tag-location": "off",

	// [layout] Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
	// [
	// 	{
	// 		"props": "never",
	// 		"children": "never",
	// 		"propElementValues": "ignore"
	// 	}
	// ]
	// "@stylistic/jsx-curly-brace-presence": "off",

	// [layout] Enforce consistent linebreaks in curly braces in JSX attributes and expressions
	// [
	// 	"consistent"
	// ]
	// "@stylistic/jsx-curly-newline": "off",

	// [layout] Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
	// [
	// 	{
	// 		"when": "never",
	// 		"allowMultiline": true
	// 	}
	// ]
	// "@stylistic/jsx-curly-spacing": "off",

	// [layout] Enforce or disallow spaces around equal signs in JSX attributes
	// [
	// 	"never"
	// ]
	// "@stylistic/jsx-equals-spacing": "off",

	// [layout] Enforce proper position of the first property in JSX
	// [
	// 	"multiline-multiprop"
	// ]
	// "@stylistic/jsx-first-prop-new-line": "off",

	// [layout] Enforce line breaks before and after JSX elements when they are used as arguments to a function.
	// [
	// 	"multiline"
	// ]
	// "@stylistic/jsx-function-call-newline": "off",

	// [layout] Enforce props indentation in JSX
	// [
	// 	4
	// ]
	// "@stylistic/jsx-indent-props": "off",

	// [layout] Enforce maximum of props on a single line in JSX
	// [
	// 	{
	// 		"maximum": 1
	// 	}
	// ]
	// "@stylistic/jsx-max-props-per-line": "off",

	// [layout] Require or prevent a new line after jsx elements and expressions.
	// [
	// 	{
	// 		"prevent": false,
	// 		"allowMultilines": false
	// 	}
	// ]
	// "@stylistic/jsx-newline": "off",

	// [layout] Require one JSX element per line
	// [
	// 	{
	// 		"allow": "none"
	// 	}
	// ]
	// "@stylistic/jsx-one-expression-per-line": "off",

	// [layout] Enforce consistent line break styles for JSX props
	// [
	// 	{
	// 		"singleLine": {
	// 			"maxItems": null
	// 		},
	// 		"multiLine": {
	// 			"minItems": 0,
	// 			"maxItemsPerLine": 1
	// 		}
	// 	}
	// ]
	// "@stylistic/exp-jsx-props-style": "off",

	// [layout] Enforce the consistent use of either double or single quotes in JSX attributes
	// [
	// 	"prefer-double"
	// ]
	// "@stylistic/jsx-quotes": "off",

	// [layout] Disallow extra closing tags for components without children
	// [
	// 	{
	// 		"component": true,
	// 		"html": true
	// 	}
	// ]
	// "@stylistic/jsx-self-closing-comp": "off",

	// [layout] Enforce whitespace in and around the JSX opening and closing brackets
	// [
	// 	{
	// 		"closingSlash": "never",
	// 		"beforeSelfClosing": "always",
	// 		"afterOpening": "never",
	// 		"beforeClosing": "allow"
	// 	}
	// ]
	// "@stylistic/jsx-tag-spacing": "off",

	// [layout] Disallow missing parentheses around multiline JSX
	// [
	// 	{
	// 		"declaration": "parens",
	// 		"assignment": "parens",
	// 		"return": "parens",
	// 		"arrow": "parens",
	// 		"condition": "ignore",
	// 		"logical": "ignore",
	// 		"prop": "ignore",
	// 		"propertyValue": "ignore"
	// 	}
	// ]
	// "@stylistic/jsx-wrap-multilines": "off",

	// [layout] Enforce consistent spacing between property names and type annotations in types and interfaces
	// [
	// 	{}
	// ]
	"@stylistic/key-spacing": "error",

	// [layout] Enforce consistent spacing before and after keywords
	// [
	// 	{
	// 		"before": true,
	// 		"after": true,
	// 		"overrides": {}
	// 	}
	// ]
	"@stylistic/keyword-spacing": "error",

	// [layout] Enforce position of line comments
	// [
	// 	"above"
	// ]
	// "@stylistic/line-comment-position": "off",

	// [layout] Enforce consistent linebreak style
	// [
	// 	"unix"
	// ]
	"@stylistic/linebreak-style": "error",

	// [layout] Require empty lines around comments
	// [
	// 	{
	// 		"beforeBlockComment": true
	// 	}
	// ]
	"@stylistic/lines-around-comment": "error",

	// [layout] Require or disallow an empty line between class members
	// [
	// 	"always",
	// 	{
	// 		"exceptAfterOverload": true,
	// 		"exceptAfterSingleLine": false
	// 	}
	// ]
	// "@stylistic/lines-between-class-members": "off",

	// [layout] Enforce consistent spacing and line break styles inside brackets.
	// [
	// 	{
	// 		"singleLine": {
	// 			"spacing": "never",
	// 			"maxItems": null
	// 		},
	// 		"multiLine": {
	// 			"minItems": 0
	// 		},
	// 		"overrides": {
	// 			"{}": {
	// 				"singleLine": {
	// 					"spacing": "always"
	// 				}
	// 			}
	// 		}
	// 	}
	// ]
	// "@stylistic/exp-list-style": "off",

	// [layout] Enforce a maximum line length
	// [
	// 	{
	// 		"code": 80,
	// 		"tabWidth": 4
	// 	}
	// ]
	// "@stylistic/max-len": "off",

	// [layout] Enforce a maximum number of statements allowed per line
	// [
	// 	{
	// 		"max": 1
	// 	}
	// ]
	// "@stylistic/max-statements-per-line": "off",

	// [layout] Require a specific member delimiter style for interfaces and type literals
	// [
	// 	{
	// 		"multiline": {
	// 			"delimiter": "semi",
	// 			"requireLast": true
	// 		},
	// 		"singleline": {
	// 			"delimiter": "semi",
	// 			"requireLast": false
	// 		},
	// 		"multilineDetection": "brackets"
	// 	}
	// ]
	"@stylistic/member-delimiter-style": "error",

	// [layout] Enforce newlines between operands of ternary expressions
	// [
	// 	"always"
	// ]
	// "@stylistic/multiline-ternary": "off",

	// [layout] Enforce or disallow parentheses when invoking a constructor with no arguments
	// [
	// 	"always"
	// ]
	"@stylistic/new-parens": "error",

	// [layout] Require a newline after each call in a method chain
	// [
	// 	{
	// 		"ignoreChainWithDepth": 2
	// 	}
	// ]
	// "@stylistic/newline-per-chained-call": "off",

	// [layout] Disallow arrow functions where they could be confused with comparisons
	// [
	// 	{
	// 		"allowParens": true,
	// 		"onlyOneSimpleParam": false
	// 	}
	// ]
	// "@stylistic/no-confusing-arrow": "off",

	// [layout] Disallow unnecessary parentheses
	// [
	// 	"all"
	// ]
	// "@stylistic/no-extra-parens": "off",

	// [layout] Disallow unnecessary semicolons
	"@stylistic/no-extra-semi": "error",

	// [layout] Disallow leading or trailing decimal points in numeric literals
	"@stylistic/no-floating-decimal": "error",

	// [layout] Disallow mixed binary operators
	// [
	// 	{
	// 		"groups": [
	// 			[
	// 				"+",
	// 				"-",
	// 				"*",
	// 				"/",
	// 				"%",
	// 				"**"
	// 			],
	// 			[
	// 				"&",
	// 				"|",
	// 				"^",
	// 				"~",
	// 				"<<",
	// 				">>",
	// 				">>>"
	// 			],
	// 			[
	// 				"==",
	// 				"!=",
	// 				"===",
	// 				"!==",
	// 				">",
	// 				">=",
	// 				"<",
	// 				"<="
	// 			],
	// 			[
	// 				"&&",
	// 				"||"
	// 			],
	// 			[
	// 				"in",
	// 				"instanceof"
	// 			]
	// 		],
	// 		"allowSamePrecedence": true
	// 	}
	// ]
	"@stylistic/no-mixed-operators": "error",

	// [layout] Disallow mixed spaces and tabs for indentation
	// [
	// 	false
	// ]
	"@stylistic/no-mixed-spaces-and-tabs": "error",

	// [layout] Disallow multiple spaces
	// [
	// 	{
	// 		"exceptions": {
	// 			"Property": true,
	// 			"ImportAttribute": true
	// 		},
	// 		"ignoreEOLComments": false,
	// 		"includeTabs": true
	// 	}
	// ]
	"@stylistic/no-multi-spaces": "error",

	// [layout] Disallow multiple empty lines
	// [
	// 	{
	// 		"max": 2
	// 	}
	// ]
	"@stylistic/no-multiple-empty-lines": ["error", {
		"max": 1,
		"maxEOF": 0,
		"maxBOF": 0,
	}],

	// [layout] Disallow all tabs
	// [
	// 	{
	// 		"allowIndentationTabs": false
	// 	}
	// ]
	// "@stylistic/no-tabs": "off",

	// [layout] Disallow trailing whitespace at the end of lines
	// [
	// 	{
	// 		"skipBlankLines": false,
	// 		"ignoreComments": false
	// 	}
	// ]
	"@stylistic/no-trailing-spaces": "error",

	// [layout] Disallow whitespace before properties
	"@stylistic/no-whitespace-before-property": "error",

	// [layout] Enforce the location of single-line statements
	// [
	// 	"beside"
	// ]
	"@stylistic/nonblock-statement-body-position": "error",

	// [layout] Enforce consistent line breaks after opening and before closing braces
	// []
	"@stylistic/object-curly-newline": ["error", {
		"multiline": true,
		"consistent": true,
	}],

	// [layout] Enforce consistent spacing inside braces
	// [
	// 	"never"
	// ]
	"@stylistic/object-curly-spacing": "error",

	// [layout] Enforce placing object properties on separate lines
	// [
	// 	{
	// 		"allowAllPropertiesOnSameLine": false
	// 	}
	// ]
	"@stylistic/object-property-newline": ["error", {
		"allowAllPropertiesOnSameLine": true,
	}],

	// [layout] Require or disallow newlines around variable declarations
	// [
	// 	"initializations"
	// ]
	"@stylistic/one-var-declaration-per-line": "error",

	// [layout] Enforce consistent linebreak style for operators
	// []
	"@stylistic/operator-linebreak": "error",

	// [layout] Require or disallow padding within blocks
	// [
	// 	"always",
	// 	{
	// 		"allowSingleLineBlocks": false
	// 	}
	// ]
	"@stylistic/padded-blocks": ["error", "never"],

	// [layout] Require or disallow padding lines between statements
	// []
	"@stylistic/padding-line-between-statements": ["error", {
		"blankLine": "always",
		"prev": "*",
		"next": "return",
	}, {
		"blankLine": "always",
		"prev": ["const", "let"],
		"next": "*",
	}, {
		"blankLine": "any",
		"prev": ["const", "let"],
		"next": ["const", "let"],
	}],

	// [layout] Require quotes around object literal, type literal, interfaces and enums property names
	// [
	// 	"always"
	// ]
	"@stylistic/quote-props": ["error", "consistent"],

	// [layout] Enforce the consistent use of either backticks, double, or single quotes
	// [
	// 	"double",
	// 	{
	// 		"allowTemplateLiterals": "never",
	// 		"avoidEscape": false,
	// 		"ignoreStringLiterals": false
	// 	}
	// ]
	"@stylistic/quotes": "error",

	// [layout] Enforce spacing between rest and spread operators and their expressions
	// [
	// 	"never"
	// ]
	"@stylistic/rest-spread-spacing": "error",

	// [layout] Require or disallow semicolons instead of ASI
	// [
	// 	"always"
	// ]
	"@stylistic/semi": "error",

	// [layout] Enforce consistent spacing before and after semicolons
	// [
	// 	{
	// 		"before": false,
	// 		"after": true
	// 	}
	// ]
	"@stylistic/semi-spacing": "error",

	// [layout] Enforce location of semicolons
	// [
	// 	"last"
	// ]
	"@stylistic/semi-style": "error",

	// [layout] Enforce consistent spacing before blocks
	// [
	// 	"always"
	// ]
	"@stylistic/space-before-blocks": "error",

	// [layout] Enforce consistent spacing before function parenthesis
	// [
	// 	"always"
	// ]
	"@stylistic/space-before-function-paren": ["error", {
		"named": "never",
	}],

	// [layout] Enforce consistent spacing inside parentheses
	// [
	// 	"never"
	// ]
	"@stylistic/space-in-parens": "error",

	// [layout] Require spacing around infix operators
	// [
	// 	{
	// 		"int32Hint": false,
	// 		"ignoreTypes": false
	// 	}
	// ]
	"@stylistic/space-infix-ops": "error",

	// [layout] Enforce consistent spacing before or after unary operators
	// [
	// 	{
	// 		"words": true,
	// 		"nonwords": false
	// 	}
	// ]
	"@stylistic/space-unary-ops": "error",

	// [layout] Enforce consistent spacing after the `//` or `/*` in a comment
	// [
	// 	"always"
	// ]
	"@stylistic/spaced-comment": "error",

	// [layout] Enforce spacing around colons of switch statements
	// [
	// 	{
	// 		"before": false,
	// 		"after": true
	// 	}
	// ]
	"@stylistic/switch-colon-spacing": "error",

	// [layout] Require or disallow spacing around embedded expressions of template strings
	// [
	// 	"never"
	// ]
	"@stylistic/template-curly-spacing": "error",

	// [layout] Require or disallow spacing between template tags and their literals
	// [
	// 	"never"
	// ]
	"@stylistic/template-tag-spacing": "error",

	// [layout] Require consistent spacing around type annotations
	// [
	// 	{}
	// ]
	"@stylistic/type-annotation-spacing": "error",

	// [layout] Enforces consistent spacing inside TypeScript type generics
	"@stylistic/type-generic-spacing": "error",

	// [layout] Expect space before the type declaration in the named tuple
	"@stylistic/type-named-tuple-spacing": "error",

	// [layout] Require parentheses around immediate `function` invocations
	// [
	// 	"outside",
	// 	{
	// 		"functionPrototypeMethods": false
	// 	}
	// ]
	"@stylistic/wrap-iife": ["error", "inside"],

	// [layout] Require parenthesis around regex literals
	// "@stylistic/wrap-regex": "off",

	// [layout] Require or disallow spacing around the `*` in `yield*` expressions
	// [
	// 	"after"
	// ]
	"@stylistic/yield-star-spacing": "error",
};
