import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBold16"
      {...props}
    >
      <path
        d="M12.293 2.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L9.414 8l4.293 4.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L8 9.414l-4.293 4.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L6.586 8 2.293 3.707c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0L8 6.586l4.293-4.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBold16.category = 'Interface General';

export default XMarkBold16;
