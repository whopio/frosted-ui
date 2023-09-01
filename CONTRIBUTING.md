# Contributing to Frosted UI

If you're reading this thank you for your interest in contributing to Frosted UI. Thank you for helping us make Frosted great! Here are a few guidelines to help contribute.

- Before opening a PR be sure to search exiting [PRs](https://github.com/whopio/frosted-ui/pulls) or [issues](https://github.com/whopio/frosted-ui/issues) for an open or closed item that related to your submission.

## PR Titles

We use semantic PR titles. Learn more about them [here](https://flank.github.io/flank/pr_titles/).

Example:

> feat(button): Add right icon

## Linting

We use [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for formatting. We recommend installing both.

To lint all code you can run:

```
pnpm lint
```

## Updating Storybook

When creating new components or updating existing component APIs be sure to update the storybook.

You can run the storybook locally by running `pnpm --filter="frosted-ui" storybook` and then navigating to `http://localhost:6006/`
