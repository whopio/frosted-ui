import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 4.25V10M10 15.75V10M10 10H4.25M10 10H15.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmallBoldFilled20.category = 'Interface General';

export default PlusSmallBoldFilled20;
