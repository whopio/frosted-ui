import * as React from 'react';

/**
 * Accessories for the AgentAvatar's fixed minifig head — a curated set of
 * the most iconic real LEGO pieces redrawn as flat vector silhouettes:
 *
 * hair (3901, the first male hair piece), pigtails (3625, the original
 * female piece), beanie, cap (3624), cowboy hat (3629), top hat (3878),
 * crown, the 1978 Classic Space helmet (193), a headset, round glasses,
 * shades, a pirate eyepatch, a handlebar moustache, and a chin-curtain
 * beard.
 *
 * Each accessory is a single inline SVG drawn in a 0–100 viewBox mapped
 * onto the avatar box, with overflow visible so headgear can poke above it
 * (like the badge, accessories are unclipped). Paths are hand-drawn against
 * the lego-head geometry: head box x 7.5–92.5 / y 17–88 with corner radius
 * 15, stud x 29.5–70.5 / y 2–17, and — after the face fit (s=1, dy=0.05) —
 * eyes at (37, 47) and (63, 47), mouth around y 58–72. Headgear covers the
 * stud, exactly like the real pieces mount. Molded plastic is always the
 * theme-aware near-black ink, like the real parts — deliberately not
 * accent-colored.
 *
 * Two anchor layers (see BotAvatarProps):
 * - face accessories (eyewear, facial hair) ride the face motion — they
 *   follow gaze and drift like something worn on the face;
 * - body accessories (hair and headgear) sit between the silhouette and the
 *   face — they breathe with the body and stay put when the eyes move.
 */

const agentAvatarAccessoriesList = [
  'hair',
  'pigtails',
  'beanie',
  'cap',
  'cowboy-hat',
  'top-hat',
  'crown',
  'space-helmet',
  'headset',
  'glasses',
  'sunglasses',
  'eyepatch',
  'moustache',
  'beard',
] as const;
type AgentAvatarAccessory = (typeof agentAvatarAccessoriesList)[number];

/** Molded-plastic black — themed in bot-avatar.css. */
const INK = 'var(--bot-avatar-accessory-ink)';

const AccessorySvg = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 100 100"
    aria-hidden="true"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', display: 'block' }}
  >
    {children}
  </svg>
);

/* ------------------------------------------------------------------ hair */

/** Classic swept side-part hair (3901): one silhouette — a low cap hugging
 * the head, fringe swept from a left part down toward the right temple,
 * sideburns following the head edge. */
const Hair = () => (
  <AccessorySvg>
    <path
      fill={INK}
      d="M 6 52
         L 6 26
         C 6 6, 20 0, 36 0
         L 64 0
         C 80 0, 94 6, 94 26
         L 94 52
         L 86.5 52
         L 86.5 35
         C 78 39, 56 34, 33 29.5
         C 26 28, 18 29.5, 13.5 33.5
         L 13.5 52
         Z"
    />
  </AccessorySvg>
);

/** Pigtails (3625, the original 1975 female piece): a bob helmet with
 * straight bangs and hair curtains at the sides, plus a puff sticking out
 * over each ear — drawn as one merged silhouette. */
const Pigtails = () => (
  <AccessorySvg>
    <path
      fill={INK}
      d="M 6 56
         L 6 26
         C 6 5, 22 0, 50 0
         C 78 0, 94 5, 94 26
         L 94 56
         L 85.5 56
         L 85.5 34
         C 62 36.5, 38 36.5, 14.5 34
         L 14.5 56
         Z"
    />
    <circle fill={INK} cx="0.5" cy="38" r="11" />
    <circle fill={INK} cx="99.5" cy="38" r="11" />
  </AccessorySvg>
);

/* -------------------------------------------------------------- headgear */

/** Knit beanie: a soft dome tucked into a folded cuff that hugs the
 * forehead, with a pompom on top. */
const Beanie = () => (
  <AccessorySvg>
    <circle fill={INK} cx="50" cy="-2" r="6" />
    <path fill={INK} d="M 9 27 C 9 4, 26 -1, 50 -1 C 74 -1, 91 4, 91 27 Z" />
    <rect fill={INK} x="5.5" y="22.5" width="89" height="10" rx="5" />
  </AccessorySvg>
);

/** Baseball cap (3624 family): a low dome sitting on the head with a
 * button, brim pointing to the side — the unmistakable flat-illustration
 * cap silhouette. */
