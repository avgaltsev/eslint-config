/* eslint-disable @typescript-eslint/naming-convention */

import type {Linter} from "eslint";
import type {RuleOptions} from "@stylistic/eslint-plugin";

export const rules: Partial<{[K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>}> = {
	// [layout] Enforce linebreaks after opening and before closing array brackets
	"@stylistic/array-bracket-newline": ["error", "consistent"],

	// [layout] Enforce consistent spacing inside array brackets
	"@stylistic/array-bracket-spacing": "error",

	// [layout] Enforce line breaks after each array element
	"@stylistic/array-element-newline": ["error", "consistent"],

	// [layout] Require parentheses around arrow function arguments
	"@stylistic/arrow-parens": "error",

	// [layout] Enforce consistent spacing before and after the arrow in arrow functions
	"@stylistic/arrow-spacing": "error",

	// [layout] Disallow or enforce spaces inside of blocks after opening block and before closing block
	"@stylistic/block-spacing": "error",

	// [layout] Enforce consistent brace style for blocks
	"@stylistic/brace-style": ["error", "1tbs", {
		"allowSingleLine": true,
	}],

	// [layout] Require or disallow trailing commas
	"@stylistic/comma-dangle": ["error", "always-multiline"],

	// [layout] Enforce consistent spacing before and after commas
	"@stylistic/comma-spacing": "error",

	// [layout] Enforce consistent comma style
	"@stylistic/comma-style": "error",

	// [layout] Enforce consistent spacing inside computed property brackets
	"@stylistic/computed-property-spacing": "error",

	// [layout] Enforce consistent line breaks after opening and before closing braces
	"@stylistic/curly-newline": "error",

	// [layout] Enforce consistent newlines before and after dots
	"@stylistic/dot-location": "error",

	// [layout] Require or disallow newline at the end of files
	"@stylistic/eol-last": "error",

	// [layout] Enforce line breaks between arguments of a function call
	"@stylistic/function-call-argument-newline": ["error", "consistent"],

	// [layout] Require or disallow spacing between function identifiers and their invocations
	"@stylistic/function-call-spacing": "error",

	// [layout] Enforce consistent line breaks inside function parentheses
	"@stylistic/function-paren-newline": "error",

	// [layout] Enforce consistent spacing around `*` operators in generator functions
	"@stylistic/generator-star-spacing": "error",

	// [layout] Enforce the location of arrow function bodies
	"@stylistic/implicit-arrow-linebreak": "error",

	// [layout] Enforce consistent indentation
	"@stylistic/indent": ["error", "tab"],

	// [layout] Indentation for binary operators
	"@stylistic/indent-binary-ops": ["error", "tab"],

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
	"@stylistic/key-spacing": "error",

	// [layout] Enforce consistent spacing before and after keywords
	"@stylistic/keyword-spacing": "error",

	// [layout] Enforce position of line comments
	// "@stylistic/line-comment-position": "off",

	// [layout] Enforce consistent linebreak style
	"@stylistic/linebreak-style": "error",

	// [layout] Require empty lines around comments
	"@stylistic/lines-around-comment": "error",

	// [layout] Require or disallow an empty line between class members
	// "@stylistic/lines-between-class-members": "off",

	// [layout] Enforce consistent spacing and line break styles inside brackets.
	// "@stylistic/exp-list-style": "off",

	// [layout] Enforce a maximum line length
	// "@stylistic/max-len": "off",

	// [layout] Enforce a maximum number of statements allowed per line
	// "@stylistic/max-statements-per-line": "off",

	// [layout] Require a specific member delimiter style for interfaces and type literals
	"@stylistic/member-delimiter-style": "error",

	// [layout] Enforce newlines between operands of ternary expressions
	// "@stylistic/multiline-ternary": "off",

	// [layout] Enforce or disallow parentheses when invoking a constructor with no arguments
	"@stylistic/new-parens": "error",

	// [layout] Require a newline after each call in a method chain
	// "@stylistic/newline-per-chained-call": "off",

	// [layout] Disallow arrow functions where they could be confused with comparisons
	// "@stylistic/no-confusing-arrow": "off",

	// [layout] Disallow unnecessary parentheses
	// "@stylistic/no-extra-parens": "off",

	// [layout] Disallow unnecessary semicolons
	"@stylistic/no-extra-semi": "error",

	// [layout] Disallow leading or trailing decimal points in numeric literals
	"@stylistic/no-floating-decimal": "error",

	// [layout] Disallow mixed binary operators
	"@stylistic/no-mixed-operators": "error",

	// [layout] Disallow mixed spaces and tabs for indentation
	"@stylistic/no-mixed-spaces-and-tabs": "error",

	// [layout] Disallow multiple spaces
	"@stylistic/no-multi-spaces": "error",

	// [layout] Disallow multiple empty lines
	"@stylistic/no-multiple-empty-lines": ["error", {
		"max": 1,
		"maxEOF": 0,
		"maxBOF": 0,
	}],

	// [layout] Disallow all tabs
	"@stylistic/no-tabs": ["error", {
		"allowIndentationTabs": true,
	}],

	// [layout] Disallow trailing whitespace at the end of lines
	"@stylistic/no-trailing-spaces": "error",

	// [layout] Disallow whitespace before properties
	"@stylistic/no-whitespace-before-property": "error",

	// [layout] Enforce the location of single-line statements
	"@stylistic/nonblock-statement-body-position": "error",

	// [layout] Enforce consistent line breaks after opening and before closing braces
	"@stylistic/object-curly-newline": ["error", {
		"ImportDeclaration": {"multiline": true, "minProperties": 2},
	}],

	// [layout] Enforce consistent spacing inside braces
	"@stylistic/object-curly-spacing": "error",

	// [layout] Enforce placing object properties on separate lines
	"@stylistic/object-property-newline": ["error", {
		"allowAllPropertiesOnSameLine": true,
	}],

	// [layout] Require or disallow newlines around variable declarations
	"@stylistic/one-var-declaration-per-line": "error",

	// [layout] Enforce consistent linebreak style for operators
	"@stylistic/operator-linebreak": "error",

	// [layout] Require or disallow padding within blocks
	"@stylistic/padded-blocks": ["error", "never"],

	// [layout] Require or disallow padding lines between statements
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
	"@stylistic/quote-props": ["error", "consistent"],

	// [layout] Enforce the consistent use of either backticks, double, or single quotes
	"@stylistic/quotes": "error",

	// [layout] Enforce spacing between rest and spread operators and their expressions
	"@stylistic/rest-spread-spacing": "error",

	// [layout] Require or disallow semicolons instead of ASI
	"@stylistic/semi": "error",

	// [layout] Enforce consistent spacing before and after semicolons
	"@stylistic/semi-spacing": "error",

	// [layout] Enforce location of semicolons
	"@stylistic/semi-style": "error",

	// [layout] Enforce consistent spacing before blocks
	"@stylistic/space-before-blocks": "error",

	// [layout] Enforce consistent spacing before function parenthesis
	"@stylistic/space-before-function-paren": ["error", {
		"named": "never",
	}],

	// [layout] Enforce consistent spacing inside parentheses
	"@stylistic/space-in-parens": "error",

	// [layout] Require spacing around infix operators
	"@stylistic/space-infix-ops": "error",

	// [layout] Enforce consistent spacing before or after unary operators
	"@stylistic/space-unary-ops": "error",

	// [layout] Enforce consistent spacing after the `//` or `/*` in a comment
	"@stylistic/spaced-comment": "error",

	// [layout] Enforce spacing around colons of switch statements
	"@stylistic/switch-colon-spacing": "error",

	// [layout] Require or disallow spacing around embedded expressions of template strings
	"@stylistic/template-curly-spacing": "error",

	// [layout] Require or disallow spacing between template tags and their literals
	"@stylistic/template-tag-spacing": "error",

	// [layout] Require consistent spacing around type annotations
	"@stylistic/type-annotation-spacing": "error",

	// [layout] Enforces consistent spacing inside TypeScript type generics
	"@stylistic/type-generic-spacing": "error",

	// [layout] Expect space before the type declaration in the named tuple
	"@stylistic/type-named-tuple-spacing": "error",

	// [layout] Require parentheses around immediate `function` invocations
	"@stylistic/wrap-iife": ["error", "inside"],

	// [layout] Require parenthesis around regex literals
	// "@stylistic/wrap-regex": "off",

	// [layout] Require or disallow spacing around the `*` in `yield*` expressions
	"@stylistic/yield-star-spacing": "error",
};
