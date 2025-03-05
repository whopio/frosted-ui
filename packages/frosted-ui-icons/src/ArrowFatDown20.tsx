import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown20 = ({
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
        d="M11.8748 2.29169H8.12487C7.66462 2.29169 7.29153 2.66478 7.29153 3.12502V11.4584H4.45018C4.09376 11.4584 3.90187 11.8769 4.13445 12.1469L9.36842 18.225C9.70083 18.6111 10.2988 18.6111 10.6313 18.225L15.8652 12.1469C16.0978 11.8769 15.906 11.4584 15.5495 11.4584H12.7082V3.12502C12.7082 2.66479 12.3351 2.29169 11.8748 2.29169Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatDown20;
