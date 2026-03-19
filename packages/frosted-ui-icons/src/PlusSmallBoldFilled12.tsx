import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 3.25V6M6 8.75V6M6 6H3.25M6 6H8.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmallBoldFilled12.category = 'Product Icons';

export default PlusSmallBoldFilled12;
