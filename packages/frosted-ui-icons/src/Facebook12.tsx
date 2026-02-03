import * as React from 'react';
import { IconProps } from './types';

export const Facebook12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.10583 2.94681 9.8725 4.90039 10.3633V7.5H3.5V6H4.90039V5.5C4.90039 3.98122 6.13161 2.75 7.65039 2.75H8.75V4.25H7.65039C6.96003 4.25 6.40039 4.80964 6.40039 5.5V6H8.25V7.5H6.40039V10.4805C8.69803 10.2778 10.5 8.35029 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5Z"
        fill={color}
      />
    </svg>
  );
};

Facebook12.category = 'Social & Brands';

export default Facebook12;
