import * as React from 'react';
import { IconProps } from './types';

export const BarGraph12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.75 0C7.7165 0 8.5 0.783502 8.5 1.75V3H10.25C11.2165 3 12 3.7835 12 4.75V10.25C12 11.2165 11.2165 12 10.25 12H1.75C0.783502 12 0 11.2165 0 10.25V7.25C0 6.2835 0.783502 5.5 1.75 5.5H3.5V1.75C3.5 0.783502 4.2835 0 5.25 0H6.75ZM1.75 7C1.61193 7 1.5 7.11193 1.5 7.25V10.25C1.5 10.3881 1.61193 10.5 1.75 10.5H3.5V7H1.75ZM5.25 1.5C5.11193 1.5 5 1.61193 5 1.75V10.5H7V1.75C7 1.61193 6.88807 1.5 6.75 1.5H5.25ZM8.5 10.5H10.25C10.3881 10.5 10.5 10.3881 10.5 10.25V4.75C10.5 4.61193 10.3881 4.5 10.25 4.5H8.5V10.5Z"
        fill={color}
      />
    </svg>
  );
};

BarGraph12.category = 'Stats & Charts';

export default BarGraph12;
