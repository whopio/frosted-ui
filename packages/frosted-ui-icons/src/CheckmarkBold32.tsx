import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBold32"
      {...props}
    >
      <path
        d="M27.293 8.043c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414l-16.5 16.5c-.188.187-.442.293-.707.293-.265 0-.52-.106-.707-.293l-7.5-7.5c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l6.793 6.793L27.293 8.043z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBold32.category = 'Checkmarks';

export default CheckmarkBold32;
