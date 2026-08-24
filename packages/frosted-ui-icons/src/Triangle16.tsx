import * as React from 'react';
import { IconProps } from './types';

export const Triangle16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Triangle16"
      {...props}
    >
      <path
        d="M1.921 11.647l4.817-9.031c.538-1.01 1.985-1.01 2.524 0l4.816 9.031c.508.953-.182 2.103-1.261 2.103H3.182c-1.08 0-1.77-1.15-1.262-2.103z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Triangle16.category = 'Interface General';

export default Triangle16;
