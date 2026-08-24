import * as React from 'react';
import { IconProps } from './types';

export const BulbBlankFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BulbBlankFilled24"
      {...props}
    >
      <path
        d="M15.75 21.502c.414 0 .75.336.75.75s-.336.75-.75.75h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5zM12 1c4.694 0 8.5 3.806 8.5 8.5 0 2.374-.975 4.52-2.543 6.06-.593.583-.957 1.263-.957 1.94 0 1.38-1.12 2.5-2.5 2.5h-5C8.12 20 7 18.88 7 17.5c0-.677-.364-1.357-.957-1.94C4.475 14.02 3.5 11.874 3.5 9.5 3.5 4.806 7.306 1 12 1z"
        fill={color}
      />
    </svg>
  );
};

BulbBlankFilled24.category = 'Objects';

export default BulbBlankFilled24;
