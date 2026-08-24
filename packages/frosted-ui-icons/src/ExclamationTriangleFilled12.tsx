import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleFilled12"
      {...props}
    >
      <path
        d="M4.279 1.633c.734-1.377 2.707-1.377 3.441 0l4 7.5C12.412 10.432 11.471 12 10 12H2C.527 12-.415 10.43.278 9.133l4-7.5zm1.72 6.617c-.414 0-.75.336-.75.75s.336.75.75.75c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm0-4c-.414 0-.75.336-.75.75v1.75c0 .414.336.75.75.75.415 0 .75-.336.75-.75V5c0-.414-.335-.75-.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleFilled12.category = 'Interface General';

export default ExclamationTriangleFilled12;
