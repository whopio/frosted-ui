import * as React from 'react';
import { IconProps } from './types';

export const BountiesFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BountiesFilled12"
      {...props}
    >
      <path
        d="M6.519.038C10.099.038 13 2.94 13 6.519 13 10.099 10.098 13 6.519 13c-3.58 0-6.48-2.902-6.481-6.481C.038 2.939 2.94.038 6.519.038zm-.038 3.338c-1.715 0-3.105 1.39-3.105 3.105s1.39 3.105 3.105 3.105 3.105-1.39 3.105-3.105-1.39-3.105-3.105-3.105zm0 1.35c.97 0 1.755.786 1.755 1.755 0 .97-.786 1.755-1.755 1.755-.97 0-1.755-.786-1.755-1.755 0-.97.786-1.755 1.755-1.755z"
        fill={color}
      />
    </svg>
  );
};

BountiesFilled12.category = 'Interface General';

export default BountiesFilled12;
