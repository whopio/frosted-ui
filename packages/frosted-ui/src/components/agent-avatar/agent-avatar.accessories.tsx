import * as React from 'react';

/**
 * Accessories for the AgentAvatar's fixed minifig head — a curated set of
 * the most iconic real LEGO pieces, redrawn as flat geometry:
 *
 * hair (3901, the first male hair piece), pigtails (3625, the original
 * female piece), beanie, cap (3624), cowboy hat (3629), top hat (3878),
 * crown, the 1978 Classic Space helmet (193), a headset, round glasses,
 * shades, a pirate eyepatch, a handlebar moustache, and a chin-curtain
 * beard.
 *
 * Everything is drawn with absolutely-positioned spans in percentages of
 * the avatar box, hard-coded against the lego-head geometry (head box
 * x 7.5–92.5% / y 17–88%, stud x 29.5–70.5% / y 2–17%, neck x 24–76%, and —
 * after the face fit (s=1, dy=0.05) — eyes at (37%, 47%) and (63%, 47%),
 * mouth around y 65%). Molded plastic is always the theme-aware near-black
 * ink, like the real parts — deliberately not accent-colored.
 *
 * Two anchor layers (see BotAvatarProps):
 * - face accessories (eyewear, facial hair) ride the face motion — they
 *   follow gaze and drift like something worn on the face;
 * - body accessories (hair and headgear) sit between the silhouette and the
 *   face — they breathe with the body and stay put when the eyes move.
 *   Headwear covers the stud, exactly like the real pieces mount, and may
 *   poke above the avatar box (accessories are unclipped, like the badge).
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

const part = (style: React.CSSProperties): React.CSSProperties => ({
  position: 'absolute',
  background: INK,
  ...style,
});

/* ------------------------------------------------------------------ hair */

/** Classic swept side-part hair (3901): a cap of hair over the crown
 * (hiding the stud, like the real piece), a fringe swept to one side, and
 * short sideburns hugging the head. */
const Hair = () => (
  <>
    <span
      style={part({
        left: '5.5%',
        top: '-1.5%',
        width: '89%',
        height: '33%',
        borderRadius: '46% 46% 12% 12% / 62% 62% 10% 10%',
      })}
    />
    <span
      style={part({
        left: '5.5%',
        top: '24%',
        width: '53%',
        height: '12.5%',
        borderRadius: '0 999px 999px 999px',
        transform: 'rotate(-2deg)',
      })}
    />
    <span style={part({ left: '5.5%', top: '26%', width: '8.5%', height: '22%', borderRadius: '0 0 999px 999px' })} />
    <span style={part({ left: '86%', top: '26%', width: '8.5%', height: '22%', borderRadius: '0 0 999px 999px' })} />
  </>
);

/** Pigtails (3625, the original 1975 female piece): a smooth helmet of hair
 * with straight bangs and a puff on each side of the head. */
const Pigtails = () => (
  <>
    {/* crown */}
    <span
      style={part({
        left: '6.5%',
        top: '-1.5%',
        width: '87%',
        height: '30%',
        borderRadius: '48% 48% 10% 10% / 66% 66% 8% 8%',
      })}
    />
    {/* straight bangs */}
    <span style={part({ left: '6.5%', top: '21%', width: '87%', height: '11%', borderRadius: '2% 2% 26% 26%' })} />
    {/* side puffs */}
    <span style={part({ left: '-3.5%', top: '27%', width: '17%', height: '25%', borderRadius: '50%' })} />
    <span style={part({ left: '86.5%', top: '27%', width: '17%', height: '25%', borderRadius: '50%' })} />
  </>
);

/* -------------------------------------------------------------- headgear */

/** Knit beanie: soft dome, folded cuff, and a pompom. */
const Beanie = () => (
  <>
    <span style={part({ left: '44%', top: '-6.5%', width: '12%', height: '12%', borderRadius: '50%' })} />
    <span
      style={part({
        left: '10%',
        top: '0.5%',
        width: '80%',
        height: '26%',
        borderRadius: '48% 48% 10% 10% / 70% 70% 8% 8%',
      })}
    />
    <span style={part({ left: '7.5%', top: '21.5%', width: '85%', height: '10%', borderRadius: '999px' })} />
  </>
);

