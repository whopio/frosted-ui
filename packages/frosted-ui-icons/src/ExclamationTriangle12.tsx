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
        d="M4.279 1.633c.734-1.377 2.707-1.376 3.441 0l4 7.5C12.412 10.432 11.471 12 10 12H2C.527 12-.414 10.432.278 9.133l4-7.5zm2.118.705c-.17-.317-.626-.318-.795 0l-4 7.5c-.16.3.058.662.397.662h8c.34 0 .558-.362.398-.662l-4-7.5zM5.999 8.25c.415 0 .75.336.75.75s-.335.75-.75.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0-4c.415 0 .75.336.75.75v1.75c0 .414-.335.75-.75.75-.414 0-.75-.336-.75-.75V5c0-.414.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangle12.category = 'Interface General';

export default ExclamationTriangle12;
