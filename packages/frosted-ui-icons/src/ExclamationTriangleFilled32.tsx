import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleFilled32"
      {...props}
    >
      <path
        d="M12.686 3.979c1.475-2.548 5.154-2.548 6.629 0L30.473 23.25c1.478 2.553-.364 5.749-3.314 5.75H4.842C1.892 29 .05 25.803 1.528 23.25L12.686 3.98zM16.001 22c-.553 0-1 .448-1 1s.447 1 1 1c.552 0 1-.448 1-1s-.448-1-1-1zm0-12c-.415 0-.75.336-.75.75v8.5c0 .414.335.75.75.75.414 0 .75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleFilled32.category = 'Interface General';

export default ExclamationTriangleFilled32;
