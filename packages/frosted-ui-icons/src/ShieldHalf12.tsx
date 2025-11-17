import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.021 1.92448L6.39301 0.714489C6.14001 0.630489 5.862 0.630489 5.605 0.714489L1.979 1.92349C1.468 2.09449 1.125 2.57049 1.125 3.10849V5.95448C1.125 8.92348 3.631 10.2755 5.644 11.3615C5.755 11.4215 5.878 11.4515 6 11.4515C6.122 11.4515 6.245 11.4215 6.356 11.3615C8.369 10.2755 10.875 8.92348 10.875 5.95448V3.10849C10.875 2.57049 10.532 2.09448 10.021 1.92248V1.92448ZM9.375 5.95648C9.375 7.77448 7.995 8.75349 6 9.85049V2.16548L9.375 3.29048V5.95648Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ShieldHalf12;
