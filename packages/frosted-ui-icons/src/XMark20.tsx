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
        d="M17.4697 1.46979C17.7626 1.17689 18.2374 1.17689 18.5303 1.46979C18.8231 1.76269 18.8231 2.23746 18.5303 2.53033L11.0605 10.0001L18.5303 17.4698C18.8231 17.7627 18.8231 18.2375 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L10 11.0606L2.53027 18.5303C2.2374 18.8232 1.76262 18.8232 1.46973 18.5303C1.17683 18.2374 1.17683 17.7627 1.46973 17.4698L8.93945 10.0001L1.46973 2.53033C1.17683 2.23744 1.17683 1.76268 1.46973 1.46979C1.76262 1.17689 2.23738 1.17689 2.53027 1.46979L10 8.93951L17.4697 1.46979Z"
        fill={color}
      />
    </svg>
  );
};

XMark20.category = 'Interface General';

export default XMark20;
