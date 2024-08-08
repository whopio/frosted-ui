const fs = require('fs');
const path = require('path');
const allColorScales = require('@radix-ui/colors');

const outputDir = './assets';

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
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
} catch (err) {
  console.error(err);
}

const colorNames = Object.keys(allColorScales).filter(
  (key) => !(key.includes('P3') || key.includes('Dark') || key.endsWith('A')),
);

colorNames.forEach((colorName) => {
  // TODO: handle lime-9-contrast colors
  // TODO: handle semantic colors (danger, info, success)
  // TODO: handle background and panel colors
  // TODO: handle black and white palettes (they're they're same for light and dark mode)
  if (colorName === 'blackA' || colorName === 'whiteA') return;

  const p3colorName = colorName + 'P3';
  Object.keys(allColorScales[p3colorName]).forEach((shadeName) => {
    const colorSet = {
      light: getChannelsFromCssP3(allColorScales[p3colorName][shadeName]),
      dark: getChannelsFromCssP3(
        allColorScales[colorName + 'Dark' + 'P3'][shadeName],
      ),
    };
    createColorAsset(shadeName, colorSet.light, colorSet.dark);
  });

  const p3colorNameAlpha = p3colorName + 'A';
  Object.keys(allColorScales[p3colorNameAlpha]).forEach((shadeName) => {
    const colorSet = {
      light: getChannelsFromCssP3(allColorScales[p3colorNameAlpha][shadeName]),
      dark: getChannelsFromCssP3(
        allColorScales[colorName + 'Dark' + 'P3A'][shadeName],
      ),
    };
    createColorAsset(shadeName, colorSet.light, colorSet.dark);
  });
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
    createColorAsset(shadeName, colorSet.light, colorSet.dark);
  });
});

function createColorAsset(shadeName, light, dark) {
  const folderName = `${outputDir}/${shadeName}.colorset`;
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
