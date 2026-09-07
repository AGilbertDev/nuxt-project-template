# Specs

One file per feature, at `docs/specs/<domain>/<feature>.md`, grouped by app area the way pages are. The pipeline writes them and keeps them current, and the unit-test agent derives its tests from the numbered acceptance criteria.

Name a test after the criterion it proves, so `AC2` in the spec and `AC2` in the test name, and the pull request report says which criteria have a passing test and which have none.
