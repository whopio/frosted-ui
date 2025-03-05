import * as React from 'react';
import { IconProps } from './types';

export const Facebook32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.7787 28.9413V20.0748H10.0268V16H12.7787V14.2444C12.7787 9.70588 14.832 7.6044 19.2853 7.6044C20.1284 7.6044 21.5838 7.76959 22.1817 7.93477V11.6259C21.8668 11.594 21.3172 11.5777 20.6401 11.5777C18.4534 11.5777 17.6105 12.4044 17.6105 14.5592V16H21.9684L21.2217 20.0741H17.6165V29.2369C24.2182 28.4372 29.3333 22.816 29.3333 16C29.3333 8.63625 23.3637 2.66663 16 2.66663C8.63625 2.66663 2.66663 8.63625 2.66663 16C2.66663 22.2532 6.9708 27.5004 12.7787 28.9413Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Facebook32;
