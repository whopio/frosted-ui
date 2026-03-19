import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.75 6.25C3.7165 6.25 4.5 7.0335 4.5 8C4.5 8.9665 3.7165 9.75 2.75 9.75C1.7835 9.75 1 8.9665 1 8C1 7.0335 1.7835 6.25 2.75 6.25ZM8 6.25C8.9665 6.25 9.75 7.0335 9.75 8C9.75 8.9665 8.9665 9.75 8 9.75C7.0335 9.75 6.25 8.9665 6.25 8C6.25 7.0335 7.0335 6.25 8 6.25ZM13.25 6.25C14.2165 6.25 15 7.0335 15 8C15 8.9665 14.2165 9.75 13.25 9.75C12.2835 9.75 11.5 8.9665 11.5 8C11.5 7.0335 12.2835 6.25 13.25 6.25Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalFilled16.category = 'Product Icons';

export default ThreeDotsHorizontalFilled16;
