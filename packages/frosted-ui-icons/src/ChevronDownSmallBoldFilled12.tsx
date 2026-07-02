import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.69971 5.05005L5.82322 7.17335C5.92085 7.27097 6.07914 7.27097 6.17676 7.17334L8.30009 5.0501"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallBoldFilled12.category = 'Arrows';

export default ChevronDownSmallBoldFilled12;
