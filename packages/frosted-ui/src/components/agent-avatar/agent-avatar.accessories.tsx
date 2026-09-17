import * as React from 'react';

/**
 * Accessories for the AgentAvatar's fixed minifig head — a curated set of
 * the most iconic real LEGO pieces redrawn as flat vector illustrations:
 *
 * hair (3901, the first male hair piece), an afro, a mohawk, pigtails
 * (3625, the original female piece), beanie, cap (3624), propeller cap,
 * police cap, construction hard hat (3833), chef's toque (3898), cowboy
 * hat (3629), top hat (3878), graduation mortarboard, party hat, santa
 * hat, crown, viking helmet, the 1978 Classic Space helmet (193), a
 * headset, round glasses, shades, a pirate eyepatch, a handlebar
 * moustache, and a chin-curtain beard.
 *
 * Each accessory is a single inline SVG drawn in a 0–100 viewBox mapped
 * onto the avatar box, with overflow visible so headgear can poke above it
 * (like the badge, accessories are unclipped). Paths are hand-drawn against
 * the lego-head geometry: head box x 7.5–92.5 / y 17–88 with corner radius
 * 15, stud x 29.5–70.5 / y 2–17, and — after the face fit (s=1, dy=0.05) —
 * eyes at (37, 47) and (63, 47), mouth around y 58–72. Headgear covers the
 * stud, exactly like the real pieces mount.
 *
 * Colors follow molded-plastic logic: black pieces use the theme-aware ink
 * (so they survive dark mode), while colored pieces use fixed LEGO-plastic
 * tones — red cap and beanie, gold crown, brown cowboy hat, white space
 * helmet — that hold up on any avatar accent and both themes. Hair pieces
 * are molded in browns, like the real parts bins.
 *
 * Two anchor layers (see BotAvatarProps):
 * - face accessories (eyewear, facial hair) ride the face motion — they
 *   follow gaze and drift like something worn on the face;
 * - body accessories (hair and headgear) sit between the silhouette and the
 *   face — they breathe with the body and stay put when the eyes move.
 */

const agentAvatarAccessoriesList = [
  'hair',
  'afro',
  'mohawk',
  'pigtails',
  'beanie',
  'cap',
  'propeller-cap',
  'police-cap',
  'hard-hat',
  'chef-hat',
  'cowboy-hat',
  'top-hat',
  'graduation-cap',
  'party-hat',
  'santa-hat',
  'crown',
  'viking-helmet',
  'space-helmet',
  'headset',
  'glasses',
  'sunglasses',
  'eyepatch',
  'moustache',
  'beard',
] as const;
type AgentAvatarAccessory = (typeof agentAvatarAccessoriesList)[number];

/** Molded black plastic — theme-aware (lightens on dark backgrounds). */
const INK = 'var(--bot-avatar-accessory-ink)';
/** Fixed LEGO-plastic tones, chosen to read on both themes and on any
 * avatar accent color. */
const RED = '#c22f1e';
const RED_DARK = '#9a2113';
const GOLD = '#eab30f';
const GOLD_DARK = '#c98f0a';
const BROWN = '#8a5a33';
const BROWN_DARK = '#5e3c1f';
const HAIR_BROWN = '#5b3a21';
const HAIR_AUBURN = '#8a4b2a';
const BEARD_BROWN = '#503018';
const PLASTIC_WHITE = '#e7eaee';
const PLASTIC_WHITE_EDGE = '#b3bac3';
const SILVER = '#9ba3ac';
const NAVY = '#34495e';
const STEEL = '#78828d';
const STEEL_DARK = '#59626c';
const TEAL = '#1d8f8f';

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
 * sideburns following the head edge. Molded in brown, with a soft shine
 * along the crown. */
const Hair = () => (
  <AccessorySvg>
    <path
      fill={HAIR_BROWN}
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
    <path fill="none" stroke="#7d5433" strokeWidth="3.5" strokeLinecap="round" d="M 19 12 C 26 5.5, 38 3.5, 48 4.5" />
  </AccessorySvg>
);

/** Afro: a proud cloud of hair built from merged circles, framing the
 * whole top of the head down past the ears. */
