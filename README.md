# (turbo-module): frosted-ui

this is a [`turbo-module`](https://github.com/whopio/turbo-module) starter template generated using [`create-turbo-module`](https://github.com/whopio/turbo-module/tree/main/packages/create-turbo-module)

## repository setup

After creating your turbo-module, push the repository to github and apply the following (recommended) settings:

- Only allow squash merging PRs and set the default message to `Pull request title and description`
- install [kodiakhq](https://github.com/marketplace/kodiakhq#pricing-and-setup)
- set up branch protection for the `main` branch:
  - require a pull request before merging
    - require approvals: 1+
    - require review from code owners
  - require status checks to pass before merging
    - require branches to be up to date before merging
  - require conversation resolution before merging
  - restrict who can push to matching branches
    - resitrct pushes that create matching branches
    - allow kodiakhq to push to matching branches
- allow actions to create PRs (/settings/actions). This has to be allowed on the repo and org level
- add your `NPM_TOKEN` to your workflow secrets

## additional setup

NOTE: The PR action has to run at least once for these checks to become selectable

- updated the branch protection rules for the `main` branch:
  - require status checks to pass before merging:
    - Check unimported
    - Lint repository
    - Test repository
