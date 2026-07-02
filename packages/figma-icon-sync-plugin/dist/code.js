"use strict";
(() => {
  // src/code.ts
  var ALLOWED_SIZES = [12, 16, 20, 24, 32];
  var SYNC_WORKFLOW_URL = "https://github.com/whopio/frosted-ui/actions/workflows/sync-icons.yml";
  function normalize(name) {
    return name.replace(/[^a-z0-9]/gi, "").toLowerCase();
  }
  function kebab(name) {
    return name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  function bytesToString(bytes) {
    let out = "";
    for (let i = 0; i < bytes.length; i += 1) out += String.fromCharCode(bytes[i]);
    return out;
  }
  function svgDrawsFillAndStroke(svg) {
    const tagRegex = /<(path|rect|circle|ellipse|polygon|polyline|line)\b([^>]*)>/gi;
    let match;
    while ((match = tagRegex.exec(svg)) !== null) {
      const attrs = match[2];
      const fillAttr = /\bfill\s*=\s*"([^"]*)"/i.exec(attrs);
      const strokeAttr = /\bstroke\s*=\s*"([^"]*)"/i.exec(attrs);
      const style = /\bstyle\s*=\s*"([^"]*)"/i.exec(attrs);
      const styleText = style ? style[1] : "";
      const fillStyle = /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(styleText);
      const strokeStyle = /(?:^|;)\s*stroke\s*:\s*([^;]+)/i.exec(styleText);
      const fillVal = (fillAttr ? fillAttr[1] : fillStyle ? fillStyle[1] : "").trim().toLowerCase();
      const strokeVal = (strokeAttr ? strokeAttr[1] : strokeStyle ? strokeStyle[1] : "").trim().toLowerCase();
      const hasFill = fillVal !== "" && fillVal !== "none";
      const hasStroke = strokeVal !== "" && strokeVal !== "none";
      if (hasFill && hasStroke) return true;
    }
    return false;
  }
  function findIconsPage() {
    const target = figma.root.children.find((p) => normalize(p.name) === "icons" || normalize(p.name) === "producticons");
    if (target) return { page: target, usedFallback: false };
    return { page: figma.currentPage, usedFallback: true };
  }
  function isShapeType(type) {
    return type === "VECTOR" || type === "BOOLEAN_OPERATION" || type === "RECTANGLE" || type === "ELLIPSE" || type === "POLYGON" || type === "STAR" || type === "LINE";
  }
  function hasHiddenDescendant(node) {
    if (!("children" in node)) return false;
    for (const child of node.children) {
      if (child.visible === false) return true;
      if (hasHiddenDescendant(child)) return true;
    }
    return false;
  }
  function isSingleShape(variant) {
    const visible = variant.children.filter((c) => c.visible !== false);
    if (visible.length !== 1) return false;
    return isShapeType(visible[0].type);
  }
  function sizeScopedIssue(rule, name, verb, entries) {
    const sorted = [...entries].sort(
      (a, b) => (Number.isNaN(a.size) ? Infinity : a.size) - (Number.isNaN(b.size) ? Infinity : b.size)
    );
    const labels = sorted.map((e) => Number.isNaN(e.size) ? "?" : String(e.size));
    return {
      severity: "warning",
      rule,
      message: `"${name}" ${verb}:`,
      targets: sorted.map((e, i) => ({ nodeId: e.nodeId, label: labels[i] }))
    };
  }
  async function scan() {
    await figma.loadAllPagesAsync();
    const { page, usedFallback } = findIconsPage();
    const iconsFrames = page.findAll((n) => (n.type === "FRAME" || n.type === "GROUP") && n.name === "Icons");
    const issues = [];
    const insideIds = /* @__PURE__ */ new Set();
    const categories = /* @__PURE__ */ new Set();
    const nameGroups = /* @__PURE__ */ new Map();
    const baseNames = /* @__PURE__ */ new Map();
    const qualityTargets = [];
    const previewByNode = /* @__PURE__ */ new Map();
    let iconCount = 0;
    let variantCount = 0;
    for (const frame of iconsFrames) {
      if (!("children" in frame)) continue;
      const category = frame.parent && "name" in frame.parent ? frame.parent.name : "";
      for (const child of frame.children) {
        if (child.type !== "COMPONENT_SET") continue;
        insideIds.add(child.id);
        iconCount += 1;
        categories.add(category);
        const name = child.name;
        if (kebab(name) === "") {
          issues.push({
            severity: "error",
            rule: "empty-name",
            message: `A component set${category ? ` in ${category}` : ""} has an empty or invalid name ("${name}").`,
            nodeId: child.id
          });
        }
        const key = kebab(name);
        if (key !== "") {
          const group = nameGroups.get(key) || [];
          group.push({ name, nodeId: child.id, category });
          nameGroups.set(key, group);
          if (!baseNames.has(key)) baseNames.set(key, child.id);
        }
        if (/[0-9]/.test(name)) {
          issues.push({
            severity: "error",
            rule: "number-in-name",
            message: `"${name}"${category ? ` (${category})` : ""} contains a number.`,
            nodeId: child.id
          });
        }
        const tokens = kebab(name).split("-");
        const boldIdx = tokens.indexOf("bold");
        const filledIdx = tokens.indexOf("filled");
        if (boldIdx !== -1 && filledIdx !== -1 && filledIdx < boldIdx) {
          issues.push({
            severity: "error",
            rule: "modifier-order",
            message: `"${name}" should use "Bold Filled" order, not "Filled Bold".`,
            nodeId: child.id
          });
        }
        const variants = child.children.filter((c) => c.type === "COMPONENT");
        if (variants.length === 0) {
          issues.push({
            severity: "error",
            rule: "no-variants",
            message: `"${name}" has no size variants.`,
            nodeId: child.id
          });
        }
        if (variants.length > 0) {
          qualityTargets.push({ name, nodes: variants });
        }
        const previewVariant = variants.find((v) => /^size=16$/i.test(v.name.trim())) || variants[0];
        if (previewVariant) {
          previewByNode.set(child.id, previewVariant.id);
          for (const v of variants) previewByNode.set(v.id, previewVariant.id);
        }
        const sizeCounts = /* @__PURE__ */ new Map();
        const hiddenAt = [];
        const notSingleAt = [];
        for (const variant of variants) {
          variantCount += 1;
          const sizeGuess = /size=(\d+)/i.exec(variant.name);
          const structSize = sizeGuess ? Number(sizeGuess[1]) : Number.NaN;
          if (hasHiddenDescendant(variant)) hiddenAt.push({ nodeId: variant.id, size: structSize });
          if (!isSingleShape(variant)) notSingleAt.push({ nodeId: variant.id, size: structSize });
          const match = /^size=(\d+)$/i.exec(variant.name.trim());
          if (!match) {
            issues.push({
              severity: "error",
              rule: "invalid-size-label",
              message: `"${name}" has a variant named "${variant.name}" (expected exactly "size=<number>").`,
              nodeId: variant.id
            });
            continue;
          }
          const size = Number(match[1]);
          if (!ALLOWED_SIZES.includes(size)) {
            issues.push({
              severity: "error",
              rule: "disallowed-size",
              message: `"${name}" has size "${match[1]}" (allowed: ${ALLOWED_SIZES.join(", ")}).`,
              nodeId: variant.id
            });
            continue;
          }
          sizeCounts.set(size, (sizeCounts.get(size) || 0) + 1);
          const w = Math.round(variant.width);
          const h = Math.round(variant.height);
          if (w !== size || h !== size) {
            issues.push({
              severity: "warning",
              rule: "size-mismatch",
              message: `"${name}" size=${size} is ${w}\xD7${h} (expected ${size}\xD7${size}).`,
              nodeId: variant.id
            });
          }
        }
        const dupSizes = [...sizeCounts.entries()].filter(([, c]) => c > 1).map(([s]) => s);
        if (dupSizes.length) {
          issues.push({
            severity: "error",
            rule: "duplicate-size",
            message: `"${name}" has multiple variants for size ${dupSizes.sort((a, b) => a - b).join(", ")}.`,
            nodeId: child.id
          });
        }
        const missing = ALLOWED_SIZES.filter((s) => !sizeCounts.has(s));
        if (sizeCounts.size > 0 && missing.length > 0) {
          issues.push({
            severity: "warning",
            rule: "incomplete-sizes",
            message: `"${name}" is missing size ${missing.join(", ")}.`,
            nodeId: child.id
          });
        }
        if (hiddenAt.length > 0) {
          issues.push(sizeScopedIssue("hidden-layers", name, "has hidden layers", hiddenAt));
        }
        if (notSingleAt.length > 0) {
          issues.push(
            sizeScopedIssue("not-single-shape", name, "isn't a single flattened shape", notSingleAt)
          );
        }
      }
    }
    for (const group of nameGroups.values()) {
      if (group.length <= 1) continue;
      const label = group[0].name;
      issues.push({
        severity: "error",
        rule: "duplicate-name",
        message: `"${label}" is defined ${group.length}\xD7`,
        targets: group.map((g, i) => ({
          nodeId: g.nodeId,
          label: `${i + 1}. ${g.category || "uncategorized"}`
        }))
      });
    }
    const allSets = page.findAllWithCriteria({ types: ["COMPONENT_SET"] });
    const orphans = allSets.filter((s) => !insideIds.has(s.id));
    if (orphans.length > 0) {
      issues.push({
        severity: "warning",
        rule: "orphan",
        message: `${orphans.length} component set${orphans.length === 1 ? "" : "s"} are not inside an "Icons" frame and will be skipped.`,
        nodeId: orphans[0].id
      });
    }
    for (const issue of issues) {
      const rep = issue.nodeId || issue.targets && issue.targets[0] && issue.targets[0].nodeId;
      if (rep) {
        const preview = previewByNode.get(rep);
        if (preview) issue.previewId = preview;
      }
    }
    issues.sort((a, b) => a.severity === b.severity ? 0 : a.severity === "error" ? -1 : 1);
    const errorCount = issues.filter((i) => i.severity === "error").length;
    const warningCount = issues.length - errorCount;
    const result = {
      pageName: page.name,
      usedFallbackPage: usedFallback,
      iconCount,
      variantCount,
      categoryCount: categories.size,
      orphanCount: orphans.length,
      passed: iconCount > 0 && errorCount === 0,
      errorCount,
      warningCount,
      issues
    };
    return { result, baseNames, qualityTargets, previewByNode };
  }
  function toCurrentColor(svg) {
    return svg.replace(/\b(fill|stroke)\s*=\s*"(?!none")[^"]*"/gi, '$1="currentColor"');
  }
  async function buildPreviews(ids) {
    const map = {};
    const BATCH = 20;
    for (let i = 0; i < ids.length; i += BATCH) {
      const slice = ids.slice(i, i + BATCH);
      await Promise.all(
        slice.map(async (id) => {
          try {
            const node = await figma.getNodeByIdAsync(id);
            if (node && !node.removed && "exportAsync" in node) {
              const bytes = await node.exportAsync({ format: "SVG" });
              map[id] = toCurrentColor(bytesToString(bytes));
            }
          } catch {
          }
        })
      );
    }
    return map;
  }
  async function runQualityChecks(targets) {
    const issues = [];
    const BATCH = 10;
    for (let i = 0; i < targets.length; i += BATCH) {
      const slice = targets.slice(i, i + BATCH);
      const perIcon = await Promise.all(
        slice.map(async (t) => {
          const flags = await Promise.all(
            t.nodes.map(async (node) => {
              try {
                const bytes = await node.exportAsync({ format: "SVG" });
                if (!svgDrawsFillAndStroke(bytesToString(bytes))) return null;
                const m = /size=(\d+)/i.exec(node.name);
                return { nodeId: node.id, size: m ? Number(m[1]) : Number.NaN };
              } catch {
                return null;
              }
            })
          );
          return flags.filter((f) => f !== null);
        })
      );
      perIcon.forEach((offending, idx) => {
        if (offending.length === 0) return;
        offending.sort((a, b) => a.size - b.size);
        const sizes = offending.map((o) => Number.isNaN(o.size) ? "?" : String(o.size));
        issues.push({
          severity: "error",
          rule: "fill-and-stroke",
          message: `"${slice[idx].name}":`,
          targets: offending.map((o, i2) => ({ nodeId: o.nodeId, label: sizes[i2] }))
        });
      });
    }
    return issues;
  }
  async function fetchReleaseDiff(current) {
    const empty = { comparedToVersion: null, error: null, added: [], removed: [] };
    try {
      let version = null;
      try {
        const rv = await fetch("https://data.jsdelivr.com/v1/packages/npm/@frosted-ui/icons/resolved");
        if (rv.ok) {
          const j = await rv.json();
          version = j.version || null;
        }
      } catch {
      }
      const url = version ? `https://cdn.jsdelivr.net/npm/@frosted-ui/icons@${version}/manifest.json` : "https://cdn.jsdelivr.net/npm/@frosted-ui/icons/manifest.json";
      const res = await fetch(url);
      if (!res.ok) {
        return { ...empty, comparedToVersion: version, error: `Could not load published manifest (${res.status}).` };
      }
      const manifest = await res.json();
      const published = /* @__PURE__ */ new Set();
      for (const type of Object.keys(manifest)) {
        const sizes = manifest[type];
        for (const size of Object.keys(sizes)) {
          for (const svgName of Object.keys(sizes[size])) {
            published.add(svgName.replace(/-\d+$/, ""));
          }
        }
      }
      const added = [];
      for (const [base, nodeId] of current) {
        if (!published.has(base)) added.push({ name: base, nodeId });
      }
      const removed = [];
      for (const base of published) {
        if (!current.has(base)) removed.push({ name: base });
      }
      added.sort((a, b) => a.name.localeCompare(b.name));
      removed.sort((a, b) => a.name.localeCompare(b.name));
      return { comparedToVersion: version, error: null, added, removed };
    } catch (err) {
      return { ...empty, error: `Network error: ${err.message}` };
    }
  }
  async function focusNode(id) {
    const node = await figma.getNodeByIdAsync(id);
    if (!node || node.removed) return;
    let owner = node;
    while (owner && owner.type !== "PAGE") owner = owner.parent;
    if (owner && owner.type === "PAGE" && owner.id !== figma.currentPage.id) {
      await figma.setCurrentPageAsync(owner);
    }
    if ("visible" in node) {
      const scene = node;
      figma.currentPage.selection = [scene];
      figma.viewport.scrollAndZoomIntoView([scene]);
    }
  }
  var SIZE_KEY = "ui-size";
  var DEFAULT_SIZE = { width: 380, height: 600 };
  var MIN_SIZE = { width: 320, height: 400 };
  var MAX_SIZE = { width: 1200, height: 1400 };
  figma.showUI(__html__, { ...DEFAULT_SIZE, themeColors: true });
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, Math.round(value)));
  }
  async function scanAndDiff() {
    const { result, baseNames, qualityTargets, previewByNode } = await scan();
    figma.ui.postMessage({ type: "scan-result", result });
    figma.ui.postMessage({ type: "quality-loading" });
    const qualityIssues = await runQualityChecks(qualityTargets);
    for (const issue of qualityIssues) {
      const rep = issue.targets && issue.targets[0] && issue.targets[0].nodeId || issue.nodeId;
      if (rep) {
        const preview = previewByNode.get(rep);
        if (preview) issue.previewId = preview;
      }
    }
    figma.ui.postMessage({ type: "quality-result", issues: qualityIssues });
    const previewIds = /* @__PURE__ */ new Set();
    for (const issue of result.issues) if (issue.previewId) previewIds.add(issue.previewId);
    for (const issue of qualityIssues) if (issue.previewId) previewIds.add(issue.previewId);
    if (previewIds.size > 0) {
      const previews = await buildPreviews([...previewIds]);
      figma.ui.postMessage({ type: "previews", previews });
    }
    figma.ui.postMessage({ type: "diff-loading" });
    const diff = await fetchReleaseDiff(baseNames);
    figma.ui.postMessage({ type: "diff-result", diff });
  }
  figma.ui.onmessage = async (msg) => {
    switch (msg.type) {
      case "rescan": {
        await scanAndDiff();
        break;
      }
      case "focus": {
        if (msg.id) await focusNode(msg.id);
        break;
      }
      case "open-sync": {
        figma.openExternal(SYNC_WORKFLOW_URL);
        break;
      }
      case "resize": {
        const width = clamp(msg.width || DEFAULT_SIZE.width, MIN_SIZE.width, MAX_SIZE.width);
        const height = clamp(msg.height || DEFAULT_SIZE.height, MIN_SIZE.height, MAX_SIZE.height);
        figma.ui.resize(width, height);
        figma.clientStorage.setAsync(SIZE_KEY, { width, height });
        break;
      }
      case "close": {
        figma.closePlugin();
        break;
      }
    }
  };
  (async () => {
    try {
      const saved = await figma.clientStorage.getAsync(SIZE_KEY);
      if (saved && saved.width && saved.height) {
        figma.ui.resize(
          clamp(saved.width, MIN_SIZE.width, MAX_SIZE.width),
          clamp(saved.height, MIN_SIZE.height, MAX_SIZE.height)
        );
      }
    } catch {
    }
    await scanAndDiff();
  })();
})();