const Afro = () => (
  <AccessorySvg>
    <circle fill={HAIR_BROWN} cx="50" cy="7" r="31" />
    <circle fill={HAIR_BROWN} cx="17" cy="21" r="17" />
    <circle fill={HAIR_BROWN} cx="83" cy="21" r="17" />
    <circle fill={HAIR_BROWN} cx="31" cy="-5" r="16" />
    <circle fill={HAIR_BROWN} cx="69" cy="-5" r="16" />
    <path fill={HAIR_BROWN} d="M 4 21 L 96 21 L 96 34 Q 73 28, 50 28 Q 27 28, 4 34 Z" />
  </AccessorySvg>
);

/** Mohawk: a punk crest of spikes running along the crown where the stud
 * would be — molded in defiant red, obviously. */
const Mohawk = () => (
  <AccessorySvg>
    <path
      fill={RED}
      d="M 28 16
         L 34 -15
         L 41 7
         L 49 -20
         L 57 7
         L 64 -15
         L 70 12
         L 72 16
         Z"
    />
  </AccessorySvg>
);

/** Pigtails (3625, the original 1975 female piece): a bob helmet with
 * straight bangs and hair curtains at the sides, plus a puff sticking out
 * over each ear — cinched with little red hair ties. */
const Pigtails = () => (
  <AccessorySvg>
    <path
      fill={HAIR_AUBURN}
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
    <circle fill={HAIR_AUBURN} cx="0.5" cy="38" r="11" />
    <circle fill={HAIR_AUBURN} cx="99.5" cy="38" r="11" />
    <rect fill={RED} x="8" y="31.5" width="4.5" height="13" rx="2.25" />
    <rect fill={RED} x="87.5" y="31.5" width="4.5" height="13" rx="2.25" />
    <path fill="none" stroke="#a86238" strokeWidth="3.5" strokeLinecap="round" d="M 22 10.5 C 30 5, 42 3.5, 52 4.5" />
  </AccessorySvg>
);

/* -------------------------------------------------------------- headgear */

/** Knit beanie: a red dome tucked into a darker folded cuff, topped with a
 * white pompom. Rib ticks on the cuff sell the knit. */
const Beanie = () => (
  <AccessorySvg>
    <circle fill={PLASTIC_WHITE} cx="50" cy="-2" r="6" />
    <path fill={RED} d="M 9 27 C 9 4, 26 -1, 50 -1 C 74 -1, 91 4, 91 27 Z" />
    <rect fill={RED_DARK} x="5.5" y="22.5" width="89" height="10" rx="5" />
    <path
      fill="none"
      stroke="#7c1a0e"
      strokeWidth="2"
      strokeLinecap="round"
      d="M 26 25 L 25 30.5 M 38 25.5 L 37.5 31 M 50 25.5 L 50 31 M 62 25.5 L 62.5 31 M 74 25 L 75 30.5"
    />
  </AccessorySvg>
);

/** Baseball cap (3624 family): a red dome sitting on the head with a
 * center seam and button, brim pointing to the side — the unmistakable
 * flat-illustration cap silhouette. */
const Cap = () => (
  <AccessorySvg>
    <path fill={RED} d="M 9 29.5 C 9 5, 26 0.5, 50 0.5 C 74 0.5, 91 5, 91 29.5 Z" />
    <path
      fill="none"
      stroke={RED_DARK}
      strokeWidth="1.8"
      d="M 50 1 L 50 29.5 M 28.5 3.5 C 24 10, 22.5 18, 22.5 29.5 M 71.5 3.5 C 76 10, 77.5 18, 77.5 29.5"
    />
    <circle fill={PLASTIC_WHITE} cx="50" cy="1" r="3.2" />
    <rect fill={RED_DARK} x="50" y="23" width="55" height="8" rx="4" />
  </AccessorySvg>
);

/** Propeller cap: a paneled beanie with a spinning propeller on a stalk.
 * Maximum whimsy per square pixel. */
