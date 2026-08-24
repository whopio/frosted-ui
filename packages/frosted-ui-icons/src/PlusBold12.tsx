import * as React from 'react';
import { IconProps } from './types';

export const PlusBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusBold12"
      {...props}
    >
      <path
        d="M6 0c.552 0 1 .448 1 1v4h4c.552 0 1 .448 1 1s-.448 1-1 1H7v4c0 .552-.448 1-1 1s-1-.448-1-1V7H1c-.552 0-1-.448-1-1s.448-1 1-1h4V1c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusBold12.category = 'Interface General';

export default PlusBold12;
