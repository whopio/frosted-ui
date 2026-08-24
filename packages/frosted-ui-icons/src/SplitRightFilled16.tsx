import * as React from 'react';
import { IconProps } from './types';

export const SplitRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitRightFilled16"
      {...props}
    >
      <path
        d="M11.782 15.273c.566.396 1.345.26 1.741-.305l1.753-2.5c.302-.431.302-1.005 0-1.436l-1.753-2.5c-.396-.565-1.176-.702-1.74-.306-.566.397-.703 1.176-.306 1.742l.373.532h-.298c-.636 0-1.22-.344-1.53-.9L9.13 7.993c.309-.567.62-1.129.893-1.617.301-.54.876-.876 1.505-.876h.322l-.373.532c-.397.565-.26 1.345.305 1.741.566.396 1.345.26 1.741-.305l1.752-2.5c.302-.431.302-1.005 0-1.436l-1.752-2.5c-.396-.565-1.176-.702-1.74-.306-.566.397-.702 1.176-.306 1.742L11.85 3h-.322c-1.523 0-2.938.816-3.687 2.156-.268.48-.574 1.033-.88 1.594H5.662C5.23 6.003 4.424 5.5 3.5 5.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.925 0 1.73-.503 2.163-1.25h1.306l.869 1.564c.75 1.35 2.172 2.186 3.715 2.186h.298l-.373.532c-.397.565-.26 1.345.305 1.741z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitRightFilled16.category = 'Arrows';

export default SplitRightFilled16;