/** Baseball cap (3624 family): a low dome over the crown with a button,
 * and a brim band across the forehead. */
const Cap = () => (
  <>
    <span
      style={part({
        left: '12%',
        top: '1.5%',
        width: '76%',
        height: '27%',
        borderRadius: '50% 50% 8% 8% / 68% 68% 6% 6%',
      })}
    />
    <span style={part({ left: '46.5%', top: '-1.5%', width: '7%', height: '7%', borderRadius: '50%' })} />
    <span style={part({ left: '5%', top: '26.5%', width: '90%', height: '7%', borderRadius: '999px' })} />
  </>
);

/** Cowboy hat (3629, on minifigs since before they had arms): a tall
 * creased crown and a brim spanning the full box. */
const CowboyHat = () => (
  <>
    <span
      style={part({
        left: '29%',
        top: '-3.5%',
        width: '42%',
        height: '23%',
        borderRadius: '42% 42% 6% 6% / 58% 58% 6% 6%',
      })}
    />
    <span style={part({ left: '-1%', top: '17%', width: '102%', height: '8.5%', borderRadius: '999px' })} />
  </>
);

/** Top hat (3878): tall crown poking above the avatar box + a wide brim
 * where the stud meets the head. */
const TopHat = () => (
  <>
    <span style={part({ left: '29%', top: '-6%', width: '42%', height: '22%', borderRadius: '10% 10% 0 0' })} />
    <span style={part({ left: '17.5%', top: '13.5%', width: '65%', height: '7%', borderRadius: '999px' })} />
  </>
);

/** Three-point crown, sitting where the stud is (royalty doesn't show
 * studs). The zigzag is a clip-path polygon poking above the avatar box so
 * the points stay bold even at roster sizes; the band gives it weight. */
const Crown = () => (
  <>
    <span
      style={part({
        left: '25%',
        top: '-8%',
        width: '50%',
        height: '19%',
        clipPath: 'polygon(0% 100%, 0% 22%, 27% 58%, 50% 0%, 73% 58%, 100% 22%, 100% 100%)',
      })}
    />
    <span style={part({ left: '25%', top: '9.5%', width: '50%', height: '7%', borderRadius: '999px' })} />
  </>
);

/** The 1978 Classic Space helmet (193): a solid crown over the head and a
 * ring hugging the whole silhouette, with the face visible through the
 * square opening. Benny would approve. */
const SpaceHelmet = () => (
  <>
    {/* crown — covers the stud like the real dome */}
    <span
      style={part({
        left: '14%',
        top: '-3%',
        width: '72%',
        height: '19%',
        borderRadius: '50% 50% 4% 4% / 80% 80% 4% 4%',
      })}
    />
    {/* helmet shell around the head */}
    <span
      style={{
        position: 'absolute',
        left: '0.5%',
        top: '0.5%',
        width: '99%',
        height: '93%',
        border: `4cqw solid ${INK}`,
        borderRadius: '34%',
        background: 'transparent',
      }}
    />
  </>
);

/** Headset: band over the crown, ear cups on the head edges, and a mic
 * boom reaching toward the mouth. The support-agent special. */
const Headset = () => (
  <>
    {/* band: top arc of an ellipse (only the top border is painted) */}
    <span
      style={{
        position: 'absolute',
        left: '9%',
        top: '4%',
        width: '82%',
        height: '52%',
        borderStyle: 'solid',
        borderWidth: '3.4cqw',
        borderColor: `${INK} transparent transparent transparent`,
        borderRadius: '50%',
        background: 'transparent',
      }}
    />
    {/* ear cups */}
    <span style={part({ left: '3%', top: '42%', width: '11%', height: '21%', borderRadius: '32% / 26%' })} />
    <span style={part({ left: '86%', top: '42%', width: '11%', height: '21%', borderRadius: '32% / 26%' })} />
    {/* mic boom + tip, reaching toward the mouth corner */}
    <span
      style={part({
        left: '7%',
        top: '59%',
        width: '22%',
        height: '2.8%',
        borderRadius: '999px',
        transform: 'rotate(32deg)',
        transformOrigin: 'left center',
      })}
    />
    <span style={part({ left: '23%', top: '69%', width: '7%', height: '7%', borderRadius: '50%' })} />
  </>
);

