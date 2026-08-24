import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleFilled20"
      {...props}
    >
      <path
        d="M7.77 1.738c.97-1.755 3.493-1.755 4.464 0l7.449 13.479c.939 1.7-.29 3.783-2.233 3.783H2.554C.612 19-.617 16.916.32 15.217l7.45-13.479zM10.003 13.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0-7c-.414 0-.75.336-.75.75v4c0 .414.336.75.75.75s.75-.336.75-.75v-4c0-.414-.336-.75-.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleFilled20.category = 'Interface General';

export default ExclamationTriangleFilled20;
