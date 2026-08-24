import * as React from 'react';
import { IconProps } from './types';

export const EyeBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeBold12"
      {...props}
    >
      <path
        d="M6 1c1.98 0 3.431 1.125 4.354 2.17.928 1.05 1.438 2.147 1.545 2.39.124.281.124.599 0 .88-.107.243-.617 1.34-1.545 2.39C9.431 9.875 7.98 11 6 11c-1.98 0-3.432-1.125-4.355-2.17C.717 7.78.207 6.683.1 6.44c-.124-.281-.124-.599 0-.88l.156-.329c.232-.46.693-1.273 1.39-2.061C2.567 2.125 4.02 1 6 1zm0 2c-1.166 0-2.118.657-2.856 1.493C2.654 5.05 2.308 5.63 2.112 6c.196.37.542.951 1.032 1.507C3.882 8.343 4.834 9 6 9c1.165 0 2.117-.657 2.855-1.493.49-.555.835-1.136 1.031-1.507-.196-.37-.54-.952-1.03-1.507C8.115 3.657 7.165 3 6 3zm0 1c1.104 0 2 .895 2 2s-.896 2-2 2c-1.105 0-2-.896-2-2s.895-2 2-2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

EyeBold12.category = 'Accessibility';

export default EyeBold12;
