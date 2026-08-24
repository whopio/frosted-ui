import * as React from 'react';
import { IconProps } from './types';

export const Bold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Bold12"
      {...props}
    >
      <path
        d="M6.626 1.125c1.519 0 2.75 1.231 2.75 2.75V4c0 .674-.244 1.29-.647 1.769C9.423 6.268 9.876 7.08 9.876 8v.125c0 1.519-1.231 2.75-2.75 2.75H3.371c-.69 0-1.25-.56-1.25-1.25v-7.25c0-.69.56-1.25 1.25-1.25h3.255zm-3.005 8.25h3.505c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25H3.621v2.625zm0-4.125h3.005c.69 0 1.25-.56 1.25-1.25v-.125c0-.69-.56-1.25-1.25-1.25H3.621V5.25z"
        fill={color}
      />
    </svg>
  );
};

Bold12.category = 'Text Formatting';

export default Bold12;
