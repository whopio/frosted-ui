import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracket24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M2.5 16.75L2.5 18.75C2.5 20.2688 3.73122 21.5 5.25 21.5H18.75C20.2688 21.5 21.5 20.2688 21.5 18.75V16.75C21.5 16.3358 21.8358 16 22.25 16C22.6642 16 23 16.3358 23 16.75V18.75C23 21.0972 21.0972 23 18.75 23H5.25C2.90279 23 1 21.0972 1 18.75L1 16.75C1 16.3358 1.33579 16 1.75 16C2.16421 16 2.5 16.3358 2.5 16.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M15.2004 1.98966C15.4823 1.68613 15.9568 1.66856 16.2603 1.95041L19.7603 5.20041C19.9132 5.34232 20 5.54145 20 5.75C20 5.95856 19.9132 6.15769 19.7603 6.2996L16.2603 9.5496C15.9568 9.83145 15.4823 9.81388 15.2004 9.51034C14.9186 9.20681 14.9361 8.73226 15.2397 8.45041L17.3401 6.5H13.5C11.8431 6.5 10.5 7.84315 10.5 9.5V16.25C10.5 16.6642 10.1642 17 9.75 17C9.33579 17 9 16.6642 9 16.25V9.5C9 7.01472 11.0147 5 13.5 5H17.3401L15.2397 3.0496C14.9361 2.76775 14.9186 2.2932 15.2004 1.98966Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowUpRightFromBracket24;
