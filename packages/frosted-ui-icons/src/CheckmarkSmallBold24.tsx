import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBold24"
      {...props}
    >
      <path
        d="M18.543 6.293c.39-.39 1.024-.39 1.415 0 .39.39.39 1.024 0 1.414l-10.501 10.5c-.188.188-.442.293-.707.293-.265 0-.52-.106-.707-.293l-4.25-4.25c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l3.543 3.543 9.793-9.793z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBold24.category = 'Checkmarks';

export default CheckmarkSmallBold24;
