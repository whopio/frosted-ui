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
 * - **Optional data parts**: Logo, Brand, Title, LastFour, MagStripe are
 *   convenience sub-components for common card layouts. Number, Expiry,
 *   and CVV render input fields (use `readOnly` for presentational usage).
 *
 * Sub-components:
 *   Root      — Renderless context provider, face state management
 *   Content   — Card container with 3D flip transform, accepts accent `color`
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
 *   Fieldset     — Semantic group for all card fields; base-ui Fieldset
 *   FieldGroup   — Horizontal row layout for fields (e.g. Expiry + CVV)
 *   Field        — Wraps a label + input pair; base-ui Field
 *   FieldError   — Validation error message for a Field; portals into Errors when present
 *   Errors       — Portal target for FieldError messages, rendered outside the card
 *   FieldLabel   — Accessible label for a Field input; base-ui Field.Label
 *   Input        — Base input primitive; soft style when editable, plain text when readOnly
 *   Number       — Card number input (use readOnly for display)
 *   Expiry       — Expiration date input (use readOnly for display)
 *   CVV          — CVV code input (use readOnly for display)
 *   BrandLogo    — Mono SVG logo of the detected card brand (reads cardType from context)
 *
 * Hooks:
 *   useCreditCard — Public hook returning { face, setFace, toggle, cardType }
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
  CreditCardErrors as Errors,
  CreditCardFieldset as Fieldset,
  CreditCardFieldGroup as FieldGroup,
  CreditCardField as Field,
  CreditCardFieldError as FieldError,
  CreditCardFieldLabel as FieldLabel,
  CreditCardInput as Input,
  CreditCardNumber as Number,
  CreditCardExpiry as Expiry,
  CreditCardCVV as CVV,
} from './credit-card-parts';

export type { CreditCardRootProps, CreditCardRootRef } from './credit-card-root';
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
  CreditCardErrorsProps,
  CreditCardFieldsetProps,
  CreditCardFieldErrorProps,
  CreditCardFieldGroupProps,
  CreditCardFieldGroupState,
  CreditCardFieldProps,
  CreditCardFieldLabelProps,
  CreditCardInputProps,
  CreditCardNumberProps,
  CreditCardExpiryProps,
  CreditCardCVVProps,
} from './credit-card-parts';
export { CreditCardBrandLogo as BrandLogo } from './credit-card-brand-logos';
export { useCreditCard } from './credit-card-context';
export type { CreditCardBrandLogoProps } from './credit-card-brand-logos';
export type { CardFace, UseCreditCardResult } from './credit-card-context';
export type { CreditCardTypeCardBrandId as CardBrandId } from 'credit-card-type/dist/types';
