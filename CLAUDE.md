# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Test/Lint Commands

### Monorepo
- **Dev server**: `pnpm dev --filter=<app>` (Example: `pnpm dev --filter=tailwind`)
- **Build**: `pnpm build --filter=<app>`
- **Lint**: `pnpm lint --filter=<app>`
- **TypeCheck**: `pnpm typecheck --filter=<app>`

### Frosted UI Package
- **Dev server**: `pnpm --filter="frosted-ui" dev`
- **Build**: `pnpm --filter="frosted-ui" build`
- **Lint**: `pnpm --filter="frosted-ui" lint`
- **Storybook**: `pnpm --filter="frosted-ui" storybook`

## Code Style Guidelines

- **TypeScript**: Strict typing, ES2020 modules, 120 char line width, 2-space indentation
- **React**: Functional components with hooks, JSX format
- **CSS**: Tailwind CSS v4, PostCSS with nesting/custom media/imports
- **Formatting**: Single quotes, semicolons required, trailing commas in multiline
- **Project**: pnpm workspaces with Turborepo, NextJS for applications
- **Commits**: Semantic commit messages (feat, fix, docs, style, refactor, perf, test, chore)
- **Quality**: ESLint for linting, Prettier for formatting, Storybook for component docs