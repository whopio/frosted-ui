import * as React from 'react';
import { IconProps } from './types';

export const BountiesBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31362 0.000105661 12 2.68636 12 6C11.9999 9.31355 9.31355 11.9999 6 12C2.68636 12 0.000105659 9.31362 0 6C0 2.68629 2.68629 0 6 0ZM6 1.59961C3.56995 1.59961 1.59961 3.56995 1.59961 6C1.59971 8.42996 3.57001 10.3994 6 10.3994C8.4299 10.3993 10.3993 8.4299 10.3994 6C10.3994 3.57001 8.42996 1.59971 6 1.59961ZM6 3C7.65676 3.00011 9 4.34321 9 6C8.99989 7.6567 7.6567 8.99989 6 9C4.34321 9 3.00011 7.65676 3 6C3 4.34315 4.34315 3 6 3ZM6 4.59961C5.2268 4.59961 4.59961 5.2268 4.59961 6C4.59971 6.77311 5.22687 7.39941 6 7.39941C6.77304 7.39931 7.39931 6.77304 7.39941 6C7.39941 5.22687 6.77311 4.59971 6 4.59961Z"
        fill={color}
      />
    </svg>
  );
};

BountiesBold12.category = 'Interface General';

export default BountiesBold12;
