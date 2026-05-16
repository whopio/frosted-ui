import chalk from 'chalk';
import cheerio from 'cheerio';
import * as ejs from 'ejs';
import execa from 'execa';
import * as fs from 'fs-extra';
import isOnline from 'is-online';
import * as _ from 'lodash';
import { Headers } from 'node-fetch';
import * as path from 'path';
import * as prettier from 'prettier';
import * as tempy from 'tempy';
import {
  FILE_PATH_ENTRY,
  FILE_PATH_MANIFEST,
  FILE_PATH_PICTOGRAMS_ENTRY,
  FILE_PATH_PICTOGRAMS_MANIFEST,
  FILE_PATH_PICTOGRAMS_TYPES,
  FILE_PATH_TYPES,
  FOLDER_NAME_PICTOGRAM_SRC,
  FOLDER_NAME_PICTOGRAM_SVGS,
  FOLDER_PATH_ICONS,
} from './consts';
import {
  CodedError,
  ERRORS,
  GeneratorMode,
  IDiffSummary,
  IFigmaCanvas,
  IFigmaConfig,
  IFigmaDocument,
  IFigmaFileImageResponse,
  IFigmaFileResponse,
  IIcon,
  IIconManifest,
  IIcons,
  IIconsSvgUrls,
  ITemplateIcon,
} from './types';
import { fetch, getPictogramRemergeSvgo, getSvgo, handleError, pushObjLeafNodesToArr } from './utils';
import { analyzePictogramAlignment, injectFillStrokeLookups, serializeLookup } from './pictogram-merge';
import { render } from './view';

