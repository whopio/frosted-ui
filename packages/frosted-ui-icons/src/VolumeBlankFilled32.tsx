import * as React from 'react';
import { IconProps } from './types';

export const VolumeBlankFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.9961 2.80936C14.9276 1.07606 17.9999 2.44758 18 5.04276V26.9578C17.9997 29.5529 14.9275 30.9236 12.9961 29.1902L7.85449 24.575C7.44172 24.2046 6.90616 23.9999 6.35156 23.9998H4.75C2.67893 23.9998 1 22.3209 1 20.2498V11.7498C1.00015 9.67885 2.67902 7.99979 4.75 7.99979H6.35156C6.90619 7.99971 7.44171 7.79505 7.85449 7.4246L12.9961 2.80936Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeBlankFilled32.category = 'Sound & Music';

export default VolumeBlankFilled32;
