// Value	Common weight name
// 100	Thin (Hairline)
// 200	Extra Light (Ultra Light)
// 300	Light
// 400	Normal (Regular)
// 500	Medium
// 600	Semi Bold (Demi Bold)
// 700	Bold
// 800	Extra Bold (Ultra Bold)
// 900	Black (Heavy)
// 950	Extra Black (Ultra Black)
export const fontSize = {
  // New typography
  // TODO: add body1 to figma and turn body1 to body2
  body1: [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
  body2: [
    '0.875rem',
    {
      lineHeight: '1.3125rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
  button1: [
    '1rem',
    {
      lineHeight: '1.188rem',
      letterSpacing: '-0.005em',
      fontWeight: '600',
    },
  ],
  button2: [
    '0.875rem',
    {
      lineHeight: '1.3125rem', // Not sure
      letterSpacing: '-0.01em',
      fontWeight: '600',
    },
  ],
  button3: [
    '0.75rem',
    {
      lineHeight: '1.313rem', // Not sure
      letterSpacing: '0em',
      fontWeight: '600',
    },
  ],
  // Update in figma? All other vars have number suffix
  overline1: [
    '0.625rem',
    {
      lineHeight: '0.813rem',
      letterSpacing: '0.06em',
      fontWeight: '600',
    },
  ],
  h1: [
    '2.5rem',
    {
      lineHeight: '3.5rem',
      letterSpacing: '-0.0125em',
      fontWeight: '600',
    },
  ],
  h2: [
    '1.5rem',
    {
      lineHeight: '2.125rem',
      letterSpacing: '-0.0125em',
      fontWeight: '600',
    },
  ],
  h3: [
    '1rem',
    {
      lineHeight: '1.4rem',
      letterSpacing: '-0.0125em',
      fontWeight: '600',
    },
  ],
  display1: [
    '2.5rem',
    {
      lineHeight: '3rem',
      letterSpacing: '0em',
      fontWeight: '700',
    },
  ],
  display2: [
    '1.5rem',
    {
      lineHeight: '1.8rem',
      letterSpacing: '0em',
      fontWeight: '700',
    },
  ],
  mono1: [
    '0.875rem',
    {
      lineHeight: '1rem',
      letterSpacing: '-0.01em',
      fontWeight: '600',
    },
  ],
} as const;
