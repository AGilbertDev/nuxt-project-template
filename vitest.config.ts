import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

// The exclusions file is the one source of truth. The test-report action reads
// it to list what was left out and why, and this config reads it so the totals
// on the pull request agree with the numbers here.
const exclusions = JSON.parse(
  readFileSync(new URL('./.github/test-exclusions.json', import.meta.url), 'utf8')
)

// Pure logic only. These tests never boot Nuxt, a browser, or a database, so
// the node environment is deliberate. Tests live in a top-level test/ folder
// that mirrors the source tree and resolve through the same aliases the app uses.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
    coverage: {
      include: ['app/**', 'server/**', 'shared/**'],
      exclude: [...coverageConfigDefaults.exclude, ...exclusions.files.map((f) => f.path)],
      reportOnFailure: true
    }
  },
  resolve: {
    alias: {
      '#shared': fileURLToPath(new URL('./shared', import.meta.url)),
      '~~': fileURLToPath(new URL('.', import.meta.url))
    }
  }
})
