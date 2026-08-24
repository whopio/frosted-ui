import * as React from 'react';
import { IconProps } from './types';

export const DragHandleHorizontal24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DragHandleHorizontal24"
      {...props}
    >
      <path
        d="M18.25 15.75c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75zm0-7.5c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75S20.966 10 20 10s-1.75-.784-1.75-1.75zm-8 7.5c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75zm0-7.5c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75S12.966 10 12 10s-1.75-.784-1.75-1.75zm-8 7.5c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75S4.966 17.5 4 17.5s-1.75-.784-1.75-1.75zm0-7.5c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75S4.966 10 4 10s-1.75-.784-1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

DragHandleHorizontal24.category = 'Interface General';

export default DragHandleHorizontal24;
