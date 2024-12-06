const fs = require('fs');
const path = require('path');
const allColorScales = require('@radix-ui/colors');

const swiftOutputDir = './colors';
const kotlinOutputDir = './kotlin-colors';

const neutralPalettes = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];
// The palette that we want to use as the base, neutral color
const neutralPalette = 'gray';
const omittedGrayPalettes = neutralPalettes.filter(
  (palette) => palette !== neutralPalette,
);

// Contrast colors stay the same between light and dark mode
const pureWhiteP3 = 'color(display-p3 1 1 1)';
const contrastColorMapping = {
  tomato: pureWhiteP3,
  red: pureWhiteP3,
  ruby: pureWhiteP3,
  crimson: pureWhiteP3,
  pink: pureWhiteP3,
  plum: pureWhiteP3,
  purple: pureWhiteP3,
  violet: pureWhiteP3,
  iris: pureWhiteP3,
  indigo: pureWhiteP3,
  blue: pureWhiteP3,
  cyan: pureWhiteP3,
  teal: pureWhiteP3,
  jade: pureWhiteP3,
  green: pureWhiteP3,
  grass: pureWhiteP3,
  orange: pureWhiteP3,
  brown: pureWhiteP3,
  sky: 'color(display-p3 0.113 0.125 0.14)', // light mode slate 12
  mint: 'color(display-p3 0.107 0.129 0.118)', // light mode sage 12
  lime: 'color(display-p3 0.117 0.129 0.111)', // light mode olive 12
  yellow: 'color(display-p3 0.129 0.126 0.111)', // light mode sand 12
  amber: 'color(display-p3 0.129 0.126 0.111)', // light mode sand 12
  gold: pureWhiteP3,
  bronze: pureWhiteP3,
  gray: pureWhiteP3,
};

function getChannelsFromCssP3(cssColor) {
  const pattern =
    /color\(display-p3\s+([0-9]*\.?[0-9]+)\s+([0-9]*\.?[0-9]+)\s+([0-9]*\.?[0-9]+)(?:\s*\/\s*([0-9]*\.?[0-9]+))?\)/;

  const matches = cssColor.match(pattern);

  if (matches) {
    const red = matches[1];
    const green = matches[2];
    const blue = matches[3];
    const alpha = matches[4] || 1;

    return {
      red: parseFloat(red).toFixed(3),
      green: parseFloat(green).toFixed(3),
      blue: parseFloat(blue).toFixed(3),
      alpha: parseFloat(alpha).toFixed(3),
    };
  } else {
    return {
      red: (0).toFixed(3),
      green: (0).toFixed(3),
      blue: (0).toFixed(3),
      // If there's no alpha channel the opacity is full (1)
      alpha: (1).toFixed(3),
    };
  }
}

try {
  if (!fs.existsSync(swiftOutputDir)) {
    fs.mkdirSync(swiftOutputDir);
  }
  if (!fs.existsSync(kotlinOutputDir)) {
    fs.mkdirSync(kotlinOutputDir);
  }
  console.log('Creating Kotlin color file');
  createKotlinColorFile();
} catch (err) {
  console.error(err);
}

const colorNames = Object.keys(allColorScales).filter(
  (key) =>
    !(
      key.includes('P3') ||
      key.includes('Dark') ||
      key.endsWith('A') ||
      omittedGrayPalettes.some((omittedPalette) =>
        key.startsWith(omittedPalette),
      )
    ),
);

colorNames.forEach((colorName) => {
  if (colorName === 'blackA' || colorName === 'whiteA') return;

  const p3colorName = colorName + 'P3';
  Object.keys(allColorScales[p3colorName]).forEach((shadeName) => {
    const colorSet = {
      light: getChannelsFromCssP3(allColorScales[p3colorName][shadeName]),
      dark: getChannelsFromCssP3(
        allColorScales[colorName + 'Dark' + 'P3'][shadeName],
      ),
    };
    createSwiftColorAsset(shadeName, colorSet.light, colorSet.dark);
    createKotlinColorAsset(shadeName, colorSet.light, colorSet.dark);
  });

  const p3colorNameAlpha = colorName + 'P3A';
  if (allColorScales[p3colorNameAlpha]) {
    Object.keys(allColorScales[p3colorNameAlpha]).forEach((shadeName) => {
      const colorSet = {
        light: getChannelsFromCssP3(
          allColorScales[p3colorNameAlpha][shadeName],
        ),
        dark: getChannelsFromCssP3(
          allColorScales[colorName + 'DarkP3A'][shadeName],
        ),
      };
      createSwiftColorAsset(shadeName, colorSet.light, colorSet.dark);
      createKotlinColorAsset(shadeName, colorSet.light, colorSet.dark);
    });
  }
});

