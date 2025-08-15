import { StorybookConfig } from "@storybook/react-native-web-vite";

const main: StorybookConfig = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@storybook/addon-docs", "@chromatic-com/storybook"],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen",
  },
};

export default main;
