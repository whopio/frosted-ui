import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.3803 29.3027L1.90149 4.35239C1.31942 2.82028 2.82028 1.31942 4.3524 1.90147L29.3028 11.3802C30.4837 11.8289 30.6151 13.4471 29.522 14.0804L22.7925 17.9792C22.2249 18.308 22.1223 19.0851 22.585 19.55L29.6315 26.6286C30.0276 27.0265 30.25 27.5651 30.25 28.1266C30.25 29.2993 29.2994 30.2499 28.1267 30.2499C27.5652 30.2499 27.0266 30.0275 26.6287 29.6314L19.55 22.585C19.0851 22.1222 18.3081 22.2248 17.9792 22.7924L14.0805 29.5219C13.4472 30.615 11.829 30.4836 11.3803 29.3027Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorFilled32.category = 'Arrows';

export default CursorFilled32;
