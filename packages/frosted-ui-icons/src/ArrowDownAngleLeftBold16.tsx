import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.9998 2.25C14.5521 2.25 14.9998 2.69772 14.9998 3.25V8.5C14.9998 9.74264 13.9924 10.75 12.7498 10.75H4.51347L6.17265 12.2607C6.58091 12.6325 6.61072 13.2645 6.23906 13.6729C5.86725 14.0811 5.23528 14.1109 4.82695 13.7393L1.32695 10.5518C1.1214 10.3645 1.00252 10.1003 0.999802 9.82227C0.997136 9.54419 1.11034 9.2771 1.3123 9.08594L4.8123 5.77344C5.21342 5.39388 5.84675 5.41143 6.22636 5.8125C6.60593 6.21362 6.5884 6.84695 6.1873 7.22656L4.57793 8.75H12.7498C12.8879 8.75 12.9998 8.63807 12.9998 8.5V3.25C12.9998 2.69783 13.4477 2.25019 13.9998 2.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftBold16.category = 'Arrows';

export default ArrowDownAngleLeftBold16;
