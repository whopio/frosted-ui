import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.46424 6.46447L9.99978 10M13.5353 13.5355L9.99978 10M9.99978 10L6.46424 13.5355M9.99978 10L13.5353 6.46447"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBold20.category = 'Product Icons';

export default XMarkSmallBold20;
