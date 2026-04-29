import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 2C6.41421 2 6.75 2.33579 6.75 2.75V5.25H9.25C9.66421 5.25 10 5.58579 10 6C10 6.41421 9.66421 6.75 9.25 6.75H6.75V9.25C6.75 9.66421 6.41421 10 6 10C5.58579 10 5.25 9.66421 5.25 9.25V6.75H2.75C2.33579 6.75 2 6.41421 2 6C2 5.58579 2.33579 5.25 2.75 5.25H5.25V2.75C5.25 2.33579 5.58579 2 6 2Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmall12.category = 'Interface General';

export default PlusSmall12;
