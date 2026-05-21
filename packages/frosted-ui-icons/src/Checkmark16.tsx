import * as React from 'react';
import { IconProps } from './types';

export const Checkmark16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.7646 3.58014C14.0574 3.28729 14.5322 3.28737 14.8251 3.58014C15.1179 3.87304 15.118 4.34782 14.8251 4.64069L6.163 13.3028C6.02235 13.4434 5.83161 13.5225 5.63273 13.5225C5.43388 13.5225 5.24307 13.4434 5.10245 13.3028L1.21964 9.41999C0.926767 9.12711 0.926806 8.65234 1.21964 8.35944C1.51253 8.06655 1.98729 8.06655 2.28019 8.35944L5.63273 11.712L13.7646 3.58014Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Checkmark16.category = 'Checkmarks';

export default Checkmark16;
