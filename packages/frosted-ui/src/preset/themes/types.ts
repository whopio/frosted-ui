type Color = string;

export type Theme = {
  name: string;
  transparent: 'transparent';
  extend: {
    colors: {
      whop: {
        // Neutral colors
        black: Color;
        'off-black': Color;
        'dark-gray': Color;
        gray: Color;
        'stroke-dark': Color;
        stroke: Color;
        'hover-press': Color;
        hover: Color;
        'hover-50': Color;
        background: Color;

        // Primary colors
        primary: Color;
        'primary-hover': Color;

        // Secondary colors
        'field-highlight': Color;
        'field-highlight-hover': Color;

        // Accent colors
        'success-green': Color;
        'warning-yellow': Color;
        'error-red': Color;
        'blue-accent': Color;
        'purple-accent': Color;
        'lavender-accent': Color;
        'indigo-accent': Color;

        // Brand colors
        brands: {
          discord: Color;
          twitter: Color;
          coinbase: Color;
          instagram: Color;
          opensea: Color;
          paypal: Color;
          tradingview: Color;
          telegram: Color;
          stripe: Color;
        };

        // Tag colors
        tag: {
          green: Color;
          'green-background': Color;
          blue: Color;
          'blue-background': Color;
          gray: Color;
          'gray-background': Color;
          purple: Color;
          'purple-background': Color;
          warning: Color;
          'warning-background': Color;
          error: Color;
          'error-background': Color;
        };

        // Perk colors
        perk: {
          'software-start': Color;
          'software-end': Color;
          'discord-start': Color;
          'discord-end': Color;
          'content-start': Color;
          'content-end': Color;
          'file-start': Color;
          'file-end': Color;
          'link-start': Color;
          'link-end': Color;
          'custom-start': Color;
          'custom-end': Color;
        };

        // Gradient colors
        gradient: {
          'purple-start': Color;
          'purple-middle': Color;
          'purple-end': Color;
          'fire-start': Color;
          'fire-middle': Color;
          'fire-end': Color;
        };

        // Misc colors
        'fixed-black': Color;
        'fixed-white': Color;
        'avatar-stroke': Color;
        'primary-button-text': Color;
      };
    };
  };
};