const transformers = {
  /**
   * Pass SVG through SVGO to reduce size.
   */
  async passSVGO(svgRaw: string, mode: GeneratorMode = 'icons') {
    const svgo = getSvgo(mode);
    const { data } = await svgo.optimize(svgRaw);
    return data as string;
  },

  /**
   * Swaps out all colors (except for "non") for stroke and fill to "currentColor".
   */
  injectCurrentColor(svgRaw: string) {
    const $ = cheerio.load(svgRaw, { xmlMode: true });
    $('*').each((i, el) => {
      Object.keys(el.attribs).forEach((attrKey) => {
        if (['fill', 'stroke'].includes(attrKey)) {
          const val = $(el).attr(attrKey);
          if (val !== 'none') {
            $(el).attr(attrKey, 'currentColor');
          }
        }
      });
    });

    return $.xml();
  },

  prettify(svgRaw: string) {
    const prettierOptions = prettier.resolveConfig.sync(process.cwd());
    return prettier.format(svgRaw, { ...prettierOptions, parser: 'html' });
  },

  readyForJSX(svgRaw: string) {
    const $ = cheerio.load(svgRaw, { xmlMode: true });
    $('*').each((i, el) => {
      Object.keys(el.attribs).forEach((attrKey) => {
        if (attrKey.includes('-') && !attrKey.startsWith('data-')) {
          $(el)
            .attr(_.camelCase(attrKey), el.attribs[attrKey])
            .removeAttr(attrKey);
        }
        if (attrKey === 'class') {
          $(el)
            .attr('className', el.attribs[attrKey])
            .removeAttr(attrKey);
        }
      });
    });

    return $('svg')
      .attr('props', '...')
      .toString()
      .replace(/stroke=['|"]currentColor['|"]/g, 'stroke={color}')
      .replace(/fill=['|"]currentColor['|"]/g, 'fill={color}')
      .replace('props="..."', '{...props}');
  },
};

const labelling = {
  typeFromFrameNodeName(nodeName: string): string {
    const base = path.dirname(nodeName);
    const trimmed = base.trim();
    const camelCased = _.camelCase(trimmed);
    return camelCased;
  },
  sizeFromFrameNodeName(nodeName: string): string {
    // Note: We ensure ordering by assignment-time in the object, and avoid numerical
    // key ordering, by adding a non-numerical to the key.
    return labelling.addSizePrefix(
      path
        .basename(nodeName)
        .toLowerCase()
        .trim(),
    );
  },
  filePathFromIcon(icon: IIcon, mode: GeneratorMode = 'icons'): string {
    if (mode === 'pictograms') {
      return path.join(FOLDER_NAME_PICTOGRAM_SVGS, `${icon.svgName}.svg`);
    }
    return path.join(icon.type, 'icons', `${icon.svgName}.svg`);
  },
  stripSizePrefix(size) {
    return size.replace(/^:?(.*)/, '$1');
  },
  addSizePrefix(size) {
    return `:${size.replace(/^(:?)(.*)/, '$2')}`;
  },
};

const currentTempDir = tempy.directory();

const currentListOfAddedFiles = [];

/**
 * Returns the list of pathspecs (relative to repo root via FOLDER_PATH_ICONS) that
 * the given mode is allowed to write to. Used by prechecks() and getGitCustomDiff()
 * to scope git operations so the two modes don't interfere with each other.
 */
function getModePathspecs(mode: GeneratorMode): string[] {
  if (mode === 'pictograms') {
    return [
      path.join(FOLDER_PATH_ICONS, FOLDER_NAME_PICTOGRAM_SVGS),
      path.join(FOLDER_PATH_ICONS, FOLDER_NAME_PICTOGRAM_SRC),
      path.join(FOLDER_PATH_ICONS, FILE_PATH_PICTOGRAMS_MANIFEST),
    ];
  }
  // Icons mode: everything in the package EXCEPT pictogram-owned paths.
  return [
    FOLDER_PATH_ICONS,
    `:!${path.join(FOLDER_PATH_ICONS, FOLDER_NAME_PICTOGRAM_SVGS)}`,
    `:!${path.join(FOLDER_PATH_ICONS, FOLDER_NAME_PICTOGRAM_SRC)}`,
    `:!${path.join(FOLDER_PATH_ICONS, FILE_PATH_PICTOGRAMS_MANIFEST)}`,
  ];
}

export async function prechecks(mode: GeneratorMode = 'icons') {
  /* We can't work offline. */
  isOnline().then((isOn) => {
    if (!isOn) {
      throw new CodedError(
        ERRORS.NETWORK_OFFLINE,
        'An internet connection is required to find and render Icons.',
        true,
      );
    }
  });

  /* We don't want to end up deleted work-in-progress. */
  const pathspecs = getModePathspecs(mode);
  const [{ stdout: trackedFiles }, { stdout: untrackedFiles }] = await Promise.all([
    // Checks for uncommitted changes.
    execa('git', ['diff-index', 'HEAD', '--', ...pathspecs]),
    // Checks for untracked files.
    execa('git', ['ls-files', '--others', '--exclude-standard', '--', ...pathspecs]),
  ]);
  if (trackedFiles.length > 0 || untrackedFiles.length > 0) {
    handleError(
      new CodedError(
        ERRORS.DIRTY_WORKING_DIR,
        'There are uncommitted or untracked files in the working directory.\nPlease commit, stash, or remove them. Then try again.',
        true,
      ),
      false,
    );
    console.error(`
${chalk.bold('Git Status')} ${chalk.dim(
      `(${['--no-renames', '--untracked-files', '--short', '--', ...pathspecs].join(' ')})`,
    )}
`);
    await execa('git', ['status', '--no-renames', '--untracked-files', '--short', '--', ...pathspecs], {
      stdio: 'inherit',
    });
    process.exit(1);
  }
}

export function createFigmaConfig(fileKey: string): IFigmaConfig {
  return {
    baseUrl: 'https://api.figma.com',
    fileKey,
    headers: new Headers({
      'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN,
    }),
  };
}

export async function getFigmaDocument(config: IFigmaConfig): Promise<IFigmaDocument> {
  const resp = await fetch(`${config.baseUrl}/v1/files/${config.fileKey}`, {
    headers: config.headers,
  });
  const data = (await resp.json()) as IFigmaFileResponse;

  // Handle various error cases
  if (data.status === 403 && data.err === 'Invalid token') {
    throw new CodedError(
      ERRORS.FIGMA_API,
      'An invalid token was used. Follow the Auth Guide (https://git.io/Je87i), and try again.',
    );
  }

  if (data.status === 429) {
    throw new CodedError(ERRORS.FIGMA_API, 'Rate limit exceeded. Please wait a few minutes and try again.');
  }

  if (data.status === 404) {
    throw new CodedError(ERRORS.FIGMA_API, `Figma file not found. Check that the file key "${config.fileKey}" is correct.`);
  }

  if (!resp.ok || data.err) {
    const errorMsg = data.err || `HTTP ${resp.status}`;
    throw new CodedError(ERRORS.FIGMA_API, `Figma API error: ${errorMsg}`);
  }

  if (!data.document) {
    throw new CodedError(
      ERRORS.FIGMA_API,
      'Figma API returned an empty document. Check your access token and file permissions.',
    );
  }

  return data.document;
}

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function renderIdsToSvgs(
  ids: string[],
  config: IFigmaConfig,
  maxRetries = 5,
  initialDelayMs = 2000,
): Promise<IIconsSvgUrls> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    if (attempt > 0) {
      // Exponential backoff: 2s, 4s, 8s, 16s, 32s
      const backoffDelay = initialDelayMs * Math.pow(2, attempt - 1);
      console.log(
        chalk.yellow(`Rate limited. Retrying in ${backoffDelay / 1000}s... (attempt ${attempt}/${maxRetries})`),
      );
      await delay(backoffDelay);
    }

    const resp = await fetch(`${config.baseUrl}/v1/images/${config.fileKey}?ids=${ids}&format=svg`, {
      headers: config.headers,
    });

    // We can't be sure the response, when an error, will have a body that can be streamed to JSON.
    let data: IFigmaFileImageResponse = {
      err: null,
      images: {},
    };
    if (resp.headers.get('content-type').includes('application/json')) {
      data = (await resp.json()) as IFigmaFileImageResponse;
    }
    const error = typeof data.err === 'object' ? JSON.stringify(data.err, null, 2) : data.err;

    if (!resp.ok) {
      // Handle rate limiting with retry
      if (resp.status === 429) {
        lastError = new CodedError(ERRORS.FIGMA_API, `Rate limit exceeded\n${error}`);
        continue; // Retry
      }

      switch (resp.status) {
        case 400:
          throw new CodedError(ERRORS.FIGMA_API, `Unexpected error encountered from Figma API\n${error}`);
        case 404:
          throw new CodedError(
            ERRORS.FIGMA_API,
            "One or more of the icons couldn't be found in Figma. Check to see if they still exist, and try again.",
          );
        case 500:
          throw new CodedError(ERRORS.FIGMA_API, 'Figma could not render the icons. ಠ_ಠ');
        default:
          throw new CodedError(
            ERRORS.UNEXPECTED,
            `An error occured while rendering icons to SVG.\n${resp.status}\n${error}`,
          );
      }
    }

    if (!data.images || !Object.keys(data.images).length) {
      throw new CodedError(
        ERRORS.UNEXPECTED,
        `An error occured after rendering icons in Figma. Render response:\n${JSON.stringify(data, null, 2)}`,
      );
    }

    return data.images;
  }

  // If we've exhausted all retries
  throw lastError || new CodedError(ERRORS.FIGMA_API, 'Rate limit exceeded after maximum retries');
}

export function getIconsPage(document: IFigmaDocument, mode: GeneratorMode = 'icons'): IFigmaCanvas | null {
  // Strip non-alphanumeric characters (like emoji prefixes / whitespace) before comparing.
  const normalize = (name: string) => name.replace(/[^a-z0-9]/gi, '').toLowerCase();

  if (mode === 'pictograms') {
    // The Pictograms file doesn't have a page literally named "Pictograms" — at the
    // time of writing it's "✅  FINAL". Rather than coupling to a brittle page
    // name, find the page that contains a top-level node named "Pictogram(s)".
    // Note: in the live file that node is a COMPONENT_SET; we also allow FRAME/GROUP
    // for forward-compatibility if the design ever gets restructured.
    const containsPictogramContainer = (node: any): boolean => {
      if (!node || !node.children) return false;
      return node.children.some((child: any) => isPictogramContainer(child));
    };
    const candidate =
      document.children.find((page) => page.type === 'CANVAS' && normalize(page.name) === 'pictograms') ||
      document.children.find((page) => page.type === 'CANVAS' && containsPictogramContainer(page));
    return candidate && candidate.type === 'CANVAS' ? candidate : null;
  }

  const canvas = document.children.find(
    (page) => page.type === 'CANVAS' && (normalize(page.name) === 'icons' || normalize(page.name) === 'producticons'),
  );

  return canvas && canvas.type === 'CANVAS' ? canvas : null;
}

export function getIcons(iconsCanvas: IFigmaCanvas): IIcons {
  let swag: IIcons = {};

  // Recursively find all frames named "Icons" along with their parent (category) name
  function findIconsFramesWithCategory(node: any, parentName: string = ''): Array<{ frame: any; category: string }> {
    const results: Array<{ frame: any; category: string }> = [];
    if ((node.type === 'FRAME' || node.type === 'GROUP') && node.name === 'Icons') {
      results.push({ frame: node, category: parentName });
    }
    if (node.children) {
      node.children.forEach((child: any) => {
        results.push(...findIconsFramesWithCategory(child, node.name));
      });
    }
    return results;
  }

  const iconsFramesWithCategory = findIconsFramesWithCategory(iconsCanvas);

  // Get all COMPONENT_SET children from "Icons" frames
  iconsFramesWithCategory.forEach(({ frame: iconsFrame, category }) => {
    if (!iconsFrame.children) return;

    iconsFrame.children.forEach((iconNode) => {
      if (iconNode.type !== 'COMPONENT_SET') return;

      // 'Break Link' => 'break-link'
      // 'GitHub Logo' => 'github-logo'
      iconNode.children.forEach((iconVariant) => {
        render({ fileKey: iconVariant.name + ' 🔥🔥🔥' });

        const size = iconVariant.name.replace(/size=/i, '');
        if (size === iconVariant.name) {
          throw new CodedError(
            ERRORS.UNEXPECTED,
            `An unexpected icon variant name was encountered: ${iconVariant.name} for ${iconNode.name}`,
          );
        }
        const iconNameAndSize = `${iconNode.name} ${size}`;
        const svgName = _.kebabCase(iconNameAndSize);

        // We insert whitespace between lower and uppercase letters
        // to make sure that lodash preserves existing camel-casing.
        // 'Break Link' => 'BreakLink'
        // 'GitHub Logo' => 'GitHubLogo'
        const jsxName = _.upperFirst(_.camelCase(iconNameAndSize.replace(/([0-9a-z])([0-9A-Z])/g, '$1 $2')));

        swag[iconVariant.id] = {
          jsxName,
          svgName,
          id: iconVariant.id,
          size: size,
          type: labelling.typeFromFrameNodeName(iconVariant.name),
          category,
        };
      });
    });
  });

  return swag;
}

/**
 * Parses a Figma component variant name like "pictogram=Cone, background=Light"
 * into a normalized property map { pictogram: 'Cone', background: 'Light' }.
 * Property names are lowercased; values keep their original case.
 */
function parseVariantProps(name: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of name.split(',')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim().toLowerCase();
    const value = part.slice(idx + 1).trim();
    if (key) out[key] = value;
  }
  return out;
}

const DIGIT_WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

/**
 * Ensures a string can serve as the start of a JS identifier. Some pictogram
 * names start with a digit (e.g. "5G", "3D Printer") which would produce an
 * invalid React component name. We swap a leading digit for its English word
 * so "5G" → "FiveG" → "FiveGLightPictogram".
 */
function safeIdentifierStart(name: string): string {
  const m = /^([0-9])(.*)$/.exec(name);
  if (!m) return name;
  return `${DIGIT_WORDS[parseInt(m[1], 10)]}${m[2]}`;
}

function pictogramJsxName(pictogramName: string): string {
  // Insert whitespace between lower↔upper boundaries so lodash preserves any
  // existing camel-casing inside the name (e.g. 'GradCap' stays 'GradCap').
  const splitForCamel = (s: string) => s.replace(/([0-9a-z])([0-9A-Z])/g, '$1 $2');
  const pictogramPart = safeIdentifierStart(_.upperFirst(_.camelCase(splitForCamel(pictogramName))));
  return `${pictogramPart}Pictogram`;
}

/**
 * Identifies the top-level container that holds all pictogram variants. In the
 * current Figma file this is a COMPONENT_SET literally named "Pictogram"; we
 * also accept FRAME/GROUP for forward-compatibility.
 */
function isPictogramContainer(node: any): boolean {
  if (!node) return false;
  const isContainerType = node.type === 'COMPONENT_SET' || node.type === 'FRAME' || node.type === 'GROUP';
  return isContainerType && /^pictograms?$/i.test(String(node.name || '').trim());
}

/**
 * Walks the canvas, finds the top-level "Pictogram(s)" frame, and turns each of
 * its `COMPONENT` children (named like "pictogram=Cone, background=Light") into
 * an IIcon entry whose jsxName/svgName follow the `${Pictogram}${Background}Pictogram`
 * convention.
 *
 * Variants may be either direct `COMPONENT` children of the frame (the current
 * Pictograms file structure), or nested inside `COMPONENT_SET` groupings (kept
 * for forward-compatibility). Nodes whose names don't match the expected
 * `pictogram=…, background=…` shape are silently skipped so unrelated artwork
 * on the page won't break the run.
 *
 * Each variant produces a standalone, no-variant React component (rendered via
 * the "no variants" branch of the EJS template), so we set `type='pictograms'`
 * and `size=<background>` to land everything under a single `pictograms` bucket
 * in the generated manifest.
 */
export function getPictograms(canvas: IFigmaCanvas): IIcons {
  const swag: IIcons = {};
  // Dedup by `${jsxName}/${background}` so we don't emit two variants of the same
  // pictogram for the same background (the Figma file occasionally has duplicate
  // entries, e.g. two "pictogram=Grad Cap, background=Light").
  const seenVariantKeys = new Set<string>();

  // Find the top-level "Pictogram(s)" container (case-insensitive). Anything
  // outside of this container on the page (e.g. promo art, color swatch
  // backgrounds) is ignored.
  const pictogramContainers: any[] = [];
  function collectPictogramContainers(node: any) {
    if (!node) return;
    if (isPictogramContainer(node)) {
      pictogramContainers.push(node);
      return; // don't descend further; everything we want lives directly inside
    }
    if (node.children) node.children.forEach(collectPictogramContainers);
  }
  collectPictogramContainers(canvas);

  if (pictogramContainers.length === 0) {
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      'Could not find a top-level "Pictogram" container on the Pictograms page. Make sure the pictograms are grouped inside a component-set or frame named "Pictogram".',
    );
  }

  // Walk the frame collecting any COMPONENTs we can find — both direct children
  // (current structure) and any nested under a COMPONENT_SET (for the future).
  const collectComponents = (node: any, acc: any[] = []): any[] => {
    if (!node) return acc;
    if (node.type === 'COMPONENT') acc.push(node);
    if (node.children) node.children.forEach((child: any) => collectComponents(child, acc));
    return acc;
  };

  pictogramContainers.forEach((container) => {
    const components = collectComponents(container);

    components.forEach((variant) => {
      const props = parseVariantProps(variant.name);
      const pictogramName = props.pictogram;
      const backgroundName = props.background;

      // Silently skip nodes that don't carry the variant properties we expect —
      // they're likely unrelated to the pictogram set.
      if (!pictogramName || !backgroundName) return;

      // jsxName is the GROUP name shared across all backgrounds for this
      // pictogram (e.g. all of Cone/Light, Cone/Dark, Cone/Orange share
      // jsxName = 'ConePictogram'). svgName is per-variant so the SVG files on
      // disk stay distinct and reviewable.
      const jsxName = pictogramJsxName(pictogramName);
      const svgName = _.kebabCase(`${safeIdentifierStart(pictogramName)} ${backgroundName} pictogram`);
      const variantKey = `${jsxName}/${backgroundName.toLowerCase()}`;

      if (seenVariantKeys.has(variantKey)) {
        console.warn(`Skipping duplicate pictogram variant: ${variant.name} (${jsxName} / ${backgroundName})`);
        return;
      }
      seenVariantKeys.add(variantKey);

      render({ fileKey: `${pictogramName} / ${backgroundName} 🎨` });

      swag[variant.id] = {
        jsxName,
        svgName,
        id: variant.id,
        // For pictograms there are no real "size"/"type" axes; we encode the
        // background as `size` so the manifest groups by it, and use a fixed
        // `type='pictograms'` so the manifest's top-level bucket is "pictograms".
        size: backgroundName.toLowerCase(),
        type: 'pictograms',
        category: 'Pictograms',
      };
    });
  });

  return swag;
}

