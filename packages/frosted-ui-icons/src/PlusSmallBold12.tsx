import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmallBold12"
      {...props}
    >
      <path
        d="M6 2c.552 0 1 .448 1 1v2h2c.552 0 1 .448 1 1s-.448 1-1 1H7v2c0 .552-.448 1-1 1s-1-.448-1-1V7H3c-.552 0-1-.448-1-1s.448-1 1-1h2V3c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBold12.category = 'Interface General';

export default PlusSmallBold12;
