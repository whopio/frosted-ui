import * as React from 'react';
import { IconProps } from './types';

export const BrowserFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserFilled12"
      {...props}
    >
      <path
        d="M12 8.65c0 1.574-1.276 2.85-2.85 2.85h-6.3C1.276 11.5 0 10.224 0 8.65V6.5h12v2.15zM9.15.5C10.724.5 12 1.776 12 3.35V5H0V3.35C0 1.776 1.276.5 2.85.5h6.3zM3 1.85c-.552 0-1 .448-1 1 0 .553.448 1 1 1s1-.447 1-1c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

BrowserFilled12.category = 'Interface General';

export default BrowserFilled12;
