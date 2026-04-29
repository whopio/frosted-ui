import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 2C6.55228 2 7 2.44772 7 3V5H9C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H7V9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9V7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H5V3C5 2.44772 5.44772 2 6 2Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBold12.category = 'Interface General';

export default PlusSmallBold12;
