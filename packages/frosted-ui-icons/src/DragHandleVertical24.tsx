import * as React from 'react';
import { IconProps } from './types';

export const DragHandleVertical24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DragHandleVertical24"
      {...props}
    >
      <path
        d="M8.25 18.25c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S6.5 20.966 6.5 20s.784-1.75 1.75-1.75zm7.5 0c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S14 20.966 14 20s.784-1.75 1.75-1.75zm-7.5-8c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S6.5 12.966 6.5 12s.784-1.75 1.75-1.75zm7.5 0c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S14 12.966 14 12s.784-1.75 1.75-1.75zm-7.5-8C9.216 2.25 10 3.034 10 4s-.784 1.75-1.75 1.75S6.5 4.966 6.5 4s.784-1.75 1.75-1.75zm7.5 0c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S14 4.966 14 4s.784-1.75 1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

DragHandleVertical24.category = 'Interface General';

export default DragHandleVertical24;
