module.exports = () => ({
  postcssPlugin: 'postcss-remove-p3',
  OnceExit(root) {
    const toRemove = [];
    // Collect all P3 rules first, then remove them
    root.walkAtRules((atRule) => {
      if (atRule.name === 'supports') {
        const params = String(atRule.params || '');
        if (params.includes('display-p3')) {
          toRemove.push(atRule);
        } else {
          // Check nested @media rules
          atRule.walkAtRules('media', (mediaRule) => {
            const mediaParams = String(mediaRule.params || '');
            if (mediaParams.includes('color-gamut: p3') || mediaParams.includes('color-gamut:p3')) {
              toRemove.push(atRule);
            }
          });
        }
      } else if (atRule.name === 'media') {
        const params = String(atRule.params || '');
        if (params.includes('color-gamut: p3') || params.includes('color-gamut:p3')) {
          const parent = atRule.parent;
          if (parent && parent.type === 'atrule' && parent.name === 'supports') {
            toRemove.push(parent);
          } else {
            toRemove.push(atRule);
          }
        }
      }
    });
    // Remove all collected rules
    toRemove.forEach((rule) => {
      if (!rule.removed) {
        rule.remove();
      }
    });
  },
});

module.exports.postcss = true;
