/// <reference types="@figma/plugin-typings" />

// Keep these in sync with the generator (packages/generate-icon-lib) and the
// GitHub workflow (.github/workflows/sync-icons.yml).
const ALLOWED_SIZES = [12, 16, 20, 24, 32];
const GITHUB_OWNER = 'whopio';
const GITHUB_REPO = 'frosted-ui';
const WORKFLOW_FILE = 'sync-icons.yml';
const WORKFLOW_REF = 'main';
const TOKEN_KEY = 'gh_token';

type Severity = 'error' | 'warning';

interface IssueTarget {
  nodeId: string;
  label: string;
}

interface Issue {
  severity: Severity;
  rule: string;
  message: string;
  nodeId?: string;
  targets?: IssueTarget[];
}

interface ScanResult {
  pageName: string;
  usedFallbackPage: boolean;
  iconCount: number;
  variantCount: number;
  categoryCount: number;
  orphanCount: number;
  canSync: boolean;
  errorCount: number;
  warningCount: number;
  issues: Issue[];
}

// Matches getIconsPage() in generate-icon-lib: strip emoji/whitespace, lowercase.
function normalize(name: string): string {
  return name.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

// Matches lodash kebabCase closely enough for duplicate detection.
function kebab(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function findIconsPage(): { page: PageNode; usedFallback: boolean } {
  const target = figma.root.children.find(
    (p) => normalize(p.name) === 'icons' || normalize(p.name) === 'producticons',
  );
  if (target) return { page: target, usedFallback: false };
  return { page: figma.currentPage, usedFallback: true };
}

async function scan(): Promise<ScanResult> {
  await figma.loadAllPagesAsync();
  const { page, usedFallback } = findIconsPage();

  // The generator collects COMPONENT_SETs that live inside a frame/group named
  // exactly "Icons"; the parent of that frame is the icon's category.
  const iconsFrames = page.findAll(
    (n) => (n.type === 'FRAME' || n.type === 'GROUP') && n.name === 'Icons',
  );

  const issues: Issue[] = [];
  const insideIds = new Set<string>();
  const categories = new Set<string>();
  const nameGroups = new Map<string, { name: string; nodeId: string; category: string }[]>();

  let iconCount = 0;
  let variantCount = 0;

  for (const frame of iconsFrames) {
    if (!('children' in frame)) continue;
    const category = frame.parent && 'name' in frame.parent ? frame.parent.name : '';

    for (const child of frame.children) {
      if (child.type !== 'COMPONENT_SET') continue;
      insideIds.add(child.id);
      iconCount += 1;
      categories.add(category);

      const name = child.name;

      // Duplicate-name tracking (grouped by the generated kebab base name).
      const key = kebab(name);
      const group = nameGroups.get(key) || [];
      group.push({ name, nodeId: child.id, category });
      nameGroups.set(key, group);

      // Rule: no numbers in icon names (they collide with the size suffix and
      // break name parsing downstream, e.g. `Shop16`).
      if (/[0-9]/.test(name)) {
        issues.push({
          severity: 'error',
          rule: 'number-in-name',
          message: `"${name}"${category ? ` (${category})` : ''} contains a number.`,
          nodeId: child.id,
        });
      }

      const variants = child.children.filter((c) => c.type === 'COMPONENT') as ComponentNode[];
      if (variants.length === 0) {
        issues.push({
          severity: 'error',
          rule: 'no-variants',
          message: `"${name}" has no size variants.`,
          nodeId: child.id,
        });
      }

      for (const variant of variants) {
        variantCount += 1;
        const match = /size=(.*)/i.exec(variant.name);

        if (!match) {
          issues.push({
            severity: 'error',
            rule: 'invalid-size-label',
            message: `"${name}" has a variant named "${variant.name}" (expected "size=…").`,
            nodeId: variant.id,
          });
          continue;
        }

        const label = match[1].trim();
        const size = Number(label);

        if (!Number.isInteger(size) || !ALLOWED_SIZES.includes(size)) {
          issues.push({
            severity: 'error',
            rule: 'disallowed-size',
            message: `"${name}" has size "${label}" (allowed: ${ALLOWED_SIZES.join(', ')}).`,
            nodeId: variant.id,
          });
          continue;
        }

        const w = Math.round(variant.width);
        const h = Math.round(variant.height);
        if (w !== size || h !== size) {
          issues.push({
            severity: 'warning',
            rule: 'size-mismatch',
            message: `"${name}" size=${size} is ${w}×${h} (expected ${size}×${size}).`,
            nodeId: variant.id,
          });
        }
      }
    }
  }

  // Duplicate names.
  for (const group of nameGroups.values()) {
    if (group.length <= 1) continue;
    const label = group[0].name;
    issues.push({
      severity: 'error',
      rule: 'duplicate-name',
      message: `"${label}" is defined ${group.length}×`,
      targets: group.map((g, i) => ({
        nodeId: g.nodeId,
        label: `${i + 1}. ${g.category || 'uncategorized'}`,
      })),
    });
  }

  // Orphan component sets on the page that won't be picked up by the generator.
  const allSets = page.findAllWithCriteria({ types: ['COMPONENT_SET'] });
  const orphans = allSets.filter((s) => !insideIds.has(s.id));
  if (orphans.length > 0) {
    issues.push({
      severity: 'warning',
      rule: 'orphan',
      message: `${orphans.length} component set${
        orphans.length === 1 ? '' : 's'
      } are not inside an "Icons" frame and will be skipped.`,
      nodeId: orphans[0].id,
    });
  }

  // Order: errors first, then warnings.
  issues.sort((a, b) => (a.severity === b.severity ? 0 : a.severity === 'error' ? -1 : 1));

  const errorCount = issues.filter((i) => i.severity === 'error').length;
  const warningCount = issues.length - errorCount;

  return {
    pageName: page.name,
    usedFallbackPage: usedFallback,
    iconCount,
    variantCount,
    categoryCount: categories.size,
    orphanCount: orphans.length,
    canSync: iconCount > 0 && errorCount === 0,
    errorCount,
    warningCount,
    issues,
  };
}

async function triggerSync(
  token: string,
): Promise<{ ok: boolean; status: number; message: string }> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/workflows/${WORKFLOW_FILE}/dispatches`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ref: WORKFLOW_REF }),
    });

    if (res.status === 204) {
      return { ok: true, status: 204, message: 'Workflow triggered.' };
    }

    let message = `GitHub API error (${res.status}).`;
    try {
      const body = (await res.json()) as { message?: string };
      if (body && body.message) message = body.message;
    } catch {
      // ignore body parse failures
    }
    if (res.status === 401) message = 'Unauthorized — check your token.';
    if (res.status === 403) message = 'Forbidden — token needs Actions: write on whopio/frosted-ui.';
    if (res.status === 404) message = 'Not found — token lacks repo access or workflow is missing.';
    return { ok: false, status: res.status, message };
  } catch (err) {
    return { ok: false, status: 0, message: `Network error: ${(err as Error).message}` };
  }
}

async function focusNode(id: string): Promise<void> {
  const node = await figma.getNodeByIdAsync(id);
  if (!node || node.removed) return;

  let owner: BaseNode | null = node;
  while (owner && owner.type !== 'PAGE') owner = owner.parent;
  if (owner && owner.type === 'PAGE' && owner.id !== figma.currentPage.id) {
    await figma.setCurrentPageAsync(owner as PageNode);
  }
  if ('visible' in node) {
    const scene = node as SceneNode;
    figma.currentPage.selection = [scene];
    figma.viewport.scrollAndZoomIntoView([scene]);
  }
}

figma.showUI(__html__, { width: 380, height: 600, themeColors: true });

figma.ui.onmessage = async (msg: { type: string; token?: string; id?: string }) => {
  switch (msg.type) {
    case 'rescan': {
      const result = await scan();
      figma.ui.postMessage({ type: 'scan-result', result });
      break;
    }
    case 'save-token': {
      const token = (msg.token || '').trim();
      if (token) {
        await figma.clientStorage.setAsync(TOKEN_KEY, token);
      } else {
        await figma.clientStorage.deleteAsync(TOKEN_KEY);
      }
      figma.ui.postMessage({ type: 'token-status', hasToken: !!token });
      break;
    }
    case 'get-token': {
      const token = await figma.clientStorage.getAsync(TOKEN_KEY);
      figma.ui.postMessage({ type: 'token-status', hasToken: !!token });
      break;
    }
    case 'trigger': {
      const token = await figma.clientStorage.getAsync(TOKEN_KEY);
      if (!token) {
        figma.ui.postMessage({
          type: 'sync-result',
          ok: false,
          message: 'No GitHub token saved.',
        });
        break;
      }
      figma.ui.postMessage({ type: 'sync-pending' });
      const result = await triggerSync(token);
      figma.ui.postMessage({ type: 'sync-result', ...result });
      break;
    }
    case 'focus': {
      if (msg.id) await focusNode(msg.id);
      break;
    }
    case 'close': {
      figma.closePlugin();
      break;
    }
  }
};

(async () => {
  const token = await figma.clientStorage.getAsync(TOKEN_KEY);
  figma.ui.postMessage({ type: 'token-status', hasToken: !!token });
  const result = await scan();
  figma.ui.postMessage({ type: 'scan-result', result });
})();
