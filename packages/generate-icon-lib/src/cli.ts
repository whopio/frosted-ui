import meow from 'meow';
import path from 'path';
import { DEFAULT_FIGMA_FILE_KEY, PICTOGRAMS_FIGMA_FILE_KEY } from './consts';
import {
  createFigmaConfig,
  downloadSvgsToFs,
  generateIconManifest,
  generateReactComponents,
  getFigmaDocument,
  getGitCustomDiff,
  getIcons,
  getIconsPage,
  getPictograms,
  prechecks,
  renderIdsToSvgs,
  swapGeneratedFiles,
} from './services';
import { CodedError, ERRORS, GeneratorMode, IIconsSvgUrls } from './types';
import { handleError } from './utils';
import { render, unmount } from './view';

async function main() {
  const cli = meow(
    `
	Usage
	  $ ${path.basename(process.argv[1])} [--file=<file-key>] [--type=icons|pictograms]

	Options
	  --file, -f    File Key from Figma. Defaults vary by --type:
	                  icons      → ${DEFAULT_FIGMA_FILE_KEY}
	                  pictograms → ${PICTOGRAMS_FIGMA_FILE_KEY}
	  --type, -t    What to generate. One of: icons, pictograms. (default: icons)
	  --help        Show this message

	Examples
	  $ ${path.basename(process.argv[1])}
	  $ ${path.basename(process.argv[1])} --file=${DEFAULT_FIGMA_FILE_KEY}
	  $ ${path.basename(process.argv[1])} --type=pictograms
	  $ ${path.basename(process.argv[1])} --type=pictograms --file=${PICTOGRAMS_FIGMA_FILE_KEY}
`,
    {
      hardRejection: false,
      flags: {
        file: {
          type: 'string',
          alias: 'f',
        },
        type: {
          type: 'string',
          alias: 't',
          default: 'icons',
        },
      },
    },
  );

  const rawType = (cli.flags.type || 'icons').toLowerCase();
  if (rawType !== 'icons' && rawType !== 'pictograms') {
    throw new CodedError(
      ERRORS.UNEXPECTED,
      `Unsupported --type "${cli.flags.type}". Expected one of: icons, pictograms.`,
      true,
    );
  }
  const mode: GeneratorMode = rawType;
  const fileKey = cli.flags.file || (mode === 'pictograms' ? PICTOGRAMS_FIGMA_FILE_KEY : DEFAULT_FIGMA_FILE_KEY);

  await prechecks(mode);

  const figmaConfig = createFigmaConfig(fileKey);
  render({ fileKey });

  /* 1. Request the figma document, to source all visual nodes */
  render({
    spinners: [{ text: 'Finding the file in Figma...' }],
  });

  const document = await getFigmaDocument(figmaConfig);
  render({
    spinners: [
      { success: true, text: 'Found the Figma file 👌' },
      { text: mode === 'pictograms' ? 'Finding all Pictograms in the designs...' : 'Finding all Icons in the designs...' },
    ],
  });

  /* 2. Filter nodes for our Icons / Pictograms page */
  const canvas = getIconsPage(document, mode);
  if (!canvas) {
    if (mode === 'pictograms') {
      throw new CodedError(
        ERRORS.NO_ICONS_PAGE,
        'Expected a "Pictograms" page to exist in the Figma File. Please make sure your pictograms live on a page named "Pictograms" (decorative emoji prefixes are allowed).',
      );
    }
    throw new CodedError(
      ERRORS.NO_ICONS_PAGE,
      'Expected an "Icons" page to exist in the Figma File. Please make sure your icons live on a page named "Icons" (decorative emoji prefixes are allowed).',
    );
  }

  /* 3. Transform the page into a flat dictionary of icons (or pictograms), labeled by their path */
  const icons = mode === 'pictograms' ? getPictograms(canvas) : getIcons(canvas);
  const iconIds = Object.keys(icons);
  if (!iconIds.length) {
    if (mode === 'pictograms') {
      throw new CodedError(
        ERRORS.NO_ICONS_IN_SETS,
        'Expected one or more pictogram component-sets to be in the "Pictograms" page. Please ensure each pictogram is a Figma component with `pictogram=` and `background=` variant properties.',
      );
    }
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      'Expected one or more icon-sets to be in the "Icons" page. Please try again when you have created Frames to group icon-sets; refer to documentation for more details.',
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
  await downloadSvgsToFs(all, icons, mode, () => {
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

  await generateReactComponents(icons, mode);

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

  const [previousIconManifest, nextIconManifest] = await generateIconManifest(icons, mode);

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
  const touchedPaths = await swapGeneratedFiles(previousIconManifest, nextIconManifest, mode);

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
      diff: await getGitCustomDiff(touchedPaths, mode),
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
