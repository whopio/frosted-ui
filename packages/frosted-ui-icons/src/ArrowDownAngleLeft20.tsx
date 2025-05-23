import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M16.6875 13C17.9647 13 19 11.9647 19 10.6875V3.75C19 3.33579 18.6642 3 18.25 3C17.8358 3 17.5 3.33579 17.5 3.75V10.6875C17.5 11.1362 17.1362 11.5 16.6875 11.5H3.64659L6.26296 9.04715C6.56514 8.76385 6.58045 8.28923 6.29715 7.98704C6.01385 7.68486 5.53923 7.66955 5.23704 7.95285L1.23704 11.7028C1.08581 11.8446 1 12.0427 1 12.25C1 12.4573 1.08581 12.6554 1.23704 12.7972L5.23704 16.5472C5.53923 16.8305 6.01385 16.8151 6.29715 16.513C6.58045 16.2108 6.56514 15.7361 6.26296 15.4528L3.64659 13H16.6875Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowDownAngleLeft20;
