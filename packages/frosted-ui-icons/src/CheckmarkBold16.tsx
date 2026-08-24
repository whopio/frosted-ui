import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBold16"
      {...props}
    >
      <path
        d="M13.293 3.698c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414L6.34 13.48c-.188.188-.442.294-.707.294-.265 0-.52-.106-.707-.293L1.293 9.846c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l2.926 2.925 7.66-7.66z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBold16.category = 'Checkmarks';

export default CheckmarkBold16;
