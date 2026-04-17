/**
 * CreditCard — a composable compound component for rendering credit/debit
 * card UIs with a front/back flip interaction.
 *
 * Architecture follows frosted-ui patterns: compound components communicating
 * via React Context, `useRender` for flexible element rendering, and
 * `mergeProps` for combining consumer and internal props.
 *
 * Key design decisions:
 *
 * - **Controlled & uncontrolled**: `face` / `defaultFace` / `onFaceChange`
 *   on Root follows the same pattern as ScrollGallery's value API.
 *
 * - **CSS 3D flip**: Content uses `perspective` + `backface-visibility` +
 *   `rotateY` transforms driven by `data-face` attribute. Reduced motion
 *   falls back to instant opacity swap.
 *
 * - **Composable faces**: Front and Back are plain wrappers — consumers
 *   can place any content inside them.
 *
 * - **Optional data parts**: Logo, Brand, Label, LastFour, Stripe, Number,
 *   Expiry, CVV are convenience sub-components for common card layouts.
 *
 * Sub-components:
 *   Root      — Context provider, face state management (no visual output)
 *   Content   — Card container with 3D flip transform
 *   Front     — Front face wrapper
 *   Back      — Back face wrapper
 *   Trigger   — Button that toggles between faces
 *   FrontHeader  — Top row of front face (logo + brand)
 *   FrontFooter  — Bottom row of front face (label + last four)
 *   Logo         — Slot for issuer/org logo
 *   Brand        — Card network + tier text
 *   Title        — Card name/description
 *   LastFour     — Masked last four digits
 *   MagStripe    — Magnetic stripe visual
 *   BackContent  — Content area below the stripe
 *   BackFields   — Vertical stack for all back-face fields
 *   BackFieldGroup — Horizontal row within BackFields (e.g. Expiry + CVV)
 *   FieldLabel   — Small label above a data field
 *   Number       — Full card number
 *   Expiry       — Expiration date
 *   CVV          — CVV code
 */
export { CreditCardRoot as Root } from './credit-card-root';
export { CreditCardContent as Content } from './credit-card-content';
export { CreditCardFront as Front } from './credit-card-front';
export { CreditCardBack as Back } from './credit-card-back';
export { CreditCardTrigger as Trigger } from './credit-card-trigger';
export {
  CreditCardFrontHeader as FrontHeader,
  CreditCardFrontFooter as FrontFooter,
  CreditCardLogo as Logo,
  CreditCardBrand as Brand,
  CreditCardTitle as Title,
  CreditCardLastFour as LastFour,
  CreditCardMagStripe as MagStripe,
  CreditCardBackContent as BackContent,
  CreditCardBackFields as BackFields,
  CreditCardBackFieldGroup as BackFieldGroup,
  CreditCardFieldLabel as FieldLabel,
  CreditCardNumber as Number,
  CreditCardExpiry as Expiry,
  CreditCardCVV as CVV,
} from './credit-card-parts';

export type { CreditCardRootProps } from './credit-card-root';
export type { CreditCardContentProps, CreditCardContentState } from './credit-card-content';
export type { CreditCardFrontProps, CreditCardFrontState } from './credit-card-front';
export type { CreditCardBackProps, CreditCardBackState } from './credit-card-back';
export type { CreditCardTriggerProps, CreditCardTriggerState } from './credit-card-trigger';
export type {
  CreditCardFrontHeaderProps,
  CreditCardFrontHeaderState,
  CreditCardFrontFooterProps,
  CreditCardFrontFooterState,
  CreditCardLogoProps,
  CreditCardLogoState,
  CreditCardBrandProps,
  CreditCardBrandState,
  CreditCardTitleProps,
  CreditCardTitleState,
  CreditCardLastFourProps,
  CreditCardLastFourState,
  CreditCardMagStripeProps,
  CreditCardMagStripeState,
  CreditCardBackContentProps,
  CreditCardBackContentState,
  CreditCardBackFieldGroupProps,
  CreditCardBackFieldGroupState,
  CreditCardBackFieldsProps,
  CreditCardBackFieldsState,
  CreditCardFieldLabelProps,
  CreditCardFieldLabelState,
  CreditCardNumberProps,
  CreditCardNumberState,
  CreditCardExpiryProps,
  CreditCardExpiryState,
  CreditCardCVVProps,
  CreditCardCVVState,
} from './credit-card-parts';
export type { CardFace } from './credit-card-context';
