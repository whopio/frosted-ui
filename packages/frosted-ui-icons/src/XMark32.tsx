import * as React from 'react';
import { IconProps } from './types';

export const XMark32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M28.9697 1.9698C29.2626 1.67705 29.7374 1.67703 30.0303 1.9698C30.323 2.26267 30.323 2.7375 30.0303 3.03035L17.0605 16.0001L30.0303 28.9698C30.3229 29.2627 30.323 29.7375 30.0303 30.0303C29.7374 30.3231 29.2626 30.323 28.9697 30.0303L16 17.0606L3.03027 30.0303C2.73743 30.3232 2.26263 30.3231 1.96973 30.0303C1.67692 29.7375 1.67687 29.2627 1.96973 28.9698L14.9395 16.0001L1.96973 3.03035C1.67686 2.73748 1.67691 2.2627 1.96973 1.9698C2.26263 1.67697 2.7374 1.67693 3.03027 1.9698L16 14.9395L28.9697 1.9698Z"
        fill={color}
      />
    </svg>
  );
};

XMark32.category = 'Interface General';

export default XMark32;
