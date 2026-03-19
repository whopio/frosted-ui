import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.34794 5.34835L7.99959 8M10.6512 10.6517L7.99959 8M7.99959 8L5.34794 10.6517M7.99959 8L10.6512 5.34835"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBoldFilled16.category = 'Product Icons';

export default XMarkSmallBoldFilled16;
