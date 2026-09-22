import * as React from 'react';
import { IconProps } from './types';

export const BriefcaseBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BriefcaseBoldFilled32"
      {...props}
    >
      <path
        d="M31 23.678C31 27.722 27.722 31 23.678 31H8.322C4.278 31 1 27.722 1 23.678V19.66c.985.835 2.259 1.34 3.651 1.34H27.35c1.392 0 2.666-.505 3.651-1.34v4.018zM19.237 1c2.492 0 4.513 2.02 4.513 4.513V8c4.01.039 7.25 3.301 7.25 7.321v.027C31 17.365 29.365 19 27.349 19H4.65C2.635 19 1 17.365 1 15.349v-.027c0-4.02 3.24-7.282 7.25-7.321V5.513C8.25 3.02 10.27 1 12.763 1h6.474zm-6.474 2c-1.388 0-2.513 1.125-2.513 2.513V8h11.5V5.513C21.75 4.125 20.625 3 19.237 3h-6.474z"
        fill={color}
      />
    </svg>
  );
};

BriefcaseBoldFilled32.category = 'Objects';

export default BriefcaseBoldFilled32;
