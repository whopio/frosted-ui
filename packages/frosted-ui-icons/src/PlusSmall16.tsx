import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 3.75V8M8 12.25V8M8 8H3.75M8 8H12.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmall16.category = 'Interface General';

export default PlusSmall16;
