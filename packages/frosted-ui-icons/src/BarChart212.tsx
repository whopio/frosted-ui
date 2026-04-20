import * as React from 'react';
import { IconProps } from './types';

export const BarChart212 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.25 5C1.66421 5 2 5.33579 2 5.75V10.25C2 10.6642 1.66421 11 1.25 11C0.835787 11 0.5 10.6642 0.5 10.25V5.75C0.5 5.33579 0.835787 5 1.25 5ZM4.25 1C4.66421 1 5 1.33579 5 1.75V10.25C5 10.6642 4.66421 11 4.25 11C3.83579 11 3.5 10.6642 3.5 10.25V1.75C3.5 1.33579 3.83579 1 4.25 1ZM7.25 7C7.66421 7 8 7.33579 8 7.75V10.25C8 10.6642 7.66421 11 7.25 11C6.83579 11 6.5 10.6642 6.5 10.25V7.75C6.5 7.33579 6.83579 7 7.25 7ZM10.25 3.5C10.6642 3.5 11 3.83579 11 4.25V10.25C11 10.6642 10.6642 11 10.25 11C9.83579 11 9.5 10.6642 9.5 10.25V4.25C9.5 3.83579 9.83579 3.5 10.25 3.5Z"
        fill={color}
      />
    </svg>
  );
};

BarChart212.category = 'Stats & Charts';

export default BarChart212;
