import * as React from 'react';
import { IconProps } from './types';

export const ControlsFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsFilled20"
      {...props}
    >
      <path
        d="M6.75 11.5c1.814 0 3.327 1.288 3.675 3h8.824c.414 0 .75.336.75.75s-.336.75-.75.75h-8.824c-.348 1.712-1.86 3-3.675 3-1.814 0-3.327-1.288-3.675-3H.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.325c.348-1.712 1.86-3 3.675-3zM13.25 1c1.814 0 3.327 1.288 3.675 3h2.324c.414 0 .75.336.75.75s-.336.75-.75.75h-2.324c-.348 1.712-1.86 3-3.675 3-1.814 0-3.327-1.288-3.675-3H.75C.336 5.5 0 5.164 0 4.75S.336 4 .75 4h8.825c.348-1.712 1.86-3 3.675-3z"
        fill={color}
      />
    </svg>
  );
};

ControlsFilled20.category = 'Interface General';

export default ControlsFilled20;
