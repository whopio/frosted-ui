import * as React from 'react';
import { IconProps } from './types';

export const Checkmark20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Checkmark20"
      {...props}
    >
      <path
        d="M17.72 4.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L7.53 16.53c-.293.293-.767.293-1.06 0l-5.25-5.25c-.293-.292-.293-.767 0-1.06.293-.293.767-.293 1.06 0L7 14.94 17.72 4.22z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Checkmark20.category = 'Checkmarks';

export default Checkmark20;
