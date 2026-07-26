# @somethings/eslint-config

A shareable [ESLint](https://eslint.org/) flat config for JavaScript and TypeScript projects.

It ships two config sets — `javascriptConfigs` and `typescriptConfigs` — built from a curated selection of rules, so every rule that's enabled (or deliberately left off) is a conscious decision rather than a defaults dump from a plugin.

## Usage

This package exports configs for JavaScript and TypeScript projects. Each config is pre-configured to target its own file extensions: `javascriptConfigs` for `.js` and `.jsx`, `typescriptConfigs` for `.ts` and `.tsx`. Use either one or both in `eslint.config.js`, depending on which files need to be linted in the project.

```js
import {javascriptConfigs, typescriptConfigs} from "@somethings/eslint-config";

export default [
	...javascriptConfigs,
	...typescriptConfigs,
];
```

Augment the configs with additional parameters as needed — see this package's own `eslint.config.js` for an example.

## Why the rules are split into `eslint`, `typescript-eslint` and `stylistic`

Rule sources live under `src/` in three groups, each mirroring a separate upstream package:

- `src/eslint/` — core [rules](https://eslint.org/docs/latest/rules/) from ESLint itself.
- `src/typescriptEslint/` — type-aware [rules](https://typescript-eslint.io/rules/) from [`typescript-eslint`](https://typescript-eslint.io/).
- `src/stylistic/` — formatting [rules](https://eslint.style/rules) from [`@stylistic/eslint-plugin`](https://eslint.style/).

This split isn't arbitrary — it follows what happened upstream. ESLint core and typescript-eslint both used to own their own formatting rules (indentation, quotes, spacing, and so on) alongside their logical/correctness rules. Both projects deprecated those formatting rules and handed them off to the community-maintained `@stylistic/eslint-plugin`, which now covers stylistic concerns for JS, TS and JSX in one place. Once that split happened upstream, it made sense to mirror it here: purely stylistic preferences live in `src/stylistic/`, while `src/eslint/` and `src/typescriptEslint/` are left with the rules that catch actual bugs or enforce non-cosmetic conventions.

Within these categories, rules are further grouped by ESLint's own `meta.type` classification, each in its own `rules_*.ts` file. This isn't an arbitrary split — it mirrors how ESLint itself categorizes rules, which makes it easy to line a file up against the corresponding section of the plugin's rule list when auditing or updating.

## Keeping rules up to date

Every rule file (`src/*/rules_*.ts`) is a flat, hand-maintained map of rule name to setting. Rules that are intentionally left disabled are kept in the file as commented-out entries (each preceded by a comment with the rule's type and description), so the file also serves as a record of every available rule that was considered and explicitly turned down — not just the ones that are on.

To audit the current rule set against what the underlying plugins actually ship (after bumping `eslint`, `typescript-eslint` or `@stylistic/eslint-plugin`), run:

```bash
npm run build
npm run list
```

This reads rule metadata directly from the installed plugins (`src/list.js`) and prints, per plugin, every rule annotated as:

- **dimmed** — available upstream but not applied here (commented out in the source).
- **green** — applied, with its current setting.
- **red** — applied, but deprecated upstream and needs attention (either removed or replaced by a newer rule).

Use that output to:

1. Make sure the `list` script runs without errors. Because `src/list.js` reaches into each plugin's internals via deep imports (there's no public API for rule metadata), it's inherently fragile across major version bumps of the underlying packages — treat its output as a starting point for a manual review, not as ground truth.
2. Update the appropriate `rules_*.ts` files according to the output: add newly introduced rules (as an enabled rule, or as a commented-out entry if it's deliberately skipped), and move rules between files if a rule's category has changed. Create new `rules_*.ts` files for newly introduced categories, and remove files for categories that no longer exist. Simply copy-paste chunks of the output into the rule files (detailed configs are replaced with "..." for simplicity — revert them if needed). In general, each `rules_*.ts` file's contents should match the script's output for that category (minus "..." substitutions).
3. Check for deprecation warnings. Replace any rule reported as deprecated with its upstream replacement, or drop it if none exists.
4. Once every `rules_*.ts` file has been reviewed and updated, re-run `list` and save the output to make future reviews easier:

```bash
npm run build
npm run list > list_output.txt
```
