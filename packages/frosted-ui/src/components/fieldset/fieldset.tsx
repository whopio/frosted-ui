'use client';

import { Fieldset as FieldsetPrimitive } from '@base-ui/react/fieldset';
import classNames from 'classnames';
import * as React from 'react';
import { Text, type TextProps } from '../text/text';

// ============================================================================
// Root
// ============================================================================

interface FieldsetRootProps extends React.ComponentProps<typeof FieldsetPrimitive.Root> {}

/**
 * Groups related fields together. Renders a native `<fieldset>` element.
 *
 * Use this to semantically group multiple related fields (e.g., billing address fields,
 * contact information) with a shared legend.
 *
 * @example
 * ```tsx
 * <Fieldset.Root>
 *   <Fieldset.Legend>Billing Details</Fieldset.Legend>
 *   <Field.Root>
 *     <Field.Label>Company</Field.Label>
 *     <Field.Control placeholder="Enter company name" />
 *   </Field.Root>
 *   <Field.Root>
 *     <Field.Label>Tax ID</Field.Label>
 *     <Field.Control placeholder="Enter fiscal number" />
 *   </Field.Root>
 * </Fieldset.Root>
 * ```
 *
 * @see https://base-ui.com/react/components/fieldset#root
 */
function FieldsetRoot(props: FieldsetRootProps) {
  const { className, ...rootProps } = props;
  return <FieldsetPrimitive.Root {...rootProps} className={classNames('fui-FieldsetRoot', className)} />;
}
FieldsetRoot.displayName = 'FieldsetRoot';

// ============================================================================
// Legend
// ============================================================================

interface FieldsetLegendProps
  extends
    Omit<React.ComponentProps<typeof FieldsetPrimitive.Legend>, 'color'>,
    Pick<TextProps, 'size' | 'weight' | 'align' | 'trim' | 'color' | 'highContrast'> {}

/**
 * An accessible legend for the fieldset. Renders a `<div>` element styled with `<Text>`.
 *
 * The legend provides a caption for the fieldset, describing the group of fields it contains.
 * Unlike the native `<legend>` element, this renders as a `<div>` for easier styling.
 *
 * @example
 * ```tsx
 * <Fieldset.Root>
 *   <Fieldset.Legend>Contact Information</Fieldset.Legend>
 *   <Field.Root>
 *     <Field.Label>Email</Field.Label>
 *     <Field.Control type="email" />
 *   </Field.Root>
 * </Fieldset.Root>
 * ```
 *
 * @param size - Text size ('1' - '9'). Defaults to '3'.
 * @param weight - Font weight ('light', 'regular', 'medium', 'bold'). Defaults to 'bold'.
 * @param color - Text color.
 *
 * @see https://base-ui.com/react/components/fieldset#legend
 */
const FieldsetLegend = React.forwardRef<HTMLDivElement, FieldsetLegendProps>((props, forwardedRef) => {
  const { className, size = '3', weight = 'bold', align, trim, color, highContrast, render, ...legendProps } = props;

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

  return (
    <FieldsetPrimitive.Legend
      {...legendProps}
      ref={forwardedRef}
      className={classNames('fui-FieldsetLegend', className)}
      render={render ?? defaultRender}
    />
  );
});
FieldsetLegend.displayName = 'FieldsetLegend';

// ============================================================================
// Exports
// ============================================================================

export { FieldsetLegend as Legend, FieldsetRoot as Root };

export type { FieldsetLegendProps as LegendProps, FieldsetRootProps as RootProps };
