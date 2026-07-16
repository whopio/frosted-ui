"use strict";
(() => {
  // src/code.ts
  var ALLOWED_SIZES = [12, 16, 20, 24, 32];
  var PICTOGRAM_BACKGROUNDS = ["light", "dark", "orange"];
  var PICTOGRAM_DIMENSION = 240;
  var SYNC_WORKFLOW_URL = "https://github.com/whopio/frosted-ui/actions/workflows/sync-icons.yml";
  var PICTOGRAM_SYNC_WORKFLOW_URL = "https://github.com/whopio/frosted-ui/actions/workflows/sync-pictograms.yml";
  function normalize(name) {
    return name.replace(/[^a-z0-9]/gi, "").toLowerCase();
  }
  function kebab(name) {
    return name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  var VARIANT_STYLES = [
    { key: "regular", label: "Regular" },
    { key: "filled", label: "Filled" },
    { key: "bold", label: "Bold" },
    { key: "bold-filled", label: "Bold Filled" }
  ];
  function variantStyle(tokens) {
    const bold = tokens.includes("bold");
    const filled = tokens.includes("filled");
    if (bold && filled) return "bold-filled";
    if (bold) return "bold";
    if (filled) return "filled";
    return "regular";
  }
  function baseLabel(name) {
    let s = name.trim();
    let prev;
    do {
      prev = s;
      s = s.replace(/[\s-]*(bold|filled)\s*$/i, "").trim();
    } while (s !== prev);
    return s || name.trim();
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
  function isContainerType(type) {
    return type === "FRAME" || type === "GROUP" || type === "SECTION" || type === "COMPONENT" || type === "COMPONENT_SET" || type === "INSTANCE";
  }
  function hasNestedContainer(node) {
    if (!("children" in node)) return false;
    for (const child of node.children) {
      if (child.visible === false) continue;
      if (isContainerType(child.type)) return true;
      if (hasNestedContainer(child)) return true;
    }
    return false;
  }
  function isSingleShape(variant) {
    const visible = variant.children.filter((c) => c.visible !== false);
    if (visible.length !== 1) return false;
    if (!isShapeType(visible[0].type)) return false;
    if (hasNestedContainer(visible[0])) return false;
    return true;
  }
  function isSinglePictogramLayer(comp) {
    if (hasHiddenDescendant(comp)) return false;
    const visible = comp.children.filter((c) => c.visible !== false);
    return visible.length === 1;
  }
  function hasNonScaleConstraints(node) {
    for (const child of node.children) {
      if (child.visible === false) continue;
      if ("constraints" in child) {
        const con = child.constraints;
        if (con.horizontal !== "SCALE" || con.vertical !== "SCALE") return true;
      }
      if ("children" in child && hasNonScaleConstraints(child)) {
        return true;
      }
    }
    return false;
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
    const families = /* @__PURE__ */ new Map();
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
        const baseKey = tokens.filter((t) => t !== "bold" && t !== "filled").join("-");
        if (baseKey !== "") {
          const style = variantStyle(tokens);
          let fam = families.get(baseKey);
          if (!fam) {
            fam = { display: baseLabel(name), present: /* @__PURE__ */ new Set(), repId: child.id, hasRegular: false };
            families.set(baseKey, fam);
          }
          fam.present.add(style);
          if (style === "regular") {
            fam.display = baseLabel(name);
            fam.repId = child.id;
            fam.hasRegular = true;
          }
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
        const badConstraintsAt = [];
        for (const variant of variants) {
          variantCount += 1;
          const sizeGuess = /size=(\d+)/i.exec(variant.name);
          const structSize = sizeGuess ? Number(sizeGuess[1]) : Number.NaN;
          if (hasHiddenDescendant(variant)) hiddenAt.push({ nodeId: variant.id, size: structSize });
          if (!isSingleShape(variant)) notSingleAt.push({ nodeId: variant.id, size: structSize });
          if (hasNonScaleConstraints(variant)) badConstraintsAt.push({ nodeId: variant.id, size: structSize });
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
          issues.push(sizeScopedIssue("not-single-shape", name, "isn't a single flattened shape", notSingleAt));
        }
        if (badConstraintsAt.length > 0) {
          issues.push(sizeScopedIssue("bad-constraints", name, "isn't set to Scale", badConstraintsAt));
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
    for (const fam of families.values()) {
      const missing = VARIANT_STYLES.filter((s) => !fam.present.has(s.key));
      if (missing.length === 0) continue;
      issues.push({
        severity: "warning",
        rule: "incomplete-set",
        message: `"${fam.display}" is missing ${missing.map((s) => s.label).join(", ")}.`,
        nodeId: fam.repId
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
      kind: "icons",
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
  function parseVariantProps(name) {
    const out = {};
    for (const part of name.split(",")) {
      const idx = part.indexOf("=");
      if (idx === -1) continue;
      const key = part.slice(0, idx).trim().toLowerCase();
      const value = part.slice(idx + 1).trim();
      if (key) out[key] = value;
    }
    return out;
  }
  function isPictogramContainer(node) {
    const isContainerType2 = node.type === "COMPONENT_SET" || node.type === "FRAME" || node.type === "GROUP";
    return isContainerType2 && /^pictograms?$/i.test(node.name.trim());
  }
  function findPictogramsPage() {
    const byName = figma.root.children.find((p) => normalize(p.name) === "pictograms");
    if (byName) return { page: byName, usedFallback: false };
    for (const p of figma.root.children) {
      const found = p.findOne((n) => isPictogramContainer(n));
      if (found) return { page: p, usedFallback: true };
    }
    return { page: figma.currentPage, usedFallback: true };
  }
  function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }
  async function scanPictograms() {
    await figma.loadAllPagesAsync();
    const { page, usedFallback } = findPictogramsPage();
    const issues = [];
    const previewByNode = /* @__PURE__ */ new Map();
    const baseNames = /* @__PURE__ */ new Map();
    const containers = page.findAll((n) => isPictogramContainer(n));
    const insideIds = /* @__PURE__ */ new Set();
    const components = [];
    for (const container of containers) {
      if (!("findAll" in container)) continue;
      const comps = container.findAll((n) => n.type === "COMPONENT");
      for (const comp of comps) {
        if (!insideIds.has(comp.id)) {
          insideIds.add(comp.id);
          components.push(comp);
        }
      }
    }
    const families = /* @__PURE__ */ new Map();
    const seenVariants = /* @__PURE__ */ new Set();
    const backgroundsSeen = /* @__PURE__ */ new Set();
    const compFamilyKey = [];
    let variantCount = 0;
    for (const comp of components) {
      const props = parseVariantProps(comp.name);
      const pictogram = (props.pictogram || "").trim();
      const background = (props.background || "").trim();
      if (!pictogram || !background) {
        issues.push({
          severity: "error",
          rule: "pictogram-empty-name",
          message: `A pictogram variant is named "${comp.name}" (expected "pictogram=Name, background=Light|Dark|Orange").`,
          nodeId: comp.id
        });
        continue;
      }
      variantCount += 1;
      const bgLower = background.toLowerCase();
      backgroundsSeen.add(bgLower);
      if (/\d/.test(pictogram)) {
        issues.push({
          severity: "error",
          rule: "pictogram-number-in-name",
          message: `"${pictogram}" has a number in its name (numbers aren't allowed).`,
          nodeId: comp.id
        });
      }
      if (!PICTOGRAM_BACKGROUNDS.includes(bgLower)) {
        issues.push({
          severity: "error",
          rule: "pictogram-invalid-background",
          message: `"${pictogram}" has background "${background}" (allowed: Light, Dark, Orange).`,
          nodeId: comp.id
        });
      }
      const w = Math.round(comp.width);
      const h = Math.round(comp.height);
      if (w !== PICTOGRAM_DIMENSION || h !== PICTOGRAM_DIMENSION) {
        issues.push({
          severity: "warning",
          rule: "pictogram-dimension",
          message: `"${pictogram}" ${background} is ${w}\xD7${h} (expected ${PICTOGRAM_DIMENSION}\xD7${PICTOGRAM_DIMENSION}).`,
          nodeId: comp.id
        });
      }
      const famKey = normalize(pictogram);
      let fam = families.get(famKey);
      if (!fam) {
        fam = {
          display: pictogram,
          backgrounds: /* @__PURE__ */ new Set(),
          repId: comp.id,
          previewId: comp.id,
          variants: [],
          badConstraints: [],
          notSingle: []
        };
        families.set(famKey, fam);
      }
      fam.backgrounds.add(bgLower);
      if (bgLower === "light") {
        fam.repId = comp.id;
        fam.previewId = comp.id;
        fam.display = pictogram;
      }
      const dupKey = `${famKey}|${bgLower}`;
      if (seenVariants.has(dupKey)) {
        issues.push({
          severity: "error",
          rule: "pictogram-duplicate",
          message: `"${pictogram}" has multiple "${background}" variants.`,
          nodeId: comp.id
        });
      } else {
        seenVariants.add(dupKey);
        if (PICTOGRAM_BACKGROUNDS.includes(bgLower)) {
          fam.variants.push({ bg: bgLower, node: comp });
          if (hasNonScaleConstraints(comp)) fam.badConstraints.push({ bg: bgLower, nodeId: comp.id });
          if (!isSinglePictogramLayer(comp)) fam.notSingle.push({ bg: bgLower, nodeId: comp.id });
        }
      }
      compFamilyKey.push({ compId: comp.id, famKey });
    }
    for (const { compId, famKey } of compFamilyKey) {
      const fam = families.get(famKey);
      if (fam) previewByNode.set(compId, fam.previewId);
    }
    for (const fam of families.values()) {
      const base = kebab(fam.display);
      if (base && !baseNames.has(base)) baseNames.set(base, fam.repId);
    }
    for (const fam of families.values()) {
      const missing = PICTOGRAM_BACKGROUNDS.filter((b) => !fam.backgrounds.has(b));
      if (missing.length > 0) {
        issues.push({
          severity: "warning",
          rule: "pictogram-incomplete-backgrounds",
          message: `"${fam.display}" is missing ${missing.map(capitalize).join(", ")}.`,
          nodeId: fam.repId
        });
      }
    }
    for (const fam of families.values()) {
      if (fam.badConstraints.length === 0) continue;
      const sorted = [...fam.badConstraints].sort(
        (a, b) => PICTOGRAM_BACKGROUNDS.indexOf(a.bg) - PICTOGRAM_BACKGROUNDS.indexOf(b.bg)
      );
      issues.push({
        severity: "error",
        rule: "pictogram-bad-constraints",
        message: `"${fam.display}" isn't set to Scale:`,
        nodeId: fam.repId,
        targets: sorted.map((b) => ({ nodeId: b.nodeId, label: capitalize(b.bg) }))
      });
    }
    for (const fam of families.values()) {
      if (fam.notSingle.length === 0) continue;
      const sorted = [...fam.notSingle].sort(
        (a, b) => PICTOGRAM_BACKGROUNDS.indexOf(a.bg) - PICTOGRAM_BACKGROUNDS.indexOf(b.bg)
      );
      issues.push({
        severity: "error",
        rule: "pictogram-not-single-layer",
        message: `"${fam.display}" isn't a single layer:`,
        nodeId: fam.repId,
        targets: sorted.map((b) => ({ nodeId: b.nodeId, label: capitalize(b.bg) }))
      });
    }
    const allComponents = page.findAllWithCriteria({ types: ["COMPONENT"] });
    const orphans = allComponents.filter((c) => {
      if (insideIds.has(c.id)) return false;
      const props = parseVariantProps(c.name);
      return !!props.pictogram && !!props.background;
    });
    if (orphans.length > 0) {
      issues.push({
        severity: "warning",
        rule: "pictogram-orphan",
        message: `${orphans.length} pictogram component${orphans.length === 1 ? "" : "s"} are not inside a "Pictogram" container and will be skipped.`,
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
    const shapeTargets = [];
    for (const fam of families.values()) {
      if (fam.variants.length >= 2) {
        shapeTargets.push({ name: fam.display, previewId: fam.previewId, variants: fam.variants });
      }
    }
    issues.sort((a, b) => a.severity === b.severity ? 0 : a.severity === "error" ? -1 : 1);
    const errorCount = issues.filter((i) => i.severity === "error").length;
    const warningCount = issues.length - errorCount;
    const result = {
      kind: "pictograms",
      pageName: page.name,
      usedFallbackPage: usedFallback,
      iconCount: families.size,
      variantCount,
      categoryCount: backgroundsSeen.size,
      orphanCount: orphans.length,
      passed: families.size > 0 && errorCount === 0,
      errorCount,
      warningCount,
      issues
    };
    return { result, baseNames, previewByNode, shapeTargets };
  }
  var PICTOGRAM_SHAPE_TAGS = ["path", "circle", "rect", "ellipse", "polygon", "polyline", "line"];
  var PICTOGRAM_GEOM_ATTRS = ["d", "points", "x", "y", "width", "height", "cx", "cy", "r", "rx", "ry", "transform"];
  function normalizeGeometry(value) {
    return value.replace(/-?\d*\.?\d+(?:e-?\d+)?/gi, (m) => String(Math.round(parseFloat(m))));
  }
  function pictogramShapeSignature(svg) {
    const body = svg.replace(/<defs[\s\S]*?<\/defs>/gi, "");
    const re = new RegExp(`<(${PICTOGRAM_SHAPE_TAGS.join("|")})\\b([^>]*?)\\/?>`, "gi");
    const sigs = [];
    let m;
    while ((m = re.exec(body)) !== null) {
      const tag = m[1].toLowerCase();
      const attrs = m[2];
      const parts = [tag];
      for (const attr of PICTOGRAM_GEOM_ATTRS) {
        const am = new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, "i").exec(attrs);
        parts.push(`${attr}=${am ? normalizeGeometry(am[1]) : ""}`);
      }
      sigs.push(parts.join("|"));
    }
    return sigs;
  }
  function sameSignature(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }
  async function runPictogramShapeChecks(targets) {
    const issues = [];
    const BATCH = 8;
    for (let i = 0; i < targets.length; i += BATCH) {
      const slice = targets.slice(i, i + BATCH);
      const results = await Promise.all(
        slice.map(async (t) => {
          try {
            const sigs = await Promise.all(
              t.variants.map(async (v) => ({
                bg: v.bg,
                nodeId: v.node.id,
                sig: pictogramShapeSignature(bytesToString(await v.node.exportAsync({ format: "SVG" })))
              }))
            );
            const ref = sigs.find((s) => s.bg === "light") || sigs[0];
            const differing = sigs.filter((s) => s !== ref && !sameSignature(s.sig, ref.sig));
            if (differing.length === 0) return null;
            return { target: t, refBg: ref.bg, differing };
          } catch {
            return null;
          }
        })
      );
      for (const r of results) {
        if (!r) continue;
        const labels = r.differing.map((d) => capitalize(d.bg)).join(", ");
        issues.push({
          severity: "error",
          rule: "pictogram-mismatched-shapes",
          message: `"${r.target.name}": ${labels} ${r.differing.length === 1 ? "differs" : "differ"} from ${capitalize(r.refBg)}.`,
          previewId: r.target.previewId,
          targets: r.differing.map((d) => ({ nodeId: d.nodeId, label: capitalize(d.bg) }))
        });
      }
    }
    return issues;
  }
  function toCurrentColor(svg) {
    return svg.replace(/\b(fill|stroke)\s*=\s*"(?!none")[^"]*"/gi, '$1="currentColor"');
  }
  async function buildPreviews(ids, recolor) {
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
              const svg = bytesToString(bytes);
              map[id] = recolor ? toCurrentColor(svg) : svg;
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
  async function fetchReleaseDiff(current, kind) {
    const empty = { comparedToVersion: null, error: null, added: [], removed: [] };
    const manifestFile = kind === "pictograms" ? "pictograms-manifest.json" : "manifest.json";
    const toBase = (svgName) => kind === "pictograms" ? svgName.replace(/-(light|dark|orange)-pictogram$/i, "") : svgName.replace(/-\d+$/, "");
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
      const url = version ? `https://cdn.jsdelivr.net/npm/@frosted-ui/icons@${version}/${manifestFile}` : `https://cdn.jsdelivr.net/npm/@frosted-ui/icons/${manifestFile}`;
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
            published.add(toBase(svgName));
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
  async function scanIconsFlow() {
    const { result, baseNames, qualityTargets, previewByNode } = await scan();
    figma.ui.postMessage({ type: "scan-result", kind: "icons", result });
    figma.ui.postMessage({ type: "quality-loading", kind: "icons" });
    const qualityIssues = await runQualityChecks(qualityTargets);
    for (const issue of qualityIssues) {
      const rep = issue.targets && issue.targets[0] && issue.targets[0].nodeId || issue.nodeId;
      if (rep) {
        const preview = previewByNode.get(rep);
        if (preview) issue.previewId = preview;
      }
    }
    figma.ui.postMessage({ type: "quality-result", kind: "icons", issues: qualityIssues });
    const previewIds = /* @__PURE__ */ new Set();
    for (const issue of result.issues) if (issue.previewId) previewIds.add(issue.previewId);
    for (const issue of qualityIssues) if (issue.previewId) previewIds.add(issue.previewId);
    if (previewIds.size > 0) {
      const previews = await buildPreviews([...previewIds], true);
      figma.ui.postMessage({ type: "previews", kind: "icons", previews });
    }
    figma.ui.postMessage({ type: "diff-loading", kind: "icons" });
    const diff = await fetchReleaseDiff(baseNames, "icons");
    figma.ui.postMessage({ type: "diff-result", kind: "icons", diff });
  }
  async function scanPictogramsFlow() {
    const { result, baseNames, shapeTargets } = await scanPictograms();
    figma.ui.postMessage({ type: "scan-result", kind: "pictograms", result });
    figma.ui.postMessage({ type: "quality-loading", kind: "pictograms" });
    const shapeIssues = await runPictogramShapeChecks(shapeTargets);
    figma.ui.postMessage({ type: "quality-result", kind: "pictograms", issues: shapeIssues });
    const previewIds = /* @__PURE__ */ new Set();
    for (const issue of result.issues) if (issue.previewId) previewIds.add(issue.previewId);
    for (const issue of shapeIssues) if (issue.previewId) previewIds.add(issue.previewId);
    if (previewIds.size > 0) {
      const previews = await buildPreviews([...previewIds], false);
      figma.ui.postMessage({ type: "previews", kind: "pictograms", previews });
    }
    figma.ui.postMessage({ type: "diff-loading", kind: "pictograms" });
    const diff = await fetchReleaseDiff(baseNames, "pictograms");
    figma.ui.postMessage({ type: "diff-result", kind: "pictograms", diff });
  }
  async function scanAll() {
    await figma.loadAllPagesAsync();
    await scanIconsFlow();
    await scanPictogramsFlow();
  }
  figma.ui.onmessage = async (msg) => {
    switch (msg.type) {
      case "rescan": {
        await scanAll();
        break;
      }
      case "focus": {
        if (msg.id) await focusNode(msg.id);
        break;
      }
      case "open-sync": {
        figma.openExternal(msg.kind === "pictograms" ? PICTOGRAM_SYNC_WORKFLOW_URL : SYNC_WORKFLOW_URL);
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
    await scanAll();
  })();
})();
