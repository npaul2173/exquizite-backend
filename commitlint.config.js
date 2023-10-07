module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "bugfix",
        "config",
        "hotfix",
        "feature",
        "docs",
        "refactor",
        "revert",
        "test",
        "style",
        "merge branch",
        "work-in-progress",
      ],
    ],
    "scope-case": [2, "always", "kebab-case"],
    "subject-case": [2, "always", "sentence-case"],
  },
};
