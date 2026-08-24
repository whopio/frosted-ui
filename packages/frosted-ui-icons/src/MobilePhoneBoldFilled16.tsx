import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhoneBoldFilled16"
      {...props}
    >
      <path
        d="M9.5 1c2.071 0 3.75 1.679 3.75 3.75v6.5c0 2.071-1.679 3.75-3.75 3.75h-3c-2.071 0-3.75-1.679-3.75-3.75v-6.5C2.75 2.679 4.429 1 6.5 1h3zM7 11c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1H7z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBoldFilled16.category = 'Objects';

export default MobilePhoneBoldFilled16;
