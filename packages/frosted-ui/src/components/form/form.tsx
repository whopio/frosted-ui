'use client';

import { Form as FormPrimitive } from '@base-ui/react/form';
import classNames from 'classnames';
import * as React from 'react';

// ============================================================================
// Types
// ============================================================================

/**
 * Re-export Base UI types for consumers.
 */
type FormState = FormPrimitive.State;
type FormValues<T extends Record<string, unknown> = Record<string, unknown>> = FormPrimitive.Values<T>;
type FormErrors = NonNullable<FormPrimitive.Props['errors']>;
type FormSubmitEventDetails = FormPrimitive.SubmitEventDetails;
type FormValidationMode = FormPrimitive.ValidationMode;

// ============================================================================
// Root
// ============================================================================

interface FormRootProps extends React.ComponentProps<typeof FormPrimitive> {}

/**
 * A native form element with consolidated error handling.
 * Renders a `<form>` element.
 *
 * @example
 * ```tsx
 * <Form.Root
 *   errors={errors}
 *   onSubmit={async (event) => {
 *     event.preventDefault();
 *     const formData = new FormData(event.currentTarget);
 *     // handle submission
 *   }}
 * >
 *   <Field.Root name="email">
 *     <Field.Label>Email</Field.Label>
 *     <Field.Control type="email" required />
 *     <Field.Error />
 *   </Field.Root>
 *   <Button type="submit">Submit</Button>
 * </Form.Root>
 * ```
 *
 * @param errors - Validation errors returned externally, typically after submission by a server
 *   or a form action. This should be an object where keys correspond to the `name` attribute
 *   on `<Field.Root>`, and values correspond to error(s) related to that field.
 * @param actionsRef - A ref to imperative actions. Contains `validate` function to manually
 *   trigger validation. Call `actionsRef.current.validate()` to validate all fields, or
 *   `actionsRef.current.validate('fieldName')` to validate a single field.
 * @param onFormSubmit - Event handler called when the form is submitted. `preventDefault()`
 *   is called on the native submit event when used. Receives form values as a JavaScript object.
 * @param validationMode - Determines when the form should be validated:
 *   - `'onSubmit'` (default): validates the field when the form is submitted, afterwards fields
 *     will re-validate on change.
 *   - `'onBlur'`: validates a field when it loses focus.
 *   - `'onChange'`: validates the field on every change to its value.
 *   The `validationMode` prop on `<Field.Root>` takes precedence over this.
 *
 * @see https://base-ui.com/react/components/form
 */
function FormRoot(props: FormRootProps) {
  const { className, ...formProps } = props;
  return <FormPrimitive {...formProps} className={classNames('fui-FormRoot', className)} />;
}
FormRoot.displayName = 'FormRoot';

// ============================================================================
// Exports
// ============================================================================

export {
  // Components
  FormRoot as Root,
  // Types
  type FormRootProps as RootProps,
  type FormState as State,
  type FormValues as Values,
  type FormErrors as Errors,
  type FormSubmitEventDetails as SubmitEventDetails,
  type FormValidationMode as ValidationMode,
};
