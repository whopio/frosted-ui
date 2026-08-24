import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhoneBold24"
      {...props}
    >
      <path
        d="M15 1c2.761 0 5 2.239 5 5v12c0 2.761-2.239 5-5 5H9c-2.761 0-5-2.239-5-5V6c0-2.761 2.239-5 5-5h6zM9 3C7.343 3 6 4.343 6 6v12c0 1.657 1.343 3 3 3h6c1.657 0 3-1.343 3-3V6c0-1.657-1.343-3-3-3H9zm5.25 15c.552 0 1 .448 1 1s-.448 1-1 1h-4.5c-.552 0-1-.448-1-1s.448-1 1-1h4.5z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBold24.category = 'Objects';

export default MobilePhoneBold24;