const Cap = () => (
  <AccessorySvg>
    <path fill={INK} d="M 9 29.5 C 9 5, 26 0.5, 50 0.5 C 74 0.5, 91 5, 91 29.5 Z" />
    <circle fill={INK} cx="50" cy="1" r="3.2" />
    <rect fill={INK} x="50" y="23" width="55" height="8" rx="4" />
  </AccessorySvg>
);

/** Cowboy hat (3629, on minifigs since before they had arms): a creased
 * crown and a wide brim that swoops up at the tips. */
const CowboyHat = () => (
  <AccessorySvg>
    <path
      fill={INK}
      d="M 31 27
         L 33 5
         C 33.5 0, 38 -1.5, 41 0.5
         L 50 4
         L 59 0.5
         C 62 -1.5, 66.5 0, 67 5
         L 69 27
         Z"
    />
    <path
      fill={INK}
      d="M -2 13
         C 1 26, 20 31.5, 50 31.5
         C 80 31.5, 99 26, 102 13
         C 101.5 28, 80 41.5, 50 41.5
         C 20 41.5, -1.5 28, -2 13
         Z"
    />
  </AccessorySvg>
);

/** Top hat (3878): a tall crown with a gentle outward flare toward the
 * top, over a rounded brim resting where the stud meets the head. */
const TopHat = () => (
  <AccessorySvg>
    <path
      fill={INK}
      d="M 28 -6.5
         Q 28 -9, 30.5 -9
         L 69.5 -9
         Q 72 -9, 72 -6.5
         L 70 14
         L 30 14
         Z"
    />
    <rect fill={INK} x="16" y="12" width="68" height="7.5" rx="3.75" />
  </AccessorySvg>
);

/** Three-point crown with orbs on the tips, sitting where the stud is
 * (royalty doesn't show studs). */
const Crown = () => (
  <AccessorySvg>
    <path fill={INK} d="M 25 12 L 25 -3.5 L 38.5 3.5 L 50 -7 L 61.5 3.5 L 75 -3.5 L 75 12 Z" />
    <circle fill={INK} cx="25" cy="-4" r="2.6" />
    <circle fill={INK} cx="50" cy="-7.5" r="2.6" />
    <circle fill={INK} cx="75" cy="-4" r="2.6" />
    <rect fill={INK} x="24" y="10" width="52" height="7" rx="3.5" />
  </AccessorySvg>
);

/** The 1978 Classic Space helmet (193): a shell enclosing the whole head
 * with a rounded face window — the face stays fully visible through the
 * opening. Benny would approve. */
const SpaceHelmet = () => (
  <AccessorySvg>
    <path
      fill={INK}
      fillRule="evenodd"
      d="M 34 1
         L 66 1
         C 85 1, 96 11, 96 30
         L 96 70
         C 96 84, 87.5 92, 73 92
         L 27 92
         C 12.5 92, 4 84, 4 70
         L 4 30
         C 4 11, 15 1, 34 1
         Z
         M 28 20.5
         Q 12 20.5, 12 36.5
         L 12 68
         Q 12 84, 28 84
         L 72 84
         Q 88 84, 88 68
         L 88 36.5
         Q 88 20.5, 72 20.5
         Z"
    />
  </AccessorySvg>
);

/** Headset: a band arcing over the crown into ear cups that hug the head
 * edges, with a mic boom curling toward the mouth. The support-agent
 * special. */
const Headset = () => (
  <AccessorySvg>
    <path
      fill="none"
      stroke={INK}
      strokeWidth="5.5"
      strokeLinecap="round"
      d="M 8.5 46 C 8.5 9, 28 3.5, 50 3.5 C 72 3.5, 91.5 9, 91.5 46"
    />
    <rect fill={INK} x="2" y="39" width="12" height="24" rx="5.5" />
    <rect fill={INK} x="86" y="39" width="12" height="24" rx="5.5" />
    <path fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" d="M 9 60 Q 11.5 74, 29 73" />
    <circle fill={INK} cx="32" cy="72.8" r="4" />
  </AccessorySvg>
);

/* --------------------------------------------------------------- eyewear */

/** Round spectacles: ring lenses centered on the eyes (which stay visible
 * and expressive through them), a bridge over the nose, temple arms out to
 * the head edges. */
const Glasses = () => (
  <AccessorySvg>
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 25.5 44 L 9 41.5" />
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 74.5 44 L 91 41.5" />
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 48.5 44.5 Q 50 42.5, 51.5 44.5" />
    <circle fill="none" stroke={INK} strokeWidth="3.2" cx="37" cy="47" r="11.5" />
    <circle fill="none" stroke={INK} strokeWidth="3.2" cx="63" cy="47" r="11.5" />
  </AccessorySvg>
);

