import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 4.25V8M8 11.75V8M8 8H4.25M8 8H11.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmallBoldFilled16.category = 'Interface General';

export default PlusSmallBoldFilled16;
