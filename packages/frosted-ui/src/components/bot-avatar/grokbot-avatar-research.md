# Grok Bot avatars: how the faces are built and animated

Research notes compiled from public sources (September 2026) on the animated bot avatars in
xAI's Grok Bot, as background for the frosted-ui `BotAvatar` component.

## Sources

1. [Designing Grok Bot for a world of persistent agents](https://x.ai/news/designing-grok-bot) — official xAI design blog post (Sep 3, 2026). Covers the design rationale for the avatar system. Avatar visual style explorations credited to Kenny Kuh and Peng Zheng; avatar motion system credited to Benji Taylor.
2. [jeremy-prt/bloub](https://github.com/jeremy-prt/bloub) — an MIT-licensed SVG recreation of the x.ai bot avatar, reverse-engineered frame-by-frame from a reference video. Its [architecture](https://github.com/jeremy-prt/bloub/blob/main/docs/architecture.md), [measurements](https://github.com/jeremy-prt/bloub/blob/main/docs/measurements.md), and [intro](https://github.com/jeremy-prt/bloub/blob/main/docs/intro.md) docs are the most detailed public account of how the avatar actually moves.
3. [nasawz/GrokBot](https://github.com/nasawz/GrokBot) — a pure-Flutter recreation (`CustomPaint`, no WebView/SVG) with its own state machine and spring-based morphing.

Sources 2 and 3 are unaffiliated recreations, not xAI code, but both derived their numbers
by measuring official footage, so they document the original's observable behavior.

---

## Why the avatars exist (xAI's design rationale)

Grok Bot (launched in beta August 11, 2026) is organized around **persistent Bots rather
than disposable chats** — each Bot has a name, an avatar, a title, memory, and its own
computer. The sidebar is a roster of Bots, and the avatar has to answer three questions
at once: _who is this, what are they doing, and how much do I need to know?_

### Identity: recognizable at a glance, consistent as a system

- The roster must be scannable "almost peripherally" — users shouldn't have to read
  names as the roster grows (accounts are capped at roughly 50 Bots).
- The team studied character systems across illustration, animation, games, and interface
  design: initials, emojis, pixel art, watercolor, claymorphism, Noritake-style line art,
  silhouettes, and identicons.
- Detailed styles (watercolor, clay) gave individual character but carried too much
  detail at sidebar scale; simpler systems sat naturally in the UI but made Bots look
  interchangeable.
- **The final system: consistent basic construction from simple shapes and expressive
  eyes, with distinction introduced through controlled variations and accessories.**
  Each Bot reads as an individual without appearing to come from a different visual world.

### Status: the avatar itself carries the lifecycle

Rather than adding a separate status indicator, the avatar's motion encodes the Bot's
state: **idle, thinking, working, waiting, blocked, done**.

- At rest the Bot is "calm and slightly curious"; when work arrives it acknowledges the
  task; as work begins it "kicks into gear"; motion changes again when waiting or blocked,
  then settles when done.
- xAI rejected the standard "three animated dots" (too little information to tell working
  from stuck) and rejected always-visible step-by-step text (users only wanted it for
  reassurance). The compromise: **avatar motion is the first signal that the Bot is
  active; hovering reveals the current action.**

---

## How the face is constructed

Findings from the bloub reverse-engineering (measured off official footage cut at 10 fps:
silhouettes by sub-pixel ray casting, eyes by capsule fitting/PCA, colors and stroke
widths by direct sampling):

- **One filled body shape plus two eyes, nothing else.** The body is a single dark filled
  silhouette (`#0a0a0c`), and the face is just two light capsule-shaped eyes. All
  expression comes from eye shape, tilt, and position.
- **The body at rest is a perfect circle** — not a squircle. Measured radial deviation is
  under 0.7%.
- **The eyes are holes, not overlays.** In the SVG recreation they are cut out of the body
  with a `<mask>`, so when they slide toward the edge they clip themselves against the
  silhouette with no extra cropping code.
- **The eyes live on a sphere.** Each eye is drawn in the tangent frame of a sphere,
  orthographically projected. The eye nearer the edge measures ~0.69× the width and
  ~0.663× the area of the other — exactly the depth factor of a point on a sphere at that
  distance from center. Compression, tilt, and passing behind the limb all fall out of the
  projection for free. Head turns map the eye centroids to sphere longitude; eye width
  compresses with the cosine and the eye hides when it rotates "behind the head".
- **The resting eyes lean like `\\`, not `//`** — about 26° off vertical. This tilt is not
  a stored constant; it emerges from the resting gaze direction through the tangent frame.
- **Non-circular bodies keep the face attached via the real outline.** Anything sitting on
  the body (eyes, notification pastille) is positioned using the silhouette's actual
  radius at that angle (`radiusAtAngle`), and shapes with no room up top get a single
  precomputed whole-face translation — a lookup table solved once at import per
  (shape, state, expression), the same idea as pose space deformation in character rigging
  (Lewis, Cordner & Fong, SIGGRAPH 2000). Seven attempts at solving it per-frame all
  produced visible trembling; the lesson was to declare poses and interpolate, never to
  run a solver inside the render loop.

The Flutter recreation (nasawz/GrokBot) confirms the same construction from another
angle: body plus two eyes drawn directly with `CustomPaint`, 18 body shapes with per-shape
facial geometry correction, gaze as a normalized offset mapped to roughly ±13.2 × ±8.4
canvas units, and spherical projection for head turns.

## How the animation works

### State machine, not keyframed clips

The avatar is a set of named states (bloub reproduces **14** measured states — idle, wink,
wide eyes, notification, orbit, burst, comet, swirl, alert variants, etc.; the Flutter
port models a larger catalogue of 25 expressions, 18 shapes, and 39 states with per-state
expression pools and blink rhythms). Each state declares poses; the engine interpolates
between them. In bloub the entire engine is a **pure function of time** —
`engine.sample(t)` — with no internal clock, which makes any frame reproducible (their
favicon is literally the byte-for-byte output of `engine.sample(1)` for idle, right eye
narrower than the left because of sphere depth compression).

### Shape morphing by radial profiles

Every silhouette is sampled at the same 64 angles as a radial profile `r(θ)`, so any two
shapes correspond point-for-point and a body transition reduces to **linear interpolation
of radii** — no path-morphing library. (The Flutter port does the equivalent with 48-point
closed-loop contours per eye and spring-driven morphing stepped at ~120 Hz.)

### Easing: measured ease-outs, no springs

A counterintuitive measured finding: transitions in the original are **exponential
ease-outs and the body never overshoots**. There is deliberately no general spring engine
in bloub; the single springy effect is local — the notification pastille pops in with a
+14% overshoot. (The Flutter port chose dampened springs with a configurable natural
frequency ω = 7 as its approximation instead; that's an implementation choice, not what
the footage shows.)

### Blinks hide the morphs

**Every body shape change is masked by a blink** — the eyes close, the silhouette morphs,
the eyes reopen. The forced morph-covering blink lasts 0.2 s; the scheduled idle blink is
0.18 s (the Flutter port measures its blink at 320 ms with the close faster than the
open). Blink schedules are pre-drawn deterministic data, not random timers.

### Life at rest is gaze, not floating

The original **does not float at rest** — the body center is stable to ±0.003 of the
radius. Perceived life comes from **gaze drift and blinking**, plus a deliberate trace of
motion (a drift of a few thousandths of the radius and a 0.5% "breath") purely so the
image isn't frozen. Gaze blends an absolute look target (pointer tracking) with automatic
wander; drift is added after the mix so a keyboard/touch user still sees a living gaze,
and it dies out when the pointer actively commands direction.

### Depth-sorted props

Orbiting rings are true 3D circles in orthographic projection: each arc is split by its
z-component and the back half is drawn _before_ the body, so the body occludes it — which
is what makes rings read as orbits rather than flat drawings. In the comet state the dot
does not travel; the trail orbits a stationary dot.

### Other measured details worth knowing

- The vertical "!" alert has a tapered bar (top/bottom ratio 1.76); the leaning "!" has a
  capsule bar and a teardrop dot (round end toward the bar) — not the same shapes.
- Expression tilts are only legible on elongated eyes; a near-circular eye makes tilt
  invisible (bloub enforces width/height ratio bounds per tilt magnitude in tests).
- Grok's separate animated 3D "Companions" feature (Ani, Rudi, etc.) is a different
  system entirely — full 3D characters, retired by xAI in July 2026 — and unrelated to the
  Bot avatar system described here.

---

## Takeaways for frosted-ui `BotAvatar`

1. **Simple shape + expressive eyes is the whole formula.** Our clip-path shape body is
   the right foundation; identity comes from shape/color variation, and any future life
   comes from eyes, not from decorating the body.
2. **Eyes should clip against the body** (mask/clip the eyes with the same shape path)
   so they can slide to the edge without escaping the silhouette.
3. **If we animate, drive it from a small state enum** (idle / thinking / working /
   waiting / blocked / done) rather than ad-hoc animations, mirroring how the avatar
   doubles as a status indicator in Grok Bot.
4. **Use ease-out curves without overshoot** for shape/expression transitions, and
   consider hiding shape morphs behind a blink.
5. **Don't float the avatar at rest** — subtle gaze drift and occasional blinks read as
   alive; idle bobbing reads as noise.
6. **Precompute anything geometric** (per-shape face placement) instead of solving it
   per frame.
