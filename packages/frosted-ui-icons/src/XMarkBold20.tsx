import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBold20"
      {...props}
    >
      <path
        d="M16.293 2.293c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414L11.414 10l6.293 6.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L10 11.414l-6.293 6.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L8.586 10 2.293 3.707c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0L10 8.586l6.293-6.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBold20.category = 'Interface General';

export default XMarkBold20;
