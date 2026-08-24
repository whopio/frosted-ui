import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmallBold16"
      {...props}
    >
      <path
        d="M8 3c.552 0 1 .448 1 1v3h3c.552 0 1 .448 1 1s-.448 1-1 1H9v3c0 .552-.448 1-1 1s-1-.448-1-1V9H4c-.552 0-1-.448-1-1s.448-1 1-1h3V4c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBold16.category = 'Interface General';

export default PlusSmallBold16;
