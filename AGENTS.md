# <project-name>

<One sentence saying what this is and who uses it.> Solo project.

## How work happens here

Every feature, page, route, or non-trivial fix goes through `/workflow:pipeline`. It writes a spec in `docs/specs/`, waits for approval, then runs tests-first through build, review, and an open pull request without stopping. Small fixes skip it.

The conventions come from the `agilbertdev` marketplace, enabled for this project in `.claude/settings.json`. The `workflow` plugin carries the pipeline, the always-on core, and the hooks. The `nuxt-conventions` plugin carries the stack rules. Update them with `claude plugin update workflow@agilbertdev`.

## Product non-negotiables

- <Anything that is never traded away. Delete this section if there is nothing.>

## Stack

Nuxt 4, Nuxt UI 4, Tailwind 4, `@nuxtjs/i18n` with Québécois French as the default locale. Bun for everything. Vitest for unit tests, with coverage reported on each pull request by `AGilbertDev/test-report`.

<Add Turso with Drizzle, Zod, nuxt-auth-utils, and Resend when the project grows a backend.>

## Local commands

```bash
bun install
bun run dev        # http://localhost:8080
bun run test
bun run lint
```