export async function downloadSvgsToFs(
  urls: IIconsSvgUrls,
  icons: IIcons,
  mode: GeneratorMode,
  onProgress: () => void,
) {
  await Promise.all(
    Object.keys(urls).map(async (iconId) => {
      const pipeline = (await fetch(urls[iconId])).text().then(async (svgRaw) => transformers.passSVGO(svgRaw, mode));
      // Pictograms keep their original colors; only monochromatic UI icons get
      // their fills/strokes rewritten to "currentColor".
      const processedSvg = await (mode === 'pictograms'
        ? pipeline.then((svgRaw) => transformers.prettify(svgRaw))
        : pipeline.then((svgRaw) => transformers.injectCurrentColor(svgRaw)).then((svgRaw) => transformers.prettify(svgRaw)));

      const filePath = path.resolve(currentTempDir, labelling.filePathFromIcon(icons[iconId], mode));
      await fs.outputFile(filePath, processedSvg, { encoding: 'utf8' });
      currentListOfAddedFiles.push(filePath);
      onProgress();
    }),
  );
}

export function iconsToManifest(icons: IIcons, mode: GeneratorMode = 'icons'): IIconManifest {
  return Object.keys(icons).reduce((iconManifest: IIconManifest, iconId) => {
    const icon = icons[iconId];

    if (!iconManifest[icon.type]) {
      iconManifest[icon.type] = {};
    }
    if (!iconManifest[icon.type][icon.size]) {
      iconManifest[icon.type][icon.size] = {};
    }
    if (!iconManifest[icon.type][icon.size][icon.svgName]) {
      iconManifest[icon.type][icon.size][icon.svgName] = labelling.filePathFromIcon(icon, mode);
    }

    return iconManifest;
  }, {});
}