Object.entries(contrastColorMapping).forEach(([shadeName, value]) => {
  const colorSet = {
    light: getChannelsFromCssP3(value),
    dark: getChannelsFromCssP3(value),
  };
  createSwiftColorAsset(`${shadeName}9contrast`, colorSet.light, colorSet.dark);
  createKotlinColorAsset(
    `${shadeName}9contrast`,
    colorSet.light,
    colorSet.dark,
  );
});
// White and black color palettes are only available in ALPHA variants
// The values stay the same between the light and the dark mode
['white', 'black'].forEach((colorName) => {
  const p3colorName = colorName + 'P3';

  const p3colorNameAlpha = p3colorName + 'A';
  Object.keys(allColorScales[p3colorNameAlpha]).forEach((shadeName) => {
    const shade = getChannelsFromCssP3(
      allColorScales[p3colorNameAlpha][shadeName],
    );
    const colorSet = {
      light: shade,
      dark: shade,
    };
    createSwiftColorAsset(shadeName, colorSet.light, colorSet.dark);
    createKotlinColorAsset(shadeName, colorSet.light, colorSet.dark);
  });
});

function createKotlinColorFile() {
  const folderName = `${kotlinOutputDir}`;
  const initialContent = `package com.whop.android.ui.theme

import androidx.compose.ui.graphics.Color

object Colors {
    // Light theme colors
    object Light {
    }

    // Dark theme colors 
    object Dark {
    }
}
`;

  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName, { recursive: true });
  }

  fs.writeFileSync(path.join(folderName, 'Color.kt'), initialContent);
}

function p3ToHex(p3Color) {
  // Convert P3 values (0-1) to RGB (0-255)
  const r = Math.round(parseFloat(p3Color.red) * 255);
  const g = Math.round(parseFloat(p3Color.green) * 255);
  const b = Math.round(parseFloat(p3Color.blue) * 255);
  const a = Math.round(parseFloat(p3Color.alpha) * 255);

  // Format as hex string with alpha
  return `0x${a.toString(16).padStart(2, '0')}${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}

function createKotlinColorAsset(shadeName, light, dark) {
  const filePath = path.join(kotlinOutputDir, 'Color.kt');
  let content = fs.readFileSync(filePath, 'utf8');

  // Convert P3 colors to Kotlin hex format
  const lightColorStr = `Color(${p3ToHex(light)})`;
  const darkColorStr = `Color(${p3ToHex(dark)})`;

  const varName = shadeName.charAt(0).toUpperCase() + shadeName.slice(1);

  const lightObjectStart =
    content.indexOf('object Light {') + 'object Light {'.length;
  const darkObjectStart =
    content.indexOf('object Dark {') + 'object Dark {'.length;

  const beforeLight = content.slice(0, lightObjectStart);
  const afterLight = content.slice(lightObjectStart);
  content =
    beforeLight + `\n        val ${varName} = ${lightColorStr}` + afterLight;

  const newDarkObjectStart =
    content.indexOf('object Dark {') + 'object Dark {'.length;

  const beforeDark = content.slice(0, newDarkObjectStart);
  const afterDark = content.slice(newDarkObjectStart);
  content =
    beforeDark + `\n        val ${varName} = ${darkColorStr}` + afterDark;

  fs.writeFileSync(filePath, content);
}

function createSwiftColorAsset(shadeName, light, dark) {
  const folderName = `${swiftOutputDir}/${shadeName}.colorset`;
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }

  fs.writeFileSync(
    path.join(folderName, 'Contents.json'),
    `{
  "colors" : [
    {
      "color" : {
        "color-space" : "display-p3",
        "components" : {
          "alpha" : "${light.alpha}",
          "blue" : "${light.blue}",
          "green" : "${light.green}",
          "red" : "${light.red}"
        }
      },
      "idiom" : "universal"
    },
    {
      "appearances" : [
        {
          "appearance" : "luminosity",
          "value" : "dark"
        }
      ],
      "color" : {
        "color-space" : "display-p3",
        "components" : {
          "alpha" : "${dark.alpha}",
          "blue" : "${dark.blue}",
          "green" : "${dark.green}",
          "red" : "${dark.red}"
        }
      },
      "idiom" : "universal"
    }
  ],
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}`,
  );
}
