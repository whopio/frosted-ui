import { build, context } from 'esbuild';
import { copyFileSync, mkdirSync, watch } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.dirname(fileURLToPath(import.meta.url));
const watchMode = process.argv.includes('--watch');

mkdirSync(path.join(root, 'dist'), { recursive: true });

const copyUi = () => {
  copyFileSync(path.join(root, 'src/ui.html'), path.join(root, 'dist/ui.html'));
  console.log('[icon-sync-plugin] copied ui.html');
};

const buildOptions = {
  entryPoints: [path.join(root, 'src/code.ts')],
  bundle: true,
  target: 'es2020',
  format: 'iife',
  outfile: path.join(root, 'dist/code.js'),
  logLevel: 'info',
};

if (watchMode) {
  const ctx = await context(buildOptions);
  await ctx.watch();
  copyUi();
  watch(path.join(root, 'src/ui.html'), copyUi);
  console.log('[icon-sync-plugin] watching for changes…');
} else {
  await build(buildOptions);
  copyUi();
  console.log('[icon-sync-plugin] build complete');
}
