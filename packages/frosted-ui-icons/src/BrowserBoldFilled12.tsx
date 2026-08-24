import * as React from 'react';
import { IconProps } from './types';

export const BrowserBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBoldFilled12"
      {...props}
    >
      <path
        d="M12 8.9c0 1.712-1.388 3.1-3.1 3.1H3.1C1.388 12 0 10.612 0 8.9V7h12v1.9zM8.9 0C10.612 0 12 1.388 12 3.1V5H0V3.1C0 1.388 1.388 0 3.1 0h5.8zM3 1.85c-.552 0-1 .448-1 1 0 .553.448 1 1 1s1-.447 1-1c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

BrowserBoldFilled12.category = 'Interface General';

export default BrowserBoldFilled12;