const PropellerCap = () => (
  <AccessorySvg>
    <ellipse fill={GOLD} cx="33" cy="-5.5" rx="14" ry="4.2" />
    <ellipse fill={TEAL} cx="67" cy="-5.5" rx="14" ry="4.2" />
    <rect fill={INK} x="48.5" y="-6" width="3" height="10" rx="1.5" />
    <circle fill={INK} cx="50" cy="-5.5" r="2.8" />
    <path fill={RED} d="M 11 28 C 11 6, 27 1.5, 50 1.5 C 73 1.5, 89 6, 89 28 Z" />
    <path
      fill="none"
      stroke={RED_DARK}
      strokeWidth="1.8"
      d="M 50 2 L 50 28 M 30 4.5 C 25.5 10.5, 24 18, 24 28 M 70 4.5 C 74.5 10.5, 76 18, 76 28"
    />
  </AccessorySvg>
);

/** Police cap (the white-and-navy town classic): a high navy crown with a
 * gold badge and a black visor bowing over the forehead. */
const PoliceCap = () => (
  <AccessorySvg>
    <path fill={NAVY} d="M 9 25 C 9 8, 16 0.5, 30 0.5 L 70 0.5 C 84 0.5, 91 8, 91 25 Z" />
    <circle fill={GOLD} cx="50" cy="13" r="4" />
    <path fill={INK} d="M 9 23.5 C 25 26.5, 75 26.5, 91 23.5 C 82 34, 18 34, 9 23.5 Z" />
  </AccessorySvg>
);

/** Construction hard hat (3833): a yellow dome with a center reinforcement
 * ridge and a full-wrap brim. */
const HardHat = () => (
  <AccessorySvg>
    <rect fill={GOLD_DARK} x="42.5" y="-3.5" width="15" height="12" rx="6" />
    <path fill={GOLD} d="M 11 26 C 11 5, 27 0.5, 50 0.5 C 73 0.5, 89 5, 89 26 Z" />
    <rect fill={GOLD} x="3.5" y="23" width="93" height="8.5" rx="4.25" />
    <path fill="none" stroke={GOLD_DARK} strokeWidth="1.8" d="M 4.5 30.5 L 95.5 30.5" />
  </AccessorySvg>
);

/** Chef's toque (3898): a puffy white cloud of a hat gathered into a
 * straight band. */
const ChefHat = () => (
  <AccessorySvg>
    <g fill={PLASTIC_WHITE} stroke={PLASTIC_WHITE_EDGE} strokeWidth="1.5">
      <path
        d="M 24 20
           L 24 4
           C 16 2, 14 -8, 21 -12
           C 25 -14.5, 30 -13.5, 32.5 -10.5
           C 33.5 -18, 44 -21.5, 50 -16.5
           C 56 -21.5, 66.5 -18, 67.5 -10.5
           C 70 -13.5, 75 -14.5, 79 -12
           C 86 -8, 84 2, 76 4
           L 76 20
           Z"
      />
    </g>
    <path fill="none" stroke={PLASTIC_WHITE_EDGE} strokeWidth="1.5" d="M 24 13.5 L 76 13.5" />
  </AccessorySvg>
);

/** Cowboy hat (3629, on minifigs since before they had arms): a creased
 * brown crown with a darker hat band, and a wide brim that swoops up at
 * the tips. */
const CowboyHat = () => (
  <AccessorySvg>
    <path
      fill={BROWN}
      d="M 31 27
         L 33 5
         C 33.5 0, 38 -1.5, 41 0.5
         L 50 4
         L 59 0.5
         C 62 -1.5, 66.5 0, 67 5
         L 69 27
         Z"
    />
    <path fill={BROWN_DARK} d="M 31.6 20.5 L 68.4 20.5 L 69 27 L 31 27 Z" />
    <path
      fill={BROWN}
      d="M -2 13
         C 1 26, 20 31.5, 50 31.5
         C 80 31.5, 99 26, 102 13
         C 101.5 28, 80 41.5, 50 41.5
         C 20 41.5, -1.5 28, -2 13
         Z"
    />
  </AccessorySvg>
);

/** Top hat (3878): a tall black crown with a gentle outward flare and a
 * crimson band, over a rounded brim resting where the stud meets the
 * head. */
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
    <path fill="#b3352c" d="M 30.7 7 L 69.3 7 L 70 14 L 30 14 Z" />
    <rect fill={INK} x="16" y="12" width="68" height="7.5" rx="3.75" />
  </AccessorySvg>
);

/** Graduation mortarboard: a flat diamond board over a skull cap, with a
 * gold tassel swinging off the side. For agents that finished training. */