export function iconsToSvgPaths(icons: IIcons, mode: GeneratorMode = 'icons') {
  return Object.keys(icons).map((iconId) => labelling.filePathFromIcon(icons[iconId], mode));
}

export function filePathToSVGinJSXSync(filePath: string) {
  const absFilePath = path.resolve(currentTempDir, filePath);
  const svgRaw = fs.readFileSync(absFilePath, { encoding: 'utf8' });
  return transformers.readyForJSX(svgRaw);
}

export async function generateReactComponents(icons: IIcons, mode: GeneratorMode = 'icons') {
  const getTemplateSource = (templateFile: string) =>
    fs.readFile(path.resolve(__dirname, './templates/', templateFile), {
      encoding: 'utf8',
    });
  const templates = {
    entry: await getTemplateSource('entry.tsx.ejs'),
    icon: mode === 'pictograms' ? '' : await getTemplateSource('named-icon.tsx.ejs'),
    pictogramMerged: mode === 'pictograms' ? await getTemplateSource('pictogram-merged.tsx.ejs') : '',
    pictogramSwitched: mode === 'pictograms' ? await getTemplateSource('pictogram-switched.tsx.ejs') : '',
    types: await getTemplateSource(mode === 'pictograms' ? 'pictogram-types.tsx' : 'types.tsx'),
  };
  const firstIcon = Object.values(icons)[0];
  console.log(firstIcon.svgName);

  // Group variants into one ITemplateIcon per generated component.
  //   - Icons mode: each variant has a unique jsxName (e.g. `ArrowUp12`, `ArrowUp16`)
  //     so each one becomes its own component, exactly as before.
  //   - Pictograms mode: all background variants of a pictogram share a single
  //     jsxName (e.g. all of Cone/Light, /Dark, /Orange share `ConePictogram`),
  //     so they collapse into one ITemplateIcon whose `sizes` is the list of
  //     backgrounds (`['light', 'dark', 'orange']`) and `ids` covers all 3.
  const iconsWithVariants = Object.values<ITemplateIcon>(
    Object.keys(icons).reduce((acc: { [name: string]: ITemplateIcon }, iconId) => {
      const groupKey = icons[iconId].jsxName;
      const icon = acc[groupKey] || {
        ids: [],
        sizes: [],
        types: [],
        svgName: icons[iconId].svgName,
        jsxName: icons[iconId].jsxName,
        category: icons[iconId].category,
      };
      icon.ids = _.uniq(icon.ids.concat(icons[iconId].id));
      icon.sizes = _.uniq(icon.sizes.concat(labelling.stripSizePrefix(icons[iconId].size)));
      icon.types = _.uniq(icon.types.concat(icons[iconId].type));

      acc[groupKey] = icon;

      return acc;
    }, {}),
  );

  const templateHelpers = {
    getDefaultSize() {
      return labelling.stripSizePrefix(firstIcon.size);
    },
    getDefaultType() {
      return firstIcon.type;
    },
    iconToComponentName(icon: ITemplateIcon) {
      return `${icon.jsxName}`;
    },
    iconToPropsName(icon: ITemplateIcon) {
      return `${icon.jsxName}Props`;
    },
    iconToReactFileName(icon: ITemplateIcon) {
      return `${icon.jsxName}.tsx`;
    },
    iconToSVGSourceAsJSX(icon: ITemplateIcon, size: string, type: string) {
      // Pick the actual variant SVG file matching this size/type — for icons
      // there's only ever one, but for pictograms each background has its own.
      const variantId =
        icon.ids.find((id) => icons[id].size === labelling.addSizePrefix(size) && icons[id].type === type) ||
        icon.ids[0];
      const variantIcon = icons[variantId];
      const filePath = labelling.filePathFromIcon(
        {
          id: variantIcon.id,
          svgName: variantIcon.svgName,
          jsxName: variantIcon.jsxName,
          size,
          type,
          category: variantIcon.category,
        },
        mode,
      );
      return filePathToSVGinJSXSync(filePath);
    },
    iconHasSizeAndType(icon: ITemplateIcon, size: string, type: string) {
      return icon.ids.some((iconId) => {
        const prefixedSize = labelling.addSizePrefix(size);
        return icons[iconId].size === prefixedSize && icons[iconId].type === type;
      });
    },
    stripExtension(fileName: string) {
      return fileName.replace(/(.*)\.\w+$/, '$1');
    },
    /**
     * Used by the entry template (icons mode only) to decide whether to append
     * `export * from './pictograms'`. We check the working directory because
     * pictograms live in the same package and may have been generated already
     * in a separate run.
     */
    hasPictograms() {
      if (mode === 'pictograms') return false;
      return fs.existsSync(path.resolve(process.cwd(), FILE_PATH_PICTOGRAMS_MANIFEST));
    },
  };

  const prettierOptions = prettier.resolveConfig.sync(process.cwd());
  const componentsOutputDir =
    mode === 'pictograms' ? path.resolve(currentTempDir, FOLDER_NAME_PICTOGRAM_SRC) : path.resolve(currentTempDir, 'src');
  const entryFilePath = path.resolve(currentTempDir, mode === 'pictograms' ? FILE_PATH_PICTOGRAMS_ENTRY : FILE_PATH_ENTRY);
  const typesFilePath = path.resolve(currentTempDir, mode === 'pictograms' ? FILE_PATH_PICTOGRAMS_TYPES : FILE_PATH_TYPES);

  /* Generate Icon/Pictogram Component Modules */
  let mergedCount = 0;
  let switchedCount = 0;
  for (const i in iconsWithVariants) {
    const icon = iconsWithVariants[i];
    try {
      let iconSourceRaw: string;

      if (mode === 'pictograms') {
        // Read each background's processed SVG from the temp dir.
        const svgsByVariant: Record<string, string> = {};
        for (const variantId of icon.ids) {
          const variantIcon = icons[variantId];
          const filePath = path.resolve(currentTempDir, labelling.filePathFromIcon(variantIcon, mode));
          svgsByVariant[variantIcon.size] = await fs.readFile(filePath, { encoding: 'utf8' });
        }

        // Stable, deterministic order with `'light'` placed last. The switched
        // template uses the last entry as the fallback (no `if`-guard), and we
        // want that fallback to match the runtime default of `variant = 'light'`.
        const variantNames = Object.keys(svgsByVariant).sort((a, b) => {
          if (a === 'light') return 1;
          if (b === 'light') return -1;
          return a.localeCompare(b);
        });
        const result = analyzePictogramAlignment(svgsByVariant);

        if (result.aligned === true) {
          // Aligned path: one shared geometry, fill/stroke colors picked from a lookup by variant.
          // Re-merge same-color adjacent paths in the placeholder SVG to recover
          // the size win that was disabled during analysis. This is safe because
          // every varying-color element carries a unique placeholder
          // (`__FUI_FILL_<i>__` / `__FUI_STROKE_<i>__`), so SVGO's `mergePaths`
          // never collapses two placeholder elements together — it only merges
          // adjacent runs of constant-fill paths, which would render identically
          // anyway. Constant-fill elements aren't in the FILLS/STROKES lookup so
          // their disappearance doesn't break the index→color mapping.
          const remergeSvgo = getPictogramRemergeSvgo();
          const { data: remergedPlaceholderSvg } = await remergeSvgo.optimize(result.analysis.placeholderSvg);
          const placeholderJsx = transformers.readyForJSX(remergedPlaceholderSvg as string);
          const jsxBody = injectFillStrokeLookups(placeholderJsx);
          const fillsLiteral = serializeLookup(result.analysis.fillsByVariant);
          const strokesLiteral = serializeLookup(result.analysis.strokesByVariant);
          const hasFills = fillsLiteral !== '{}';
          const hasStrokes = strokesLiteral !== '{}';

          iconSourceRaw = await ejs.render(templates.pictogramMerged, {
            icon,
            jsxBody,
            fillsLiteral,
            strokesLiteral,
            hasFills,
            hasStrokes,
            variants: variantNames,
            ...templateHelpers,
          });
          mergedCount++;
        } else {
          // Unaligned path: inline each variant's SVG body and switch on `variant`.
          // Sub-optimal in size, but keeps the public API uniform regardless of how
          // consistent the source artwork is. Now that we no longer need the
          // per-element correspondence the analyzer relies on (the merge attempt
          // already failed), we can safely run each variant SVG through a
          // `mergePaths`/`collapseGroups` pass to recover the size win that was
          // disabled in `getSvgo` for the analysis stage.
          const remergeSvgo = getPictogramRemergeSvgo();
          const variantBodies: Record<string, string> = {};
          for (const variant of variantNames) {
            const { data: remerged } = await remergeSvgo.optimize(svgsByVariant[variant]);
            variantBodies[variant] = transformers.readyForJSX(remerged as string);
          }
          console.warn(
            `[pictograms] ${icon.jsxName}: variants couldn't be merged (${result.reason}). ` +
              `Falling back to per-variant inlining; \`variant="auto"\` will render the \`light\` body in both color schemes ` +
              `for this pictogram. Consider aligning the variants in Figma to enable full auto support.`,
          );
          iconSourceRaw = await ejs.render(templates.pictogramSwitched, {
            icon,
            variantBodies,
            variants: variantNames,
            ...templateHelpers,
          });
          switchedCount++;
        }
      } else {
        iconSourceRaw = await ejs.render(templates.icon, {
          icon,
          ...templateHelpers,
        });
      }

      const iconSource = prettier.format(iconSourceRaw, {
        ...prettierOptions,
        parser: 'typescript',
      });
      const iconComponentFilePath = path.resolve(componentsOutputDir, templateHelpers.iconToReactFileName(icon));
      await fs.outputFile(iconComponentFilePath, iconSource);
      currentListOfAddedFiles.push(iconComponentFilePath);
    } catch (error) {
      const typeList = icon.types?.join(', ') || '—';
      const sizeList = icon.sizes?.join(', ') || '—';
      console.error(
        `
${chalk.bgRed.white(' ICON GENERATION FAILED ')}
${chalk.bold(icon.jsxName)} (${icon.svgName})
types: ${typeList}
sizes: ${sizeList}
`,
      );
      throw error;
    }
  }

  if (mode === 'pictograms') {
    console.log(
      chalk.dim(
        `[pictograms] Generated ${mergedCount + switchedCount} components ` +
          `(${mergedCount} merged with shared geometry, ${switchedCount} fell back to per-variant inlining).`,
      ),
    );
  }

  /* Generate Entry Module */
  const entrySourceRaw = await ejs.render(templates.entry, {
    icons: iconsWithVariants,
    ...templateHelpers,
  });
  const entrySource = prettier.format(entrySourceRaw, {
    ...prettierOptions,
    parser: 'typescript',
  });
  await fs.outputFile(entryFilePath, entrySource);
  currentListOfAddedFiles.push(entryFilePath);

  /* Generate Type Modules */
  await fs.outputFile(typesFilePath, templates.types);
  currentListOfAddedFiles.push(typesFilePath);
}

