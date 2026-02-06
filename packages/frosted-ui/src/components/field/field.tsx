'use client';

import { Field as FieldPrimitive } from '@base-ui/react/field';
import * as React from 'react';
import { Text, type TextProps } from '../text/text';

// ============================================================================
// Types
// ============================================================================

/**
 * Re-export Base UI types for consumers.
 */
type FieldRootState = FieldPrimitive.Root.State;
type FieldValidityState = FieldPrimitive.Validity.State;
type FieldControlChangeEventDetails = FieldPrimitive.Control.ChangeEventDetails;

// ============================================================================
// Root
// ============================================================================

interface FieldRootProps extends React.ComponentProps<typeof FieldPrimitive.Root> {}

/**
 * Groups all parts of the field. Renders a `<div>` element.
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Field.Label>Name</Field.Label>
 *   <Field.Control placeholder="Enter your name" />
 *   <Field.Description>Visible on your profile</Field.Description>
 *   <Field.Error match="valueMissing">Please enter your name</Field.Error>
 * </Field.Root>
 * ```
 *
 * @param name - Identifies the field when a form is submitted. Takes precedence over the `name` prop on `<Field.Control>`.
 * @param disabled - Whether the component should ignore user interaction. Takes precedence over the `disabled` prop on `<Field.Control>`.
 * @param invalid - Whether the field is invalid. Useful when the field state is controlled by an external library.
 * @param dirty - Whether the field's value has been changed from its initial value. Useful when the field state is controlled by an external library.
 * @param touched - Whether the field has been touched. Useful when the field state is controlled by an external library.
 * @param validate - A function for custom validation. Return a string or array of strings with error message(s) if invalid, or `null` if valid.
 * @param validationMode - Determines when the field should be validated: `'onSubmit'` (default), `'onBlur'`, or `'onChange'`.
 * @param validationDebounceTime - How long to wait between `validate` callbacks if `validationMode="onChange"`. Specified in milliseconds.
 * @param actionsRef - A ref to imperative actions. Contains `validate` function to manually trigger validation.
 *
 * @see https://base-ui.com/react/components/field#root
 */
function FieldRoot(props: FieldRootProps) {
  return <FieldPrimitive.Root {...props} />;
}
FieldRoot.displayName = 'FieldRoot';

// ============================================================================
// Label
// ============================================================================

interface FieldLabelProps
  extends
    Omit<React.ComponentProps<typeof FieldPrimitive.Label>, 'color'>,
    Pick<TextProps, 'size' | 'weight' | 'align' | 'trim' | 'color' | 'highContrast'> {}

/**
 * An accessible label that is automatically associated with the field control.
 * Renders a `<label>` element styled with `<Text>`.
 *
 * The label is automatically connected to the control via `htmlFor`/`id` attributes,
 * providing proper accessibility without manual wiring.
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Field.Label>Email address</Field.Label>
 *   <Field.Control type="email" />
 * </Field.Root>
 * ```
 *
 * @param size - Text size ('1' - '9'). Defaults to '2'.
 * @param weight - Font weight ('light', 'regular', 'medium', 'bold').
 * @param color - Text color.
 * @param nativeLabel - Whether the component renders a native `<label>` element when replacing via `render` prop.
 *   Set to `false` if the rendered element is not a label (e.g. `<div>`). This avoids inheriting label behaviors
 *   on button controls like `<Select.Trigger>`, including `:hover` states and click propagation. Defaults to `true`.
 *
 * @see https://base-ui.com/react/components/field#label
 */
const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>((props, forwardedRef) => {
  const { size = '2', weight = 'medium', align, trim, color, highContrast, render, ...labelProps } = props;

  // If user provides custom render, use it directly; otherwise use Text
  const defaultRender = (
    <Text
      render={<label />}
      size={size}
      weight={weight}
      align={align}
      trim={trim}
      color={color}
      highContrast={highContrast}
    />
  );

  return <FieldPrimitive.Label {...labelProps} ref={forwardedRef} render={render ?? defaultRender} />;
});
FieldLabel.displayName = 'FieldLabel';

// ============================================================================
// Control
// ============================================================================

