@somethings/eslint-config
=========================

A shareable [ESLint](https://eslint.org/) flat config for JavaScript and TypeScript projects.

It ships two config sets — `javascriptConfigs` and `typescriptConfigs` — built from a curated selection of rules, so every rule that's enabled (or deliberately left off) is a conscious decision rather than a defaults dump from a plugin.

Usage
-----

This package exports configs for JavaScript and TypeScript projects. Each config is pre-configured to target its own file extensions: `javascriptConfigs` for `.js` and `.jsx`, `typescriptConfigs` for `.ts` and `.tsx`. Use either one or both in `eslint.config.js`, depending on which files need to be linted in the project.

```js
import {javascriptConfigs, typescriptConfigs} from "@somethings/eslint-config";

export default [
	...javascriptConfigs,
	...typescriptConfigs,
];
```

Augment the configs with additional parameters as needed — see this package's own `eslint.config.js` for an example.

Overview
--------

Rule sources live under `src/rules/` in three groups, each mirroring a separate upstream package:

- `src/rules/eslint/` — core [rules](https://eslint.org/docs/latest/rules/) from ESLint itself.
- `src/rules/typescriptEslint/` — type-aware [rules](https://typescript-eslint.io/rules/) from [`typescript-eslint`](https://typescript-eslint.io/).
- `src/rules/stylistic/` — formatting [rules](https://eslint.style/rules) from [`@stylistic/eslint-plugin`](https://eslint.style/).

This split isn't arbitrary — it follows what happened upstream. ESLint core and typescript-eslint both used to own their own formatting rules (indentation, quotes, spacing, and so on) alongside their logical/correctness rules. Both projects deprecated those formatting rules and handed them off to the community-maintained `@stylistic/eslint-plugin`, which now covers stylistic concerns for JS, TS and JSX in one place. Once that split happened upstream, it made sense to mirror it here: purely stylistic preferences live in `src/rules/stylistic/`, while `src/rules/eslint/` and `src/rules/typescriptEslint/` are left with the rules that catch actual bugs or enforce non-cosmetic conventions.

Within these categories, rules are further grouped by ESLint's own `meta.type` classification, each in its own `*.ts` rules file. It mirrors how ESLint itself categorizes rules, which makes it easy to line a file up against the corresponding section of the plugin's rule list when auditing or updating.

`src/print/` is a separate module, not part of the published package. It reads rule metadata from the installed plugins and from the current rules files to drive the auditing workflow described below.

Keeping rules up to date
------------------------

Every rule file (`src/rules/*/*.ts`) is a flat, hand-maintained map of rule name to setting. Rules that are intentionally left disabled are kept in the file as commented-out entries (each preceded by a comment with the rule's type and description), so the file also serves as a record of every available rule that was considered and explicitly turned down — not just the ones that are on.

To audit the current rule set against what the underlying plugins actually ship (after bumping `eslint`, `typescript-eslint` or `@stylistic/eslint-plugin`), run:

```bash
npm run build
npm run print
```

This reads rule metadata directly from the installed plugins and prints, per plugin, every rule annotated as:

- **dimmed** — available upstream but not applied here (commented out in the source).
- **green** — applied, with its current setting.
- **red** — applied, but deprecated upstream and needs attention (either removed or replaced by a newer rule).

Use that output to:

- Make sure the `print` script runs without errors. Because `src/print/upstream.js` reaches into each plugin's internals via deep imports (there's no public API for rule metadata), it's inherently fragile across major version bumps of the underlying packages. Treat its output as a starting point for a manual review, not as ground truth.
- Update the appropriate rules files according to the output: add newly introduced rules (as an enabled rule, or as a commented-out entry if it's deliberately skipped), and move rules between files if a rule's category has changed. Create new rules files for newly introduced categories, and remove files for categories that no longer exist. Simply copy-paste chunks of the output into the rule files. In general, each rules file's contents should match the script's output for that category.
- Check for deprecation warnings ("Deprecated!" comments). Replace any rule reported as deprecated with its upstream replacement, or drop it if none exists. Or keep it if you really need to.
- Check for base rule override warnings ("Base rule is not applied!" comments). They appear if a TypeScript rule overrides a base ESLint rule with the same name, but the base rule is not set. Make sure the base rule is set or keep the warning at your own discretion.
- Once every rules file has been reviewed and updated, re-run `print` and save the output to `print_output.txt` to make future reviews easier:

```bash
npm run build
npm run print > print_output.txt
```

Changing rules
--------------

The principles behind enabling or disabling a given rule:

- Enable as many rules as possible.
- Use the default configuration (just `"error"`) whenever it matches the desired behavior.
- When it doesn't, change as little of the default configuration as possible, leaving options that already work as-is untouched.
- Only adjust configuration further after running into a real-world case where it falls short.

To change a rule:

- Update the rule sources first (see previous section).
- Make changes to the rules files.
- Run `print` and check for "Base rule is not applied!" comments. Make sure the output matches the changed files — copy the output over to the rules files if necessary.
- Save the output to `print_output.txt`.