export async function getCurrentIconManifest(mode: GeneratorMode = 'icons'): Promise<IIconManifest> {
  const manifestPath = mode === 'pictograms' ? FILE_PATH_PICTOGRAMS_MANIFEST : FILE_PATH_MANIFEST;
  try {
    const { stdout: gitRootDir } = await execa('git', ['rev-parse', '--show-toplevel']);
    const gitRelativePathToManifest = path.relative(gitRootDir, path.resolve(process.cwd(), manifestPath));
    const { stdout: currentManifest } = await execa('git', ['show', `HEAD:${gitRelativePathToManifest}`]);
    return JSON.parse(currentManifest);
  } catch {
    // First-ever pictograms run won't have a manifest in HEAD yet — fall back to
    // an empty manifest rather than crashing.
    return {};
  }
}

export async function generateIconManifest(icons: IIcons, mode: GeneratorMode = 'icons') {
  const manifestPath = mode === 'pictograms' ? FILE_PATH_PICTOGRAMS_MANIFEST : FILE_PATH_MANIFEST;
  const iconManifestFilePath = path.resolve(currentTempDir, manifestPath);
  const iconManifest = iconsToManifest(icons, mode);
  let iconManifestRaw = JSON.stringify(iconManifest);
  const prettierOptions = prettier.resolveConfig.sync(process.cwd());
  iconManifestRaw = prettier.format(iconManifestRaw, {
    ...prettierOptions,
    parser: 'json',
  });
  const previousIconManifest = await getCurrentIconManifest(mode);
  await fs.writeFile(iconManifestFilePath, iconManifestRaw, {
    encoding: 'utf8',
  });
  currentListOfAddedFiles.push(iconManifestFilePath);
  return [previousIconManifest, iconManifest];
}

