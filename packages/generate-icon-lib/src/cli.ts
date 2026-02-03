import meow from 'meow';
import path from 'path';
import {
  createFigmaConfig,
  downloadSvgsToFs,
  generateIconManifest,
  generateReactComponents,
  getFigmaDocument,
  getGitCustomDiff,
  getIcons,
  getIconsPage,
  prechecks,
  renderIdsToSvgs,
  swapGeneratedFiles,
} from './services';
import { CodedError, ERRORS, IIconsSvgUrls } from './types';
import { handleError } from './utils';
import { render, unmount } from './view';

async function main() {
  await prechecks();
  const cli = meow(
    `
	Usage
	  $ ${path.basename(process.argv[1])} --file=<file-key>

	Options
	  --file, -f    File Key from Figma
	  --help        Show this message

	Examples
	  $ ${path.basename(process.argv[1])} --file=EEggMA9IV81CYzCSI8LFEUOY
`,
    {
      hardRejection: false,
      flags: {
        file: {
          type: 'string',
          alias: 'f',
        },
      },
    },
  );

  if (!cli.flags.file) {
    cli.showHelp(1);
  }

  const figmaConfig = createFigmaConfig(cli.flags.file);
  render({ fileKey: cli.flags.file });

  /* 1. Request the figma document, to source all visual nodes */
  render({
    spinners: [{ text: 'Finding the file in Figma...' }],
  });

  const document = await getFigmaDocument(figmaConfig);
  render({
    spinners: [{ success: true, text: 'Found the Figma file 👌' }, { text: 'Finding all Icons in the designs...' }],
  });

  /* 2. Filter nodes for our Icons page */
  const iconsCanvas = getIconsPage(document);
  if (!iconsCanvas) {
    throw new CodedError(
      ERRORS.NO_ICONS_PAGE,
      'Expected an "Product Icons" page to exist in the Figma File. Please rename your primary page to "Product Icons" if you have not already.',
    );
  }

  /* 3. Transform the Icons page into a flat dictionary of icons, labeled by their path */
  const icons = getIcons(iconsCanvas);
  const iconIds = Object.keys(icons);
  if (!iconIds.length) {
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      'Expected one or more icon-sets to be in the "Product Icons" page. Please try again when you have created Frames to group icon-sets; refer to documentation for more details.',
    );
  }

  /* 4. Request Figma services to render Icon nodes as individual SVGs */
  render({
    spinners: [{ text: 'Rendering on the Figma platform...' }],
  });

  // Batch icon IDs into chunks to avoid 413 (Request Entity Too Large) errors
  const BATCH_SIZE = 100;
  const batches: string[][] = [];
  for (let i = 0; i < iconIds.length; i += BATCH_SIZE) {
    batches.push(iconIds.slice(i, i + BATCH_SIZE));
  }

  let all: IIconsSvgUrls = {};
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const batchUrls = await renderIdsToSvgs(batch, figmaConfig);
    all = { ...all, ...batchUrls };
    // Add delay between batches to avoid rate limiting (except after last batch)
    if (i < batches.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  /* 4. Pull down all rendered SVGs to update our local working package */
  render({
    spinners: [
      {
        success: true,
        text: 'Rendered Icons on the Figma platform 🙌',
      },
    ],
    progress: {
      text: 'Gathering Figma renders...',
      percent: 0,
    },
  });

  let downloadsCompleted = 0;
  await downloadSvgsToFs(all, icons, () => {
    downloadsCompleted += 1;
    render({
      progress: {
        text: 'Gathering Figma renders...',
        percent: downloadsCompleted / iconIds.length,
      },
    });
  });

  render({
    spinners: [
      {
        success: true,
        text: 'Downloaded and processed SVG renders 👍',
      },
      {
        text: 'Generating React Components...',
      },
    ],
  });

  /* 5. Generate React Components from the SVGs */

  await generateReactComponents(icons);

  render({
    spinners: [
      {
        success: true,
        text: 'Created React Components ⚛️ ✨',
      },
      {
        text: 'Generating Icon Manifest...',
      },
    ],
  });

  /* 6. Generate React Components from the SVGs */

  const [previousIconManifest, nextIconManifest] = await generateIconManifest(icons);

  render({
    spinners: [
      {
        success: true,
        text: 'Created Icon Manifest 📓 🔥',
      },
      {
        text: 'Applying changes...',
      },
    ],
  });

  /* 7. Apply all new files, while removing previous dirs/files entirely. */
  const touchedPaths = await swapGeneratedFiles(previousIconManifest, nextIconManifest);

  render({
    spinners: [
      {
        success: true,
        text: 'Applied changes to working directory 💇‍',
      },
    ],
  });

  /* 8. Finish. Print stats. */

  try {
    render({
      diff: await getGitCustomDiff(touchedPaths),
    });
  } catch (err) {
    // Swallow git errors, and continue with closing the CLI. 🤙
  }

  unmount();
}

main()
  .then(() => {
    console.log('Bai 👋');
  })
  .catch((err) => handleError(err));

process.addListener('unhandledRejection', (err) => handleError(err));
