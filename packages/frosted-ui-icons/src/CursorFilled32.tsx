import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.95288 6.8894C2.08593 4.44371 4.44371 2.08593 6.8894 2.95288L27.9929 10.4363C30.651 11.3795 30.7521 15.102 28.1492 16.1882L22.7849 18.4246L27.3474 22.9871C28.5509 24.1912 28.5513 26.1435 27.3474 27.3474C26.1435 28.5513 24.1912 28.551 22.9871 27.3474L18.4246 22.7859L16.1882 28.1492C15.102 30.752 11.3795 30.651 10.4363 27.9929L2.95288 6.8894Z"
        fill={color}
      />
    </svg>
  );
};

export default CursorFilled32;
