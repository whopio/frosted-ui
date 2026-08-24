import * as React from 'react';
import { IconProps } from './types';

export const Browser12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Browser12"
      {...props}
    >
      <path
        d="M9.15.5C10.724.5 12 1.776 12 3.35v5.3c0 1.574-1.276 2.85-2.85 2.85h-6.3C1.276 11.5 0 10.224 0 8.65v-5.3C0 1.776 1.276.5 2.85.5h6.3zm-7.65 6v2.15c0 .746.604 1.35 1.35 1.35h6.3c.746 0 1.35-.604 1.35-1.35V6.5h-9zM2.85 2c-.746 0-1.35.604-1.35 1.35V5h9V3.35C10.5 2.604 9.896 2 9.15 2h-6.3zm.65.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

Browser12.category = 'Interface General';

export default Browser12;
