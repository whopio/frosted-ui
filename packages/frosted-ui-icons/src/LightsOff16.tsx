import * as React from 'react';
import { IconProps } from './types';

export const LightsOff16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.5 15.25H9.5M4 8C4 9.46573 5.07418 10.3944 5.64808 10.7859C5.85723 10.9286 6 11.1599 6 11.4131C6 12.1515 6.59854 12.75 7.33688 12.75H8.66312C9.40146 12.75 10 12.1515 10 11.4131C10 11.1599 10.1428 10.9286 10.3519 10.7859C10.9258 10.3944 12 9.46573 12 8C12 6 10.5 4 8 4C5.5 4 4 6 4 8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LightsOff16;
