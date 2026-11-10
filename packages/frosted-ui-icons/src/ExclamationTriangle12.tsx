import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangle12"
      {...props}
    >
      <path
        d="M4.28 1.633c.733-1.377 2.707-1.377 3.44 0l4 7.5C12.414 10.432 11.473 12 10 12H2C.528 12-.413 10.432.28 9.133l4-7.5zm2.117.705c-.169-.318-.625-.318-.794 0l-4 7.5c-.16.3.057.662.397.662h8c.34 0 .557-.363.398-.662l-4-7.5zM6 8.25c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm0-4c.414 0 .75.336.75.75v1.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangle12.category = 'Interface General';

export default ExclamationTriangle12;
