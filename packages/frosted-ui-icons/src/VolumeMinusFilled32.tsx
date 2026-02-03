import * as React from 'react';
import { IconProps } from './types';

export const VolumeMinusFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.9961 2.80933C14.9276 1.07608 17.9998 2.4476 18 5.04272V26.9578C17.9997 29.5529 14.9275 30.9235 12.9961 29.1902L7.85449 24.575C7.44172 24.2046 6.90614 23.9998 6.35156 23.9998H4.75C2.67893 23.9998 1 22.3208 1 20.2498V11.7498C1.00018 9.67884 2.67904 7.99976 4.75 7.99976H6.35156C6.90619 7.99967 7.44171 7.79501 7.85449 7.42456L12.9961 2.80933ZM30.25 15.2498C30.6642 15.2498 30.9999 15.5856 31 15.9998C31 16.414 30.6642 16.7498 30.25 16.7498H23.25C22.8358 16.7498 22.5 16.414 22.5 15.9998C22.5001 15.5856 22.8358 15.2498 23.25 15.2498H30.25Z"
        fill={color}
      />
    </svg>
  );
};

VolumeMinusFilled32.category = 'Sound & Music';

export default VolumeMinusFilled32;
