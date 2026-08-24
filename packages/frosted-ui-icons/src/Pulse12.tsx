import * as React from 'react';
import { IconProps } from './types';

export const Pulse12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pulse12"
      {...props}
    >
      <path
        d="M10.47 3.47c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L7.707 8.354c-.39.39-1.024.39-1.414 0L4 6.06 1.53 8.53c-.293.292-.767.292-1.06 0-.293-.294-.293-.768 0-1.061l2.823-2.823.076-.069c.367-.299.895-.299 1.262 0l.076.069L7 6.94l3.47-3.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pulse12.category = 'Stats & Charts';

export default Pulse12;
