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

  viteFinal: async (config) => {
    // Add buffer polyfill
    config.define = {
      ...config.define,
      global: 'globalThis',
    };
    
    // Ensure react-native is aliased to react-native-web
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        'react-native': 'react-native-web',
      },
    };

    return config;
  },
};

export default main;