const GraduationCap = () => (
  <AccessorySvg>
    <path fill={INK} d="M 25 22 C 25 10, 33 5, 50 5 C 67 5, 75 10, 75 22 Z" />
    <path fill={INK} d="M 50 -15 L 93 2 L 50 19 L 7 2 Z" />
    <path fill="none" stroke={GOLD} strokeWidth="2" d="M 50 2 C 62 4, 70 8, 71 20" />
    <circle fill={GOLD} cx="50" cy="2" r="2.2" />
    <rect fill={GOLD} x="68" y="19" width="6" height="11" rx="2.5" />
  </AccessorySvg>
);

/** Party hat: a tilted red cone with white polka dots and a gold pompom.
 * For shipped-to-production celebrations. */
const PartyHat = () => (
  <AccessorySvg>
    <g transform="rotate(-10 50 15)">
      <path fill={RED} d="M 50 -16 L 66.5 15 Q 50 19, 33.5 15 Z" />
      <circle fill={PLASTIC_WHITE} cx="49" cy="-4" r="2.4" />
      <circle fill={PLASTIC_WHITE} cx="43.5" cy="7" r="2.4" />
      <circle fill={PLASTIC_WHITE} cx="56" cy="9" r="2.4" />
      <circle fill={GOLD} cx="50" cy="-17" r="4.5" />
    </g>
  </AccessorySvg>
);

/** Santa hat: a red cone flopping to the side into a white pompom, with a
 * white fur band. Ho ho ho. */
const SantaHat = () => (
  <AccessorySvg>
    <path
      fill={RED}
      d="M 11 22
         C 12 2, 26 -8, 46 -9.5
         C 62 -10.5, 74 -7, 81 -1
         L 84 2
         L 77 7
         C 72 -1, 60 -3, 50 -1
         C 34 2, 26 10, 24 22
         Z"
    />
    <circle fill={PLASTIC_WHITE} stroke={PLASTIC_WHITE_EDGE} strokeWidth="1.5" cx="83.5" cy="5" r="7" />
    <rect
      fill={PLASTIC_WHITE}
      stroke={PLASTIC_WHITE_EDGE}
      strokeWidth="1.5"
      x="8"
      y="16"
      width="84"
      height="12"
      rx="6"
    />
  </AccessorySvg>
);

/** Gold three-point crown with orbs on the tips and a ruby set in the
 * band, sitting where the stud is (royalty doesn't show studs). */
const Crown = () => (
  <AccessorySvg>
    <path fill={GOLD} d="M 25 12 L 25 -3.5 L 38.5 3.5 L 50 -7 L 61.5 3.5 L 75 -3.5 L 75 12 Z" />
    <circle fill={GOLD} cx="25" cy="-4" r="2.6" />
    <circle fill={GOLD} cx="50" cy="-7.5" r="2.6" />
    <circle fill={GOLD} cx="75" cy="-4" r="2.6" />
    <rect fill={GOLD_DARK} x="24" y="10" width="52" height="7" rx="3.5" />
    <circle fill={RED} cx="50" cy="13.5" r="2.8" />
  </AccessorySvg>
);

/** Viking helmet: a steel dome with a riveted rim and two white horns
 * curving up from the sides. For agents that pillage backlogs. */
const VikingHelmet = () => (
  <AccessorySvg>
    <path
      fill={PLASTIC_WHITE}
      stroke={PLASTIC_WHITE_EDGE}
      strokeWidth="1.5"
      d="M 16 26
         C 4 22, -1 8, 4 -6
         C 5.5 -9.5, 10 -9, 10.5 -5
         C 11 6, 14 15, 24 20.5
         Z"
    />
    <path
      fill={PLASTIC_WHITE}
      stroke={PLASTIC_WHITE_EDGE}
      strokeWidth="1.5"
      d="M 84 26
         C 96 22, 101 8, 96 -6
         C 94.5 -9.5, 90 -9, 89.5 -5
         C 89 6, 86 15, 76 20.5
         Z"
    />
    <path fill={STEEL} d="M 13 27 C 13 6, 28 1, 50 1 C 72 1, 87 6, 87 27 Z" />
    <rect fill={STEEL_DARK} x="11" y="22.5" width="78" height="8" rx="4" />
  </AccessorySvg>
);

