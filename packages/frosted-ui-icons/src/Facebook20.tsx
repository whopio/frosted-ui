import * as React from 'react';
import { IconProps } from './types';

export const Facebook20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.98666 18.0883V12.5467H6.26675V9.99996H7.98666V8.90271C7.98666 6.06616 9.26996 4.75273 12.0533 4.75273C12.5802 4.75273 13.4899 4.85598 13.8635 4.95922V7.26616C13.6667 7.24626 13.3232 7.23607 12.9 7.23607C11.5334 7.23607 11.0065 7.75273 11.0065 9.09946V9.99996H13.7302L13.2635 12.5463H11.0103V18.273C15.1364 17.7732 18.3333 14.26 18.3333 9.99996C18.3333 5.39764 14.6023 1.66663 9.99996 1.66663C5.39764 1.66663 1.66663 5.39764 1.66663 9.99996C1.66663 13.9082 4.35673 17.1877 7.98666 18.0883Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Facebook20;
