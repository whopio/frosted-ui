import * as React from 'react';
import { IconProps } from './types';

export const XMark20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.9686 1.96962C17.2615 1.67677 17.7372 1.67686 18.0302 1.96962C18.3227 2.26246 18.3228 2.73733 18.0302 3.03016L11.0604 9.99989L18.0302 16.9696C18.3227 17.2625 18.3228 17.7374 18.0302 18.0302C17.7372 18.3229 17.2615 18.323 16.9686 18.0302L9.99988 11.0604L3.03015 18.0302C2.73734 18.323 2.26251 18.3228 1.96961 18.0302C1.67687 17.7373 1.67677 17.2625 1.96961 16.9696L8.93933 9.99989L1.96961 3.03016C1.67676 2.73731 1.67684 2.26252 1.96961 1.96962C2.26251 1.67683 2.73729 1.67676 3.03015 1.96962L9.99988 8.93934L16.9686 1.96962Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMark20.category = 'Interface General';

export default XMark20;