interface FieldControlProps extends React.ComponentProps<typeof FieldPrimitive.Control> {}

/**
 * The form control to label and validate. Renders an `<input>` element.
 *
 * You can omit this part and use any Base UI input component instead.
 * For example, `Input`, `Checkbox`, `Select`, and other form controls
 * will work with Field out of the box.
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Field.Label>Username</Field.Label>
 *   <Field.Control required placeholder="Required" />
 *   <Field.Error match="valueMissing">Username is required</Field.Error>
 * </Field.Root>
 * ```
 *
 * @param defaultValue - The default value of the control (uncontrolled).
 * @param onValueChange - Callback fired when the value changes. Use when controlled.
 *
 * @see https://base-ui.com/react/components/field#control
 */
const FieldControl = React.forwardRef<HTMLInputElement, FieldControlProps>((props, forwardedRef) => {
  return <FieldPrimitive.Control {...props} ref={forwardedRef} />;
});
FieldControl.displayName = 'FieldControl';

// ============================================================================
// Description
// ============================================================================

interface FieldDescriptionProps
  extends
    Omit<React.ComponentProps<typeof FieldPrimitive.Description>, 'color'>,
    Pick<TextProps, 'size' | 'weight' | 'align' | 'trim' | 'color' | 'highContrast'> {}

/**
 * A paragraph with additional information about the field.
 * Renders a `<p>` element styled with `<Text>`.
 *
 * The description is automatically associated with the control via `aria-describedby`,
 * making it accessible to screen readers.
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Field.Label>Password</Field.Label>
 *   <Field.Control type="password" />
 *   <Field.Description>Must be at least 8 characters</Field.Description>
 * </Field.Root>
 * ```
 *
 * @param size - Text size ('1' - '9'). Defaults to '1'.
 * @param weight - Font weight ('light', 'regular', 'medium', 'bold').
 * @param color - Text color. Defaults to 'gray'.
 *
 * @see https://base-ui.com/react/components/field#description
 */
const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>((props, forwardedRef) => {
  const { size = '1', weight, align, trim, color = 'gray', highContrast, render, ...descriptionProps } = props;

  // If user provides custom render, use it directly; otherwise use Text
  const defaultRender = (
    <Text
      render={<p />}
      size={size}
      weight={weight}
      align={align}
      trim={trim}
      color={color}
      highContrast={highContrast}
    />
  );

  return <FieldPrimitive.Description {...descriptionProps} ref={forwardedRef} render={render ?? defaultRender} />;
});
FieldDescription.displayName = 'FieldDescription';

// ============================================================================
// Item
// ============================================================================

interface FieldItemProps extends React.ComponentProps<typeof FieldPrimitive.Item> {}

/**
 * Groups individual items in a checkbox group or radio group with a label and description.
 * Renders a `<div>` element.
 *
 * Use this to wrap individual checkboxes or radios within a group to provide
 * per-item labels and descriptions.
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Field.Label>Notifications</Field.Label>
 *   <CheckboxGroup>
 *     <Field.Item>
 *       <Checkbox value="email" />
 *       <Field.Label>Email notifications</Field.Label>
 *       <Field.Description>Receive updates via email</Field.Description>
 *     </Field.Item>
 *     <Field.Item>
 *       <Checkbox value="sms" />
 *       <Field.Label>SMS notifications</Field.Label>
 *     </Field.Item>
 *   </CheckboxGroup>
 * </Field.Root>
 * ```
 *
 * @param disabled - Whether the wrapped control should ignore user interaction.
 *   The `disabled` prop on `<Field.Root>` takes precedence over this.
 *
 * @see https://base-ui.com/react/components/field#item
 */
function FieldItem(props: FieldItemProps) {
  return <FieldPrimitive.Item {...props} />;
}
FieldItem.displayName = 'FieldItem';

// ============================================================================
// Error
// ============================================================================

interface FieldErrorProps
  extends
    Omit<React.ComponentProps<typeof FieldPrimitive.Error>, 'color'>,
    Pick<TextProps, 'size' | 'weight' | 'align' | 'trim' | 'color' | 'highContrast'> {}

