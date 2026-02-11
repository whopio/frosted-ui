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
    Pick<TextProps, 'size' | 'weight' | 'align' | 'trim' | 'color' | 'highContrast'> {
  /**
   * The visual variant of the legend.
   * - `'legend'` (default): Larger text (size='3', weight='bold') for section headings
   * - `'label'`: Smaller text (size='2', weight='medium') similar to field labels
   */
  variant?: 'legend' | 'label';
}

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
 * @param variant - Visual variant: `'legend'` (default) or `'label'`.
 * @param size - Text size ('1' - '9'). Defaults based on variant.
 * @param weight - Font weight ('light', 'regular', 'medium', 'bold'). Defaults based on variant.
 * @param color - Text color.
 *
 * @see https://base-ui.com/react/components/fieldset#legend
 */
const FieldsetLegend = React.forwardRef<HTMLDivElement, FieldsetLegendProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'legend',
    size,
    weight,
    align,
    trim,
    color,
    highContrast,
    render,
    ...legendProps
  } = props;

  // Determine defaults based on variant
  const resolvedSize = size ?? (variant === 'label' ? '2' : '3');
  const resolvedWeight = weight ?? (variant === 'label' ? 'medium' : 'bold');

  // If user provides custom render, use it directly; otherwise use Text
  const defaultRender = (
    <Text
      render={<legend />}
      size={resolvedSize}
      weight={resolvedWeight}
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
      data-variant={variant}
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
