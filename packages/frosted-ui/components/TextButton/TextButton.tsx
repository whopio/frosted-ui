import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, {
  ButtonHTMLAttributes,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { ColorScheme, Size } from '../../lib/shared-component-types';
import { Icon } from '../Icon';

type AsProp<C extends ElementType> = {
  asComponent?: C;
};

type PropsOf<C extends ElementType> = C extends React.ComponentType<infer P>
  ? P
  : C extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[C]
  : Record<string, never>;

export type TextButtonVariant = 'underline' | 'arrow';
export const TextButtonVariants: { [key: string]: TextButtonVariant } = {
  Underline: 'underline',
  Arrow: 'arrow',
};

export type TextButtonSize = Exclude<Size, 'xs'>;
export const TextButtonSizes: { [key: string]: TextButtonSize } = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
  'Extra large': 'xl',
};

export type TextButtonColorScheme = Extract<
  ColorScheme,
  | 'dark-gray'
  | 'black'
  | 'purple'
  | 'error-red'
  | 'white'
  | 'success-green'
  | 'warning-yellow'
>;
export const TextButtonColorSchemes: { [key: string]: TextButtonColorScheme } =
  {
    Black: 'black',
    'Dark Gray': 'dark-gray',
    Purple: 'purple',
    White: 'white',
    'Success Green': 'success-green',
    'Warning Yellow': 'warning-yellow',
    'Error Red': 'error-red',
  };

export interface TextButtonDefaultProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'> {
  children: React.ReactNode;
  variant?: TextButtonVariant;
  size?: TextButtonSize;
  colorScheme?: TextButtonColorScheme;
  icon?: IconDefinition;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export type TextButtonProps<C extends ElementType> = PropsOf<C> &
  TextButtonDefaultProps &
  AsProp<C>;

export const TextButton = forwardRef(function TextButton<
  C extends ElementType = 'button',
>(
  {
    children,
    variant = 'arrow',
    size = 'md',
    colorScheme = 'dark-gray',
    icon = faArrowRight,
    onClick,
    asComponent,
    ...props
  }: TextButtonProps<C>,
  ref: ForwardedRef<unknown>,
) {
  const Component: ElementType = asComponent || 'button';
  const { className, ...rest } = props;

  return (
    <Component
      className={cn('group inline-flex items-center', className)}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      <span
        className={cn(
          'transition',
          {
            'hover:underline': variant === 'underline',
          },
          {
            // Arrow
            'text-button5': size === 'sm' && variant === 'arrow',
            'text-button4': size === 'md' && variant === 'arrow',
            'text-button3': size === 'lg' && variant === 'arrow',
            'text-button2': size === 'xl' && variant === 'arrow',

            // Underline
            'text-text4': size === 'sm' && variant === 'underline',
            'text-text3': size === 'md' && variant === 'underline',
            'text-text2': size === 'lg' && variant === 'underline',
            'text-text1': size === 'xl' && variant === 'underline',
          },
          {
            'text-whop-dark-gray group-hover:text-whop-black':
              colorScheme === 'dark-gray',
            'text-whop-black': colorScheme === 'black',
            'text-whop-field-highlight group-hover:field-highlight-hover':
              colorScheme === 'purple',
            'group-hover:text-whop-error-red text-whop-tag-error':
              colorScheme === 'error-red',
            'group-hover:text-whop-success-green text-whop-tag-green':
              colorScheme === 'success-green',
            'group-hover:text-whop-warning-yellow text-whop-tag-warning':
              colorScheme === 'warning-yellow',
            'text-whop-fixed-white group-hover:text-whop-fixed-white':
              colorScheme === 'white',
          },
        )}
      >
        {children}
      </span>
      {variant === 'arrow' && (
        <Icon
          icon={icon}
          className={cn(
            'transition group-hover:translate-x-0.5',
            {
              'text-whop-dark-gray group-hover:text-whop-black':
                colorScheme === 'dark-gray',
              'text-whop-black': colorScheme === 'black',
              'text-whop-field-highlight group-hover:field-highlight-hover':
                colorScheme === 'purple',
              'group-hover:text-whop-error-red text-whop-tag-error':
                colorScheme === 'error-red',
              'group-hover:text-whop-success-green text-whop-tag-green':
                colorScheme === 'success-green',
              'group-hover:text-whop-warning-yellow text-whop-tag-warning':
                colorScheme === 'warning-yellow',
              'text-whop-fixed-white group-hover:text-whop-fixed-white':
                colorScheme === 'white',
            },
            {
              'h-3 w-3': size === 'sm',
              'h-[13px] w-[13px]': size === 'md',
              'h-[14px] w-[14px]': size === 'lg',
              'h-[15px] w-[15px]': size === 'xl',
            },
          )}
        />
      )}
    </Component>
  );
}) as <C extends ElementType = 'button'>(
  p: TextButtonProps<C> & { ref?: ForwardedRef<unknown> },
) => React.ReactElement | null;
