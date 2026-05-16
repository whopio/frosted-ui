import chalk from 'chalk';
import isOnline from 'is-online';
import * as _ from 'lodash';
import { PropertyName } from 'lodash';
import nodeFetch, { Response } from 'node-fetch';
import SVGO from 'svgo';
import { CodedError, ERRORS, GeneratorMode, RequestInitWithRetry } from './types';
import { unmount } from './view';

export function handleError(err, exit = true) {
  unmount();
  console.log('');
  if (err instanceof CodedError) {
    console.error(
      `${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(` ${err.code} `)}
${err.message}
${chalk.dim(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  !(err.hideStack && err.stack) ? err.stack!.replace(/^.*\n/, '') : '',
)}`.trim(),
    );
  } else {
    console.log(`${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(' UNHANDLED ')}\n`);
    console.error(err);
  }

  if (exit) {
    process.exit(1);
  }
}

let currentOnlineCheck: null | Promise<boolean> = null;

const defaultRetry = {
  delay: 1000,
  retries: 2,
};

export function fetch(url: string, fetchOptions: RequestInitWithRetry = {}): Promise<Response> {
  const retryOptions = { ...defaultRetry, ...fetchOptions.retry };
  return new Promise((resolve, reject) => {
    const attemptFetch = (remainingRetries: number) => {
      nodeFetch(url, fetchOptions)
        .then((res) => {
          resolve(res);
        })
        .catch(async (err) => {
          if (remainingRetries > 0) {
            await asyncDelay(retryOptions.delay);
            attemptFetch(--remainingRetries);
          } else {
            if (!currentOnlineCheck) {
              currentOnlineCheck = isOnline();
            }
            const isOn = await currentOnlineCheck;
            currentOnlineCheck = null;
            if (!isOn) {
              reject(
                new CodedError(ERRORS.NETWORK_OFFLINE, 'An internet connection is required to find and render Icons.'),
              );
            } else {
              reject(err);
            }
          }
        });
    };

    attemptFetch(retryOptions.retries);
  });
}

function asyncDelay(timeout: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

export function pushObjLeafNodesToArr(obj: object, arr: string[], accessor: PropertyName[] = []) {
  _.forEach(accessor.length ? _.get(obj, accessor) : obj, (v, k) => {
    if (v == null) return;
    const currentAccessor = accessor.concat(k);
    if (typeof v === 'object') {
      pushObjLeafNodesToArr(obj, arr, currentAccessor);
    }
    if (typeof v === 'string') {
      arr.push(_.get(obj, currentAccessor));
    }
  });
}

const svgoCache: Partial<Record<GeneratorMode, SVGO>> = {};
let pictogramRemergeSvgo: SVGO | null = null;

/**
 * Returns an SVGO instance that runs ONLY the path-merging plugins. Used by
 * the pictograms switched-fallback branch in services.ts to re-merge adjacent
 * same-color paths after `analyzePictogramAlignment` has finished comparing
 * variants. We can't leave `mergePaths`/`collapseGroups` on in `getSvgo`
 * because they collapse different sets of paths in each variant (since each
 * variant has different fills), which destroys the per-element correspondence
 * the alignment analyzer relies on. Once we've decided a pictogram cannot be
 * merged into a single component, though, each variant SVG is rendered
 * independently and we can safely collapse same-color path runs back down.
 */
export function getPictogramRemergeSvgo() {
  if (pictogramRemergeSvgo) return pictogramRemergeSvgo;
  // SVGO 1.x merges this plugins list with its DEFAULT plugin set rather than
  // replacing it, so any default plugin we don't explicitly disable will still
  // run. Two of those defaults are dangerous for us:
  //   - `removeViewBox` strips `viewBox="0 0 240 240"` from the root SVG, which
  //     breaks consumer scaling (renders paths at 240×240 inside whatever box
  //     the consumer sizes the <svg> to, producing visually clipped/offset art).
  //   - `convertPathData` rewrites `d` attributes — at best cosmetic, at worst
  //     applies group transforms to coordinates differently than the first pass
  //     did and shifts paths.
  // We explicitly turn both off here, alongside other defaults that could
  // surprise us, and only enable the few we actually want.
  pictogramRemergeSvgo = new SVGO({
    plugins: [
      { removeViewBox: false },
      { convertPathData: false },
      { cleanupNumericValues: false },
      { convertTransform: false },
      { sortAttrs: false },
      { moveElemsAttrsToGroup: true },
      { moveGroupAttrsToElems: true },
      { collapseGroups: true },
      { mergePaths: true },
    ],
  });
  return pictogramRemergeSvgo;
}

export function getSvgo(mode: GeneratorMode = 'icons') {
  if (svgoCache[mode]) return svgoCache[mode];
  const dataAttr = mode === 'pictograms' ? 'data-fui-pictogram' : 'data-fui-icon';
  // For pictograms we MUST preserve the per-variant element-by-element
  // correspondence so `analyzePictogramAlignment` can decide whether the
  // background variants share geometry. SVGO's `mergePaths` plugin merges
  // adjacent paths that share fill/stroke — which collapses *different sets
  // of paths* in each variant (since each variant has different fills),
  // producing artificial path-count mismatches that prevent merging.
  // `collapseGroups` similarly drops `<g>` wrappers asymmetrically when
  // moved attributes happen to match. Disable both for pictograms so the
  // post-SVGO output preserves the original Figma topology 1:1 across
  // variants. They stay enabled for monochromatic icons where there's only
  // a single variant to reason about.
  const isPictograms = mode === 'pictograms';
  svgoCache[mode] = new SVGO({
    plugins: [
      { removeDoctype: true },
      { removeXMLProcInst: true },
      { removeComments: true },
      { removeMetadata: true },
      { removeXMLNS: false },
      { removeEditorsNSData: true },
      { cleanupAttrs: true },
      { minifyStyles: true },
      { convertStyleToAttrs: true },
      { cleanupIDs: true },
      { removeRasterImages: false },
      { removeUselessDefs: true },
      { cleanupNumericValues: true },
      { cleanupListOfValues: false },
      { convertColors: true },
      { removeUnknownsAndDefaults: true },
      { removeNonInheritableGroupAttrs: true },
      { removeUselessStrokeAndFill: true },
      { removeViewBox: false },
      { cleanupEnableBackground: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { convertShapeToPath: true },
      { moveElemsAttrsToGroup: !isPictograms },
      { moveGroupAttrsToElems: !isPictograms },
      { collapseGroups: !isPictograms },
      { convertPathData: false },
      { convertTransform: true },
      { removeEmptyAttrs: true },
      { removeEmptyContainers: true },
      { mergePaths: !isPictograms },
      { removeUnusedNS: true },
      { sortAttrs: false },
      { removeTitle: true },
      { removeDesc: true },
      { removeDimensions: false },
      { removeStyleElement: false },
      { removeScriptElement: false },
      {
        addAttributesToSVGElement: {
          attributes: [
            {
              [dataAttr]: 'true',
            },
          ],
        },
      },
    ],
  });
  return svgoCache[mode];
}
