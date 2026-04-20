import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.4995 3.25C22.3279 3.25 22.9995 3.92157 22.9995 4.75V13.375C22.9995 15.239 21.4885 16.75 19.6245 16.75H6.27295L8.02979 18.4092C8.63203 18.978 8.65914 19.928 8.09033 20.5303C7.52149 21.1323 6.57143 21.1596 5.96924 20.5908L1.46924 16.3408C1.16938 16.0575 0.999512 15.6626 0.999512 15.25C0.999512 14.8374 1.16938 14.4425 1.46924 14.1592L5.96924 9.90918C6.57143 9.34045 7.52149 9.3677 8.09033 9.96973C8.65914 10.572 8.63203 11.522 8.02979 12.0908L6.27295 13.75H19.6245C19.8316 13.75 19.9995 13.5821 19.9995 13.375V4.75C19.9995 3.92173 20.6713 3.25025 21.4995 3.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftBoldFilled24.category = 'Arrows';

export default ArrowDownAngleLeftBoldFilled24;
