import * as React from 'react';
import { IconProps } from './types';

export const XMark12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMark12"
      {...props}
    >
      <path
        d="M9.97.97c.292-.293.767-.293 1.06 0 .293.293.293.768 0 1.06L7.06 6l3.97 3.969c.293.293.293.768 0 1.06-.293.293-.768.293-1.06 0L6 7.061l-3.97 3.97c-.293.292-.767.292-1.06 0-.293-.293-.293-.768 0-1.061L4.94 6 .97 2.03C.677 1.738.677 1.263.97.97c.293-.293.767-.293 1.06 0L6 4.94 9.97.97z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMark12.category = 'Interface General';

export default XMark12;
