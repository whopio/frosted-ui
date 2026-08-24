import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowLeftRightBold24"
      {...props}
    >
      <path
        d="M17.707 12.293c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.023 0 1.414L19.586 17H2c-.552 0-1 .448-1 1s.448 1 1 1h17.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0l5-5c.188-.188.293-.442.293-.707 0-.265-.105-.52-.293-.707l-5-5zm-10-12c-.39-.39-1.024-.39-1.414 0l-5 5c-.39.391-.39 1.024 0 1.415l5 5c.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414L4.414 7 22 7c.552 0 1-.448 1-1s-.448-1-1-1H4.414l3.293-3.293c.39-.39.39-1.024 0-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRightBold24.category = 'Arrows';

export default DoubleArrowLeftRightBold24;