/**
 * Wipes only the on-disk paths that the given mode owns, then copies the temp dir
 * over the working directory. Crucially, icons-mode runs do NOT touch
 * `pictograms/`, `src/pictograms/`, or `pictograms-manifest.json`, and pictograms-mode
 * runs do NOT touch `icons/`, `src/*.tsx` (top-level), or `manifest.json`. This lets
 * the two generators coexist in the same package.
 */
export async function swapGeneratedFiles(
  previousIconManifest: IIconManifest,
  nextIconManifest: IIconManifest,
  mode: GeneratorMode = 'icons',
): Promise<string[]> {
  const cwd = process.cwd();

  if (mode === 'pictograms') {
    /* Pictograms mode: blow away pictogram-owned paths only. */
    await fs.remove(path.resolve(cwd, FOLDER_NAME_PICTOGRAM_SVGS));
    await fs.remove(path.resolve(cwd, FOLDER_NAME_PICTOGRAM_SRC));
    await fs.remove(path.resolve(cwd, FILE_PATH_PICTOGRAMS_MANIFEST));

    await fs.copy(currentTempDir, cwd);

    return [FOLDER_NAME_PICTOGRAM_SVGS, FOLDER_NAME_PICTOGRAM_SRC, FILE_PATH_PICTOGRAMS_MANIFEST];
  }

  /* Icons mode: collect the icons-owned top-level dirs from both manifests. */
  const generatedFilePaths: string[] = [];
  pushObjLeafNodesToArr(previousIconManifest, generatedFilePaths);
  pushObjLeafNodesToArr(nextIconManifest, generatedFilePaths);
  generatedFilePaths.push(FILE_PATH_ENTRY, FILE_PATH_TYPES);
  const topLevelDirs: string[] = _.uniq(generatedFilePaths.map((filePath) => filePath.replace(/^([\w-]+).*/, '$1')));

  for (const topLevelDir of topLevelDirs) {
    if (topLevelDir === 'src') {
      // Wipe `src/*.tsx` (and any nested non-pictogram subdirs) but preserve `src/pictograms/`.
      const srcDir = path.resolve(cwd, 'src');
      if (await fs.pathExists(srcDir)) {
        const entries = await fs.readdir(srcDir);
        for (const entry of entries) {
          if (entry === 'pictograms') continue;
          await fs.remove(path.join(srcDir, entry));
        }
      }
    } else {
      await fs.remove(path.resolve(cwd, topLevelDir));
    }
  }
  await fs.remove(path.resolve(cwd, FILE_PATH_MANIFEST));

  /* Copy our freshly-generated tree on top of whatever's left. */
  await fs.copy(currentTempDir, cwd);

  return [].concat(topLevelDirs, FILE_PATH_MANIFEST);
}

