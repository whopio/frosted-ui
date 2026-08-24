import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhoneBoldFilled20"
      {...props}
    >
      <path
        d="M12.5 1c2.347 0 4.25 1.903 4.25 4.25v9.5c0 2.347-1.903 4.25-4.25 4.25h-5c-2.347 0-4.25-1.903-4.25-4.25v-9.5C3.25 2.903 5.153 1 7.5 1h5zM8.25 15c-.552 0-1 .448-1 1s.448 1 1 1h3.5c.552 0 1-.448 1-1s-.448-1-1-1h-3.5z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBoldFilled20.category = 'Objects';

export default MobilePhoneBoldFilled20;
