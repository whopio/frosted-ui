import * as React from 'react';
import { IconProps } from './types';

export const PauseFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseFilled20"
      {...props}
    >
      <path
        d="M5.86 2c.905 0 1.64.734 1.64 1.64v12.72c0 .905-.735 1.64-1.64 1.64H4.64C3.736 18 3 17.265 3 16.36V3.64C3 2.735 3.735 2 4.64 2h1.22zm9.5 0c.905 0 1.64.735 1.64 1.64v12.72c0 .905-.735 1.64-1.64 1.64h-1.22c-.905 0-1.64-.735-1.64-1.64V3.64c0-.905.735-1.64 1.64-1.64h1.22z"
        fill={color}
      />
    </svg>
  );
};

PauseFilled20.category = 'Sound & Music';

export default PauseFilled20;
