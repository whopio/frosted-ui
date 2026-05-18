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
        d="M28.9696 1.96964C29.2625 1.67689 29.7373 1.67686 30.0302 1.96964C30.3229 2.26251 30.3229 2.73734 30.0302 3.03019L17.0605 15.9999L30.0302 28.9696C30.3228 29.2625 30.3229 29.7374 30.0302 30.0302C29.7374 30.3229 29.2625 30.3228 28.9696 30.0302L15.9999 17.0605L3.03018 30.0302C2.73734 30.323 2.26253 30.3229 1.96963 30.0302C1.67682 29.7373 1.67677 29.2625 1.96963 28.9696L14.9394 15.9999L1.96963 3.03019C1.67676 2.73732 1.67682 2.26254 1.96963 1.96964C2.26253 1.67681 2.7373 1.67677 3.03018 1.96964L15.9999 14.9394L28.9696 1.96964Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMark32.category = 'Interface General';

export default XMark32;
