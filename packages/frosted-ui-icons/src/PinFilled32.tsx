import * as React from 'react';
import { IconProps } from './types';

export const PinFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.2493 1C22.3204 1 23.9993 2.67893 23.9993 4.75V12.2949C23.9994 12.6506 24.0774 13.0025 24.2269 13.3252L26.7054 18.6729C27.8571 21.158 26.042 23.9997 23.303 24H16.7493V30.25C16.7493 30.6642 16.4135 31 15.9993 31C15.5853 30.9998 15.2493 30.6641 15.2493 30.25V24H8.69562C5.95693 23.9994 4.14181 21.1579 5.29328 18.6729L7.77179 13.3252C7.92135 13.0025 7.99929 12.6506 7.99933 12.2949V4.75C7.99933 2.67907 9.67846 1.00023 11.7493 1H20.2493Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinFilled32.category = 'Interface General';

export default PinFilled32;
