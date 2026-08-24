import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpBold16"
      {...props}
    >
      <path
        d="M5.913 2.27c.877-1.689 3.295-1.689 4.172 0l4.607 8.875c1.14 2.194-1.1 4.607-3.374 3.635l-3.235-1.385c-.053-.022-.113-.022-.166 0l-3.24 1.386c-2.273.972-4.512-1.442-3.372-3.636L5.913 2.27zm2.397.922c-.131-.251-.49-.251-.622 0L3.08 12.067c-.274.528.264 1.108.81.875l3.112-1.331V8.736c0-.552.448-1 1-1s1 .448 1 1v2.876l3.103 1.329c.547.234 1.086-.347.812-.875L8.31 3.192z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBold16.category = 'Communication';

export default PaperAirplaneUpBold16;
