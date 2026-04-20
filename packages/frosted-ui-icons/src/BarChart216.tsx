import * as React from 'react';
import { IconProps } from './types';

export const BarChart216 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 7C2.66421 7 3 7.33579 3 7.75V13.25C3 13.6642 2.66421 14 2.25 14C1.83579 14 1.5 13.6642 1.5 13.25V7.75C1.5 7.33579 1.83579 7 2.25 7ZM6.25 1C6.66421 1 7 1.33579 7 1.75V13.25C7 13.6642 6.66421 14 6.25 14C5.83579 14 5.5 13.6642 5.5 13.25V1.75C5.5 1.33579 5.83579 1 6.25 1ZM10.25 8.5C10.6642 8.5 11 8.83579 11 9.25V13.25C11 13.6642 10.6642 14 10.25 14C9.83579 14 9.5 13.6642 9.5 13.25V9.25C9.5 8.83579 9.83579 8.5 10.25 8.5ZM14.25 4.5C14.6642 4.5 15 4.83579 15 5.25V13.25C15 13.6642 14.6642 14 14.25 14C13.8358 14 13.5 13.6642 13.5 13.25V5.25C13.5 4.83579 13.8358 4.5 14.25 4.5Z"
        fill={color}
      />
    </svg>
  );
};

BarChart216.category = 'Stats & Charts';

export default BarChart216;
