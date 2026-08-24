import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkCircleBold16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 2C4.962 2.5 2.5 4.962 2.5 8s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5S11.038 2.5 8 2.5zm1.793 3.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-3.5 3.5c-.39.39-1.024.39-1.414 0l-1.75-1.75c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L7 8.586l2.793-2.793z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleBold16.category = 'Checkmarks';

export default CheckmarkCircleBold16;
