import * as React from 'react';
import { IconProps } from './types';

export const LockOpen12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C7.49224 0 8.79394 0.817101 9.48145 2.02832C9.74409 2.49123 9.35547 2.99985 8.82324 3C8.49953 3 8.21584 2.80056 8.02637 2.53809C7.57268 1.90948 6.83457 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4V5H9C10.3807 5 11.5 6.11929 11.5 7.5V9.5C11.5 10.8807 10.3807 12 9 12H3C1.61929 12 0.5 10.8807 0.5 9.5V7.5C0.5 6.47498 1.11724 5.59484 2 5.20898V4C2 1.79086 3.79086 0 6 0ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55229 10.5 10 10.0523 10 9.5V7.5C10 6.94772 9.55229 6.5 9 6.5H3Z"
        fill={color}
      />
    </svg>
  );
};

LockOpen12.category = 'Security';

export default LockOpen12;
