import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.4683 9.89445C16.1749 10.3228 16.1745 11.3484 15.4674 11.7762L8.90308 15.7478C8.34615 16.0846 7.64745 16.0838 7.09063 15.7468L0.530259 11.7762C-0.176373 11.3483 -0.176906 10.3228 0.529283 9.89445L2.20697 8.87788L6.31526 11.3651C7.34934 11.991 8.6461 11.9915 9.68041 11.3661L13.7906 8.87788L15.4683 9.89445ZM7.09161 0.253106C7.6485 -0.0840911 8.34701 -0.0837714 8.90406 0.253106L15.4693 4.22761C16.1763 4.65584 16.1756 5.6825 15.4683 6.11037L8.90406 10.081C8.34707 10.4179 7.64851 10.4181 7.09161 10.081L0.531236 6.10939C-0.175389 5.68134 -0.176341 4.65581 0.530259 4.22761L7.09161 0.253106Z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled16.category = 'Interface General';

export default ConnectionFilled16;