/** The 1978 Classic Space helmet (193): a white shell enclosing the whole
 * head with a rounded face window — the face stays fully visible through
 * the opening. Benny would approve. */
const SpaceHelmet = () => (
  <AccessorySvg>
    <path
      fill={PLASTIC_WHITE}
      stroke={PLASTIC_WHITE_EDGE}
      strokeWidth="1.5"
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

/** Headset: a band arcing over the crown into ear cups with silver pads,
 * and a mic boom curling toward the mouth. The support-agent special. */
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
    <rect fill={SILVER} x="5" y="43" width="6" height="16" rx="3" />
    <rect fill={SILVER} x="89" y="43" width="6" height="16" rx="3" />
    <path fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" d="M 9 60 Q 11.5 74, 29 73" />
    <circle fill={INK} cx="32" cy="72.8" r="4" />
    <circle fill={RED} cx="32" cy="72.8" r="1.6" />
  </AccessorySvg>
);

/* --------------------------------------------------------------- eyewear */

/** Round spectacles: ring lenses centered on the eyes with a faint glass
 * tint (the eyes stay visible and expressive through them), a bridge over
 * the nose, temple arms out to the head edges. */
const Glasses = () => (
  <AccessorySvg>
    <circle fill="rgba(255, 255, 255, 0.28)" cx="37" cy="47" r="11.5" />
    <circle fill="rgba(255, 255, 255, 0.28)" cx="63" cy="47" r="11.5" />
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 25.5 44 L 9 41.5" />
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 74.5 44 L 91 41.5" />
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 48.5 44.5 Q 50 42.5, 51.5 44.5" />
    <circle fill="none" stroke={INK} strokeWidth="3.2" cx="37" cy="47" r="11.5" />
    <circle fill="none" stroke={INK} strokeWidth="3.2" cx="63" cy="47" r="11.5" />
  </AccessorySvg>
);

/** Browline shades: a straight top bar with tapered lenses hanging from
 * it, each catching a diagonal shine — the eyes disappear behind them, so
 * the mouth carries the expression while they're on. */
const Sunglasses = () => (
  <AccessorySvg>
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 24 42.5 L 9 40.5" />
    <path fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" d="M 76 42.5 L 91 40.5" />
    <rect fill={INK} x="23" y="40.5" width="54" height="4.5" rx="2.25" />
    <path fill={INK} d="M 25.5 44 L 48.5 44 L 47.5 53 Q 46.8 58.5, 41 58.5 L 33 58.5 Q 27 58.5, 26.4 52.5 Z" />
    <path fill={INK} d="M 74.5 44 L 51.5 44 L 52.5 53 Q 53.2 58.5, 59 58.5 L 67 58.5 Q 73 58.5, 73.6 52.5 Z" />
    <path
      fill="none"
      stroke="rgba(255, 255, 255, 0.45)"
      strokeWidth="2.4"
      strokeLinecap="round"
      d="M 34.5 54.5 L 42 47 M 60.5 54.5 L 68 47"
    />
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
 * smile stays visible below it. Molded in brown to match the hair bin. */
const Moustache = () => (
  <AccessorySvg>
    <path
      fill={HAIR_BROWN}
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
      fill={BEARD_BROWN}
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
    case 'afro':
      return { body: <Afro /> };
    case 'mohawk':
      return { body: <Mohawk /> };
    case 'pigtails':
      return { body: <Pigtails /> };
    case 'beanie':
      return { body: <Beanie /> };
    case 'cap':
      return { body: <Cap /> };
    case 'propeller-cap':
      return { body: <PropellerCap /> };
    case 'police-cap':
      return { body: <PoliceCap /> };
    case 'hard-hat':
      return { body: <HardHat /> };
    case 'chef-hat':
      return { body: <ChefHat /> };
    case 'cowboy-hat':
      return { body: <CowboyHat /> };
    case 'top-hat':
      return { body: <TopHat /> };
    case 'graduation-cap':
      return { body: <GraduationCap /> };
    case 'party-hat':
      return { body: <PartyHat /> };
    case 'santa-hat':
      return { body: <SantaHat /> };
    case 'crown':
      return { body: <Crown /> };
    case 'viking-helmet':
      return { body: <VikingHelmet /> };
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
