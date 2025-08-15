![picture of storybook](https://github.com/user-attachments/assets/cf98766d-8b90-44ab-b718-94ab16e63205)

# getting started

```sh
npx create-expo-app --template expo-template-storybook AwesomeStorybook
```

or

```sh
yarn create expo-app --template expo-template-storybook AwesomeStorybook
```

# app

```sh
yarn start
```

# RN Storybook (ondevice)

In this template you can now run `yarn storybook` to start ondevice storybook or `yarn start` to start your expo app.
This works via env variables and expo constants.

```sh
# either
yarn storybook

# ios
yarn storybook:ios

# android
yarn storybook:android
```

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```sh
yarn storybook-generate
```

# Web

Start react native web storybook:

```
yarn storybook:web
```

build react native web storybook:

```sh
yarn build-storybook
```
