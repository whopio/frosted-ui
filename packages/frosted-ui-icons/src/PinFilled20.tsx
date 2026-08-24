import * as React from 'react';
import { IconProps } from './types';

export const PinFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinFilled20"
      {...props}
    >
      <path
        d="M12.45 1C13.858 1 15 2.142 15 3.55v4.077c0 .204.05.406.146.586l1.614 3.042c.9 1.698-.33 3.745-2.253 3.745H10.75v3.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V15H5.493c-1.922 0-3.154-2.047-2.253-3.745l1.615-3.042C4.95 8.033 5 7.83 5 7.627V3.55C5 2.142 6.142 1 7.55 1h4.9z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinFilled20.category = 'Interface General';

export default PinFilled20;
