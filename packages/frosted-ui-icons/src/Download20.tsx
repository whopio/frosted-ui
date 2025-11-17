import * as React from 'react';
import { IconProps } from './types';

export const Download20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.5417 11.0416L10.5893 13.994C10.2639 14.3195 9.73621 14.3195 9.41079 13.994L6.45837 11.0416M10 2.29163V13.9583M16.0417 17.7083H3.95837"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Download20;
