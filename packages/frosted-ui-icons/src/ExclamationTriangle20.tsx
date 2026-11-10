import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangle20"
      {...props}
    >
      <path
        d="M7.77 1.738c.97-1.755 3.493-1.755 4.463 0l7.45 13.479c.939 1.7-.291 3.783-2.233 3.783H2.554C.612 19-.618 16.916.32 15.217l7.45-13.479zm3.15.726c-.399-.723-1.438-.723-1.837 0l-7.45 13.478c-.385.7.122 1.558.92 1.558H17.45c.8 0 1.306-.858.92-1.558L10.92 2.464zM10.003 13.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-7c.414 0 .75.336.75.75v4c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangle20.category = 'Interface General';

export default ExclamationTriangle20;
