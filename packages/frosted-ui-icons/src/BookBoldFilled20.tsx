import * as React from 'react';
import { IconProps } from './types';

export const BookBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BookBoldFilled20"
      {...props}
    >
      <path
        d="M13.121 2.197c1.7-.44 3.601-.152 5.411.987.29.183.467.503.467.846v12.357c0 .354-.189.683-.495.863-.306.179-.685.182-.994.009-2.106-1.183-4.261-.682-5.71.474-.294.235-.799.041-.799-.335V3.414c0-.127.06-.247.165-.32.59-.407 1.248-.714 1.955-.897zm-11.65.987c1.81-1.14 3.71-1.428 5.41-.987.707.183 1.365.49 1.955.896.105.073.165.193.165.32v13.982c0 .377-.505.571-.799.337-1.449-1.156-3.604-1.655-5.709-.473-.31.173-.688.17-.994-.01-.306-.179-.496-.507-.496-.862V4.03c0-.343.177-.663.468-.846z"
        fill={color}
      />
    </svg>
  );
};

BookBoldFilled20.category = 'Communication';

export default BookBoldFilled20;
