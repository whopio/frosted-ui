import { faCheck } from '@fortawesome/free-solid-svg-icons';
import type * as Radix from '@radix-ui/react-primitive';
import {
  Item,
  ItemIndicator,
  ItemText,
  SelectItemProps as RadixSelectItemProps,
} from '@radix-ui/react-select';
import { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { Icon } from '../Icon';

export type SelectItemProps = {
  isDisabled?: boolean;
  className?: string;
} & Omit<RadixSelectItemProps, 'disabled'>;

export const SelectItem = forwardRef<
  React.ElementRef<typeof Item>,
  Radix.ComponentPropsWithoutRef<typeof Item> & SelectItemProps
>(({ children, textValue, isDisabled, className, ...props }, forwardedRef) => {
  return (
    <Item
      className={cn(
        'text-subtitle3 mx-1 flex h-8 items-center rounded pl-[34px] pr-2 transition',
        'focus:bg-whop-hover cursor-pointer select-none outline-none focus:outline-none',
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        className,
      )}
      disabled={isDisabled}
      {...props}
      ref={forwardedRef}
    >
      <ItemIndicator className="absolute left-3 text-sm">
        <Icon icon={faCheck} />
      </ItemIndicator>
      <span className="truncate">
        <ItemText>{textValue || children}</ItemText>
      </span>
    </Item>
  );
});

SelectItem.displayName = 'SelectItem';