/** Browline shades: a straight top bar with tapered lenses hanging from
 * it — the eyes disappear behind them, so the mouth carries the
 * expression while they're on. */
const Sunglasses = () => (
  <AccessorySvg>
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 24 42.5 L 9 40.5" />
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 76 42.5 L 91 40.5" />
    <rect fill={INK} x="23" y="40.5" width="54" height="4.5" rx="2.25" />
    <path fill={INK} d="M 25.5 44 L 48.5 44 L 47.5 53 Q 46.8 58.5, 41 58.5 L 33 58.5 Q 27 58.5, 26.4 52.5 Z" />
    <path fill={INK} d="M 74.5 44 L 51.5 44 L 52.5 53 Q 53.2 58.5, 59 58.5 L 67 58.5 Q 73 58.5, 73.6 52.5 Z" />
  </AccessorySvg>
);

/** Pirate eyepatch (straight off the classic 1989 pirate head print): a
 * patch over the right eye with a strap rising across the forehead. The
 * left eye and the mouth carry the expression. */
const Eyepatch = () => (
  <AccessorySvg>
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 8.5 45 L 91.5 37.5" />
    <rect fill={INK} x="54" y="38" width="18" height="17.5" rx="6" transform="rotate(-5 63 46.75)" />
  </AccessorySvg>
);

/* ----------------------------------------------------------- facial hair */

/** Handlebar moustache: one silhouette, thick under the nose and thinning
 * into upward-curled tips — sitting between the eyes and the mouth, so the
 * smile stays visible below it. */
const Moustache = () => (
  <AccessorySvg>
    <path
      fill={INK}
      d="M 50 58.5
         C 46 54.5, 39.5 53.5, 34 55
         C 27.5 56.8, 23.5 61.5, 24.5 66
         C 25 68.2, 27.8 68, 29 66
         C 30.8 63, 34.5 61.2, 39.5 61.8
         C 43.5 62.3, 47.5 62.3, 50 60.6
         C 52.5 62.3, 56.5 62.3, 60.5 61.8
         C 65.5 61.2, 69.2 63, 71 66
         C 72.2 68, 75 68.2, 75.5 66
         C 76.5 61.5, 72.5 56.8, 66 55
         C 60.5 53.5, 54 54.5, 50 58.5
         Z"
    />
  </AccessorySvg>
);

/** Chin-curtain beard (the pirate-captain classic): one U-shaped
 * silhouette following the head's bottom corners — sideburn chops into a
 * chin bar, with the mouth fully visible inside the frame, so a bearded
 * agent still smiles and frowns. */
const Beard = () => (
  <AccessorySvg>
    <path
      fill={INK}
      d="M 10 48
         L 10 71
         Q 10 86, 25 86
         L 75 86
         Q 90 86, 90 71
         L 90 48
         L 80 48
         L 80 67
         Q 80 76, 70.5 76
         L 29.5 76
         Q 20 76, 20 67
         L 20 48
         Z"
    />
  </AccessorySvg>
);

/** The two anchor layers for an accessory (either may be absent). */
const getAgentAvatarAccessoryLayers = (
  accessory: AgentAvatarAccessory,
): { body?: React.ReactNode; face?: React.ReactNode } => {
  switch (accessory) {
    case 'hair':
      return { body: <Hair /> };
    case 'pigtails':
      return { body: <Pigtails /> };
    case 'beanie':
      return { body: <Beanie /> };
    case 'cap':
      return { body: <Cap /> };
    case 'cowboy-hat':
      return { body: <CowboyHat /> };
    case 'top-hat':
      return { body: <TopHat /> };
    case 'crown':
      return { body: <Crown /> };
    case 'space-helmet':
      return { body: <SpaceHelmet /> };
    case 'headset':
      return { body: <Headset /> };
    case 'glasses':
      return { face: <Glasses /> };
    case 'sunglasses':
      return { face: <Sunglasses /> };
    case 'eyepatch':
      return { face: <Eyepatch /> };
    case 'moustache':
      return { face: <Moustache /> };
    case 'beard':
      return { face: <Beard /> };
  }
};

export { agentAvatarAccessoriesList, getAgentAvatarAccessoryLayers };
export type { AgentAvatarAccessory };
