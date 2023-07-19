import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { Icon } from '../Icon';
import { MenuSize } from '../Menu';

export const MenuRadioItem = forwardRef<
  React.ElementRef<typeof RadioItem>,
  Radix.ComponentPropsWithoutRef<typeof RadioItem> & { size?: MenuSize }
>(({ children, size = 'sm', className, ...props }, forwardedRef) => {
  return (
    <RadioItem
      ref={forwardedRef}
      className={cn(
        'text-subtitle3 mx-1 flex items-center rounded pl-3 pr-2 transition',
        'focus:bg-whop-hover cursor-pointer select-none outline-none focus:outline-none',
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        {
          'h-8': size === 'sm',
          'h-10': size === 'md',
        },
        className,
      )}
      {...props}
    >
      <span
        className={cn('mr-3 flex items-center justify-center', {
          'h-8 w-4': size === 'sm',
          'h-10 w-5': size === 'md',
        })}
      >
        <ItemIndicator className="text-sm">
          <Icon icon={faCheck} />
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  );
});

MenuRadioItem.displayName = 'MenuRadioItem';
