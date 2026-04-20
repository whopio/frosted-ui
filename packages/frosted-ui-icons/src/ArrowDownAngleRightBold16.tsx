import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.99983 2.25C1.44755 2.25 0.999832 2.69772 0.999832 3.25V8.5C0.999832 9.74264 2.00719 10.75 3.24983 10.75H11.4862L9.82698 12.2607C9.41873 12.6325 9.38891 13.2645 9.76057 13.6729C10.1324 14.0811 10.7644 14.1109 11.1727 13.7393L14.6727 10.5518C14.8782 10.3645 14.9971 10.1003 14.9998 9.82227C15.0025 9.54419 14.8893 9.2771 14.6873 9.08594L11.1873 5.77344C10.7862 5.39388 10.1529 5.41143 9.77327 5.8125C9.39371 6.21362 9.41124 6.84695 9.81233 7.22656L11.4217 8.75H3.24983C3.11176 8.75 2.99983 8.63807 2.99983 8.5V3.25C2.99983 2.69783 2.55196 2.25019 1.99983 2.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBold16.category = 'Arrows';

export default ArrowDownAngleRightBold16;
