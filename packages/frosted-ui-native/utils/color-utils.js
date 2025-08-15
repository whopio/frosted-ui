// Utility to extract color names from frosted-ui-colors (light only)
const frostedColors = require('@frosted-ui/colors');

function getColorNames() {
  const colorNames = [];

  Object.keys(frostedColors).forEach((colorName) => {
    // Skip P3, P3A, and Dark colors
    if (colorName.includes('P3') || colorName.includes('Dark')) return;

    // Extract base color name (remove 'A' suffix for alpha colors)
    const baseColorName = colorName.replace('A', '');

    // Only add if not already in the list
    if (!colorNames.includes(baseColorName)) {
      colorNames.push(baseColorName);
    }
  });

  return colorNames.sort();
}

module.exports = { getColorNames };
