import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.15567 25.0151L13.2605 4.67728C14.4777 2.44811 17.6818 2.45647 18.8873 4.69196L29.8548 25.0298C31.0049 27.1624 29.4604 29.75 27.0375 29.75H4.96507C2.53477 29.75 0.990984 27.1481 2.15567 25.0151Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleFilled32.category = 'Interface General';

export default TriangleFilled32;
