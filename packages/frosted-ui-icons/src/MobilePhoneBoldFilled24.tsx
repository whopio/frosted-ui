import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhoneBoldFilled24"
      {...props}
    >
      <path
        d="M15 1c2.761 0 5 2.239 5 5v12c0 2.761-2.239 5-5 5H9c-2.761 0-5-2.239-5-5V6c0-2.761 2.239-5 5-5h6zM9.75 19c-.552 0-1 .448-1 1s.448 1 1 1h4.5c.552 0 1-.448 1-1s-.448-1-1-1h-4.5z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBoldFilled24.category = 'Objects';

export default MobilePhoneBoldFilled24;