export async function getGitCustomDiff(touchedPaths: string[], mode: GeneratorMode = 'icons'): Promise<IDiffSummary[]> {
  const { stdout: gitRootDir } = await execa('git', ['rev-parse', '--show-toplevel']);
  /* Stage all changes to tracked files. */
  /* Stage the "intent" to add for all untracked files. */
  await execa('git', ['add', '-f', '--ignore-removal', '--intent-to-add', '--', ...touchedPaths]);
  /* Grab the lines changed per file, as well as the kind of change (D, M, A) */
  const pathspecs = getModePathspecs(mode);
  const [{ stdout: numstatRaw }, { stdout: nameStatRaw }] = await Promise.all([
    execa('git', ['diff', '--numstat', '--no-renames', '--', ...pathspecs]),
    execa('git', ['diff', '--name-status', '--no-renames', '--', ...pathspecs]),
  ]);

  /* Transform the raw stdout to renderable data. */
  const nameStat = nameStatRaw.split('\n').map((line) => line[0]);
  const diffSummaries: IDiffSummary[] = numstatRaw
    .split('\n')
    .map((line) => line.split('\t'))
    .map(([additions, deletions, filePath], i) => {
      const filePathFromCwd = filePath.replace(path.relative(gitRootDir, process.cwd()), '').replace(/^\//, '');

      return {
        status: nameStat[i] || 'M',
        additions: parseInt(additions, 10),
        deletions: parseInt(deletions, 10),
        filePath: filePathFromCwd,
        fullFilePath: filePath,
      };
    });

  /* Undo the staging done above, to ensure an expected git status after this tool has been run. */
  await execa('git', ['reset', 'HEAD', '--', ...pathspecs]);

  return diffSummaries;
}
