import * as React from 'react';
import { IconProps } from './types';

export const Play12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.25 10.0701V1.9299C2.25 1.01523 3.26608 0.466622 4.03084 0.968374L10.2344 5.03847C10.9267 5.49262 10.9267 6.50738 10.2344 6.96153L4.03084 11.0316C3.26608 11.5334 2.25 10.9848 2.25 10.0701Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Play12.category = 'Sound & Music';

export default Play12;