/**
 * An error message displayed if the field control fails validation.
 * Renders a `<div>` element styled with `<Text>`.
 *
 * The error message is automatically associated with the control via `aria-errormessage`
 * when the field is invalid, making it accessible to screen readers.
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Field.Label>Email</Field.Label>
 *   <Field.Control type="email" required />
 *   <Field.Error match="valueMissing">Email is required</Field.Error>
 *   <Field.Error match="typeMismatch">Please enter a valid email</Field.Error>
 * </Field.Root>
 * ```
 *
 * @param size - Text size ('1' - '9'). Defaults to '1'.
 * @param weight - Font weight ('light', 'regular', 'medium', 'bold').
 * @param color - Text color. Defaults to 'danger'.
 * @param match - Determines whether to show the error message according to the field's `ValidityState`.
 *   Can be one of the validity state keys:
 *   - `'valueMissing'` - The field is required but empty
 *   - `'typeMismatch'` - The value doesn't match the expected type (e.g., email)
 *   - `'patternMismatch'` - The value doesn't match the pattern attribute
 *   - `'tooShort'` - The value is shorter than minLength
 *   - `'tooLong'` - The value is longer than maxLength
 *   - `'rangeUnderflow'` - The value is less than min
 *   - `'rangeOverflow'` - The value is greater than max
 *   - `'stepMismatch'` - The value doesn't match the step
 *   - `'badInput'` - The browser cannot convert the input
 *   - `'customError'` - A custom validity error was set
 *   - `'valid'` - The field is valid
 *   - `true` - Always show the error (useful for external validation libraries)
 *
 * @see https://base-ui.com/react/components/field#error
 */
const FieldError = React.forwardRef<HTMLDivElement, FieldErrorProps>((props, forwardedRef) => {
  const { size = '1', weight, align, trim, color = 'danger', highContrast, render, ...errorProps } = props;

  // If user provides custom render, use it directly; otherwise use Text
  const defaultRender = (
    <Text
      render={<div />}
      size={size}
      weight={weight}
      align={align}
      trim={trim}
      color={color}
      highContrast={highContrast}
    />
  );

  return <FieldPrimitive.Error {...errorProps} ref={forwardedRef} render={render ?? defaultRender} />;
});
FieldError.displayName = 'FieldError';

// ============================================================================
// Validity
// ============================================================================

interface FieldValidityProps extends React.ComponentProps<typeof FieldPrimitive.Validity> {}

/**
 * Used to display a custom message based on the field's validity.
 * Requires `children` to be a function that accepts field validity state as an argument.
 *
 * This is useful when you need to display different content based on the validity state,
 * such as showing a checkmark when valid or custom error formatting.
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Field.Label>Password</Field.Label>
 *   <Field.Control type="password" minLength={8} />
 *   <Field.Validity>
 *     {(validity) => (
 *       <ul>
 *         <li data-valid={!validity.tooShort}>At least 8 characters</li>
 *         <li data-valid={!validity.patternMismatch}>Contains a number</li>
 *       </ul>
 *     )}
 *   </Field.Validity>
 * </Field.Root>
 * ```
 *
 * @param children - A function that receives the validity state and returns ReactNode.
 *   The validity state includes all standard `ValidityState` properties plus custom validation results.
 *
 * @see https://base-ui.com/react/components/field#validity
 */
function FieldValidity(props: FieldValidityProps) {
  return <FieldPrimitive.Validity {...props} />;
}
FieldValidity.displayName = 'FieldValidity';

// ============================================================================
// Exports
// ============================================================================

export {
  FieldControl as Control,
  FieldDescription as Description,
  FieldError as Error,
  FieldItem as Item,
  FieldLabel as Label,
  // Components
  FieldRoot as Root,
  FieldValidity as Validity,
};

export type {
  FieldControlChangeEventDetails as ControlChangeEventDetails,
  FieldControlProps as ControlProps,
  FieldDescriptionProps as DescriptionProps,
  FieldErrorProps as ErrorProps,
  FieldItemProps as ItemProps,
  FieldLabelProps as LabelProps,
  // Component Props
  FieldRootProps as RootProps,
  // State & Event Types
  FieldRootState as RootState,
  FieldValidityProps as ValidityProps,
  FieldValidityState as ValidityState,
};
