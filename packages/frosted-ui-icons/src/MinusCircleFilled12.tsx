import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircleFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zM3.75 5.25c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.5z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleFilled12.category = 'Interface General';

export default MinusCircleFilled12;
