'use client';

import classNames from 'classnames';
import * as React from 'react';

import { colorProp, type GetPropDefTypes } from '../../helpers';
import { Text, type TextProps } from '../text/text';

// ============================================================================
// Types
// ============================================================================

type EmptyStateMediaVariant = 'default' | 'icon';
type EmptyStateMediaColor = GetPropDefTypes<{ color: typeof colorProp }>['color'];

// ============================================================================
// Root
// ============================================================================

interface EmptyStateRootProps extends React.ComponentProps<'div'> {}

/**
 * The root container for an empty state. Renders a `<div>` element.
 *
 * Groups all parts of the empty state with centered flex layout.
 *
 * @example
 * ```tsx
 * <EmptyState.Root>
 *   <EmptyState.Header>
 *     <EmptyState.Media>
 *       <InboxIcon />
 *     </EmptyState.Media>
 *     <EmptyState.Title>No messages</EmptyState.Title>
 *     <EmptyState.Description>You don't have any messages yet.</EmptyState.Description>
 *   </EmptyState.Header>
 *   <EmptyState.Content>
 *     <Button>Compose</Button>
 *   </EmptyState.Content>
 * </EmptyState.Root>
 * ```
 */
const EmptyStateRoot = React.forwardRef<HTMLDivElement, EmptyStateRootProps>((props, forwardedRef) => {
  const { className, ...rootProps } = props;
  return <div ref={forwardedRef} {...rootProps} className={classNames('fui-EmptyStateRoot', className)} />;
});
EmptyStateRoot.displayName = 'EmptyStateRoot';

// ============================================================================
// Header
// ============================================================================

interface EmptyStateHeaderProps extends React.ComponentProps<'div'> {}

/**
 * The header section of an empty state. Renders a `<div>` element.
 *
 * Contains the media, title, and description.
 *
 * @example
 * ```tsx
 * <EmptyState.Header>
 *   <EmptyState.Title>No results</EmptyState.Title>
 *   <EmptyState.Description>Try a different search term.</EmptyState.Description>
 * </EmptyState.Header>
 * ```
 */
const EmptyStateHeader = React.forwardRef<HTMLDivElement, EmptyStateHeaderProps>((props, forwardedRef) => {
  const { className, ...headerProps } = props;
  return <div ref={forwardedRef} {...headerProps} className={classNames('fui-EmptyStateHeader', className)} />;
});
EmptyStateHeader.displayName = 'EmptyStateHeader';

// ============================================================================
// Media
// ============================================================================

interface EmptyStateMediaProps extends Omit<React.ComponentProps<'div'>, 'color'> {
  /**
   * The visual variant of the media container.
   * - `'default'` - Transparent background
   * - `'icon'` - Accent background with rounded corners
   *
   * @default 'default'
   */
  variant?: EmptyStateMediaVariant;
  /**
   * The accent color for the media container (only applies to 'icon' variant).
   */
  color?: EmptyStateMediaColor;
}

/**
 * A container for icons or images in an empty state. Renders a `<div>` element.
 *
 * @example
 * ```tsx
 * <EmptyState.Media variant="icon" color="blue">
 *   <SearchIcon />
 * </EmptyState.Media>
 * ```
 *
 * @param variant - Visual variant ('default' or 'icon'). Defaults to 'default'.
 * @param color - Accent color for the icon variant.
 */
const EmptyStateMedia = React.forwardRef<HTMLDivElement, EmptyStateMediaProps>((props, forwardedRef) => {
  const { className, variant = 'default', color = 'gray', ...mediaProps } = props;
  return (
    <div
      ref={forwardedRef}
      data-accent-color={color}
      {...mediaProps}
      className={classNames('fui-EmptyStateMedia', `fui-variant-${variant}`, className)}
    />
  );
});
EmptyStateMedia.displayName = 'EmptyStateMedia';

// ============================================================================
// Title
// ============================================================================

type EmptyStateTitleProps = TextProps;

/**
 * The title of an empty state. Renders a `<div>` element styled with `<Text>`.
 *
 * @example
 * ```tsx
 * <EmptyState.Title>No items found</EmptyState.Title>
 * ```
 *
 * @param size - Text size ('1' - '9'). Defaults to '2'.
 * @param weight - Font weight. Defaults to 'medium'.
 * @param color - Text color.
 */
const EmptyStateTitle = (props: EmptyStateTitleProps) => {
  const { className, size = '4', weight = 'semi-bold', ...titleProps } = props;
  return (
    <Text
      render={<div />}
      size={size}
      weight={weight}
      {...titleProps}
      className={classNames('fui-EmptyStateTitle', className)}
    />
  );
};
EmptyStateTitle.displayName = 'EmptyStateTitle';

// ============================================================================
// Description
// ============================================================================

type EmptyStateDescriptionProps = TextProps;

/**
 * The description text of an empty state. Renders a `<p>` element styled with `<Text>`.
 *
 * @example
 * ```tsx
 * <EmptyState.Description>
 *   Get started by creating your first item.
 * </EmptyState.Description>
 * ```
 *
 * @param size - Text size ('1' - '9'). Defaults to '2'.
 * @param weight - Font weight.
 * @param color - Text color. Defaults to 'gray'.
 */
const EmptyStateDescription = (props: EmptyStateDescriptionProps) => {
  const { className, size = '2', color = 'gray', ...descriptionProps } = props;
  return (
    <Text
      render={<p />}
      size={size}
      color={color}
      {...descriptionProps}
      className={classNames('fui-EmptyStateDescription', className)}
    />
  );
};
EmptyStateDescription.displayName = 'EmptyStateDescription';

// ============================================================================
// Content
// ============================================================================

interface EmptyStateContentProps extends React.ComponentProps<'div'> {}

/**
 * A container for actions or additional content in an empty state. Renders a `<div>` element.
 *
 * Typically used for buttons or other interactive elements.
 *
 * @example
 * ```tsx
 * <EmptyState.Content>
 *   <Button>Create item</Button>
 *   <Button variant="ghost">Learn more</Button>
 * </EmptyState.Content>
 * ```
 */
const EmptyStateContent = React.forwardRef<HTMLDivElement, EmptyStateContentProps>((props, forwardedRef) => {
  const { className, ...contentProps } = props;
  return <div ref={forwardedRef} {...contentProps} className={classNames('fui-EmptyStateContent', className)} />;
});
EmptyStateContent.displayName = 'EmptyStateContent';

// ============================================================================
// Exports
// ============================================================================

export {
  EmptyStateContent as Content,
  EmptyStateDescription as Description,
  EmptyStateHeader as Header,
  EmptyStateMedia as Media,
  EmptyStateRoot as Root,
  EmptyStateTitle as Title,
};

export type {
  EmptyStateContentProps as ContentProps,
  EmptyStateDescriptionProps as DescriptionProps,
  EmptyStateHeaderProps as HeaderProps,
  EmptyStateMediaColor as MediaColor,
  EmptyStateMediaProps as MediaProps,
  EmptyStateMediaVariant as MediaVariant,
  EmptyStateRootProps as RootProps,
  EmptyStateTitleProps as TitleProps,
};