/* --------------------------------------------------------------- eyewear */

/** Round spectacles: two ring lenses centered on the eyes (which stay
 * visible and expressive through them), a bridge, and temple arms out to
 * the head edges. */
const Glasses = () => {
  const ring: React.CSSProperties = {
    position: 'absolute',
    width: '22%',
    height: '22%',
    top: '36%',
    border: `3cqw solid ${INK}`,
    borderRadius: '50%',
    background: 'transparent',
  };
  return (
    <>
      <span style={part({ left: '7.5%', top: '45%', width: '10%', height: '3%', borderRadius: '999px' })} />
      <span style={part({ left: '82.5%', top: '45%', width: '10%', height: '3%', borderRadius: '999px' })} />
      <span style={part({ left: '45%', top: '43.5%', width: '10%', height: '3%', borderRadius: '999px' })} />
      <span style={{ ...ring, left: '26%' }} />
      <span style={{ ...ring, left: '52%' }} />
    </>
  );
};

/** Shades: two filled rounded lenses over the eyes (which they hide — the
 * mouth carries the expression while they're on), bridge, and temples. */
const Sunglasses = () => (
  <>
    <span style={part({ left: '7.5%', top: '44.5%', width: '21%', height: '3%', borderRadius: '999px' })} />
    <span style={part({ left: '71.5%', top: '44.5%', width: '21%', height: '3%', borderRadius: '999px' })} />
    <span style={part({ left: '44%', top: '43.5%', width: '12%', height: '3.2%', borderRadius: '999px' })} />
    <span style={part({ left: '26%', top: '38.5%', width: '21.5%', height: '17.5%', borderRadius: '34% / 40%' })} />
    <span style={part({ left: '52.5%', top: '38.5%', width: '21.5%', height: '17.5%', borderRadius: '34% / 40%' })} />
  </>
);

/** Pirate eyepatch (straight off the classic 1989 pirate head print):
 * covers the right eye, strap rising across the forehead. */
const Eyepatch = () => (
  <>
    <span
      style={part({
        left: '6%',
        top: '41%',
        width: '88%',
        height: '2.8%',
        borderRadius: '999px',
        transform: 'rotate(8deg)',
      })}
    />
    <span style={part({ left: '54%', top: '39%', width: '18%', height: '16.5%', borderRadius: '30% / 34%' })} />
  </>
);

/* ----------------------------------------------------------- facial hair */

/** Handlebar moustache: two mirrored pills curling up at the ends, sitting
 * between the eyes and the mouth (the smile stays visible below). */
const Moustache = () => (
  <>
    <span
      style={part({
        left: '29.5%',
        top: '54%',
        width: '21.5%',
        height: '7.5%',
        borderRadius: '999px 999px 20% 999px',
        transform: 'rotate(10deg)',
      })}
    />
    <span
      style={part({
        left: '49%',
        top: '54%',
        width: '21.5%',
        height: '7.5%',
        borderRadius: '999px 999px 999px 0',
        transform: 'rotate(-10deg)',
      })}
    />
  </>
);

/** Chin-curtain beard (the pirate-captain classic): sideburn chops down the
 * cheeks into a chin bar under the mouth — the mouth stays visible inside
 * the frame, so a bearded agent still smiles and frowns. */
const Beard = () => (
  <>
    <span style={part({ left: '9.5%', top: '46%', width: '12%', height: '31%', borderRadius: '0 0 0 999px' })} />
    <span style={part({ left: '78.5%', top: '46%', width: '12%', height: '31%', borderRadius: '0 0 999px 0' })} />
    <span
      style={part({
        left: '9.5%',
        top: '71%',
        width: '81%',
        height: '15.5%',
        borderRadius: '18% 18% 42% 42% / 30% 30% 95% 95%',
      })}
    />
  </>
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
