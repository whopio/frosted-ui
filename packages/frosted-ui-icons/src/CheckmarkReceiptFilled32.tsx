import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceiptFilled32"
      {...props}
    >
      <path
        d="M24.25 1C26.873 1 29 3.127 29 5.75v23.84c0 1.025-1.096 1.675-1.995 1.186l-5.36-2.914-4.903 2.92c-.457.271-1.027.272-1.484 0l-4.897-2.92-5.367 2.916c-.9.489-1.994-.163-1.994-1.186V5.75C3 3.127 5.127 1 7.75 1h16.5zm-2.97 9.22c-.293-.293-.767-.293-1.06 0l-6.1 6.1-2.34-2.34c-.293-.293-.767-.293-1.06 0-.293.292-.293.767 0 1.06l2.87 2.87c.14.14.331.22.53.22s.39-.08.53-.22l6.63-6.63c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptFilled32.category = 'Money & Shopping';

export default CheckmarkReceiptFilled32;
