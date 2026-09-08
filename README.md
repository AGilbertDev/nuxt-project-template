# nuxt-project-template

The starting point for my personal Nuxt projects. Create a repository from this template and the first commit already has the stack, the tooling, the tests, the CI report, and the Claude Code workflow wired in.

> Mine, published so the work can be read and tried. It is not open source. The licence permits running it to evaluate my work, and nothing beyond that. See [License](#license).

## Start a project from it

```bash
gh repo create <name> --template AGilbertDev/nuxt-project-template --private --clone
cd <name>
git config user.name "AGilbertDev"
git config user.email "<personal email>"
bun install
bun run dev
```

Then rename the placeholders in `AGENTS.md`, `package.json`, and `i18n/locales/*.json`, and delete `shared/greeting.ts` with its test once the project has logic of its own.

## What comes with it

**Stack.** Nuxt 4, Nuxt UI 4, Tailwind 4, `@nuxt/fonts`, and `@nuxtjs/i18n` with Québécois French as the default locale and English second. Bun is the package manager and the task runner.

**Tooling.** ESLint with Prettier and perfectionist, husky running lint-staged on commit, and TypeScript throughout.

**Tests.** Vitest over a top-level `test/` folder that mirrors the source tree, with coverage reading `.github/test-exclusions.json` so the numbers on a pull request match the numbers here.

**Continuous integration.** [`AGilbertDev/test-report`](https://github.com/AGilbertDev/test-report) posts one comment per pull request with the failing tests, the coverage of the files you changed, and the difference against the default branch. The check is red whenever a test fails or a changed file falls under the threshold.

**The Claude Code workflow.** `.claude/settings.json` enables the `workflow` and `nuxt-conventions` plugins from the [`agilbertdev`](https://github.com/AGilbertDev/claude-plugins) marketplace at project scope, so a clone gets them without any per-machine setup. Claude offers to install them on the first session. `/workflow:pipeline` then carries a feature from an approved spec to an open pull request.

**Path-scoped rules.** `.claude/rules/` holds four short files that load whenever a matching file is touched, whatever the task. Each one points at the skill that carries the detail and repeats only the handful of rules that get missed. A skill loads when the model judges it relevant. A rule loads because of the file path, which is the difference that matters on an edit nobody thought to announce.

**A sandbox.** `.devcontainer/` holds a container with Bun, the GitHub CLI, and the Claude Code CLI, for running an agent in isolation.

## Layout

```
app/        client code
shared/     contracts both sides import
test/       unit tests, mirroring the source tree
docs/specs/ one spec per feature, written by the pipeline
.claude/    which plugins this project uses, and the path-scoped rules
.github/    the tests workflow and the coverage exclusions
```

## License

All rights reserved, with one narrow permission. Anyone may install and run it as published to evaluate my work. That covers running it and nothing else, so not adopting it in your own projects, not adapting it, and not redistributing it. See [LICENSE](./LICENSE).
