import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquareBoldFilled24"
      {...props}
    >
      <path
        d="M16.25 1C19.978 1 23 4.022 23 7.75v8.5c0 3.728-3.022 6.75-6.75 6.75h-8.5C4.022 23 1 19.978 1 16.25v-8.5C1 4.022 4.022 1 7.75 1h8.5zm-4.249 9.25c-.69 0-1.25.56-1.25 1.25V17c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25zM12 5.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareBoldFilled24.category = 'Interface General';

export default InfoSquareBoldFilled24;
