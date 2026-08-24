import * as React from 'react';
import { IconProps } from './types';

export const BellFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BellFilled24"
      {...props}
    >
      <path
        d="M15.5 20.5c.18 0 .3.184.213.342C15.001 22.152 13.638 23 12 23c-1.639 0-3.002-.848-3.714-2.158-.086-.158.034-.342.214-.342h7zM12 1c3.26 0 5.233 1.703 6.377 3.7 1.12 1.955 1.464 4.205 1.572 5.47.047.546.219 1.044.518 1.434l.428.56c1.171 1.525 1.171 3.647 0 5.173-.804 1.048-2.05 1.663-3.372 1.663H6.451c-1.304 0-2.536-.599-3.342-1.624-1.21-1.541-1.21-3.71 0-5.252l.417-.53c.304-.386.479-.883.526-1.429.109-1.266.454-3.515 1.574-5.469C6.77 2.701 8.74 1 12 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BellFilled24.category = 'Interface General';

export default BellFilled24;
