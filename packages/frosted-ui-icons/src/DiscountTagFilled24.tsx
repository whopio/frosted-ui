import * as React from 'react';
import { IconProps } from './types';

export const DiscountTagFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DiscountTagFilled24"
      {...props}
    >
      <path
        d="M19 1c2.21 0 4 1.791 4 4v5.656c0 1.525-.605 2.988-1.683 4.067l-6.887 6.886c-1.855 1.855-4.863 1.855-6.718 0l-5.32-5.32c-1.856-1.856-1.856-4.864 0-6.719l6.886-6.886C10.356 1.606 11.82 1 13.344 1H19zm-6.5 4.75c-.415 0-.75.336-.75.75v10c0 .414.336.75.75.75s.75-.336.75-.75v-10c0-.414-.336-.75-.75-.75zm-4 3.75c-1.105 0-2 .896-2 2s.895 2 2 2c1.104 0 2-.895 2-2s-.896-2-2-2zm8 0c-1.105 0-2 .896-2 2s.895 2 2 2c1.104 0 2-.895 2-2s-.896-2-2-2zm-8 1.5c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm8 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z"
        fill={color}
      />
    </svg>
  );
};

DiscountTagFilled24.category = 'Money & Shopping';

export default DiscountTagFilled24;
