import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.6762 7.95208C11.0667 8.34253 11.6997 8.34251 12.0902 7.95208C12.4806 7.56156 12.4807 6.9285 12.0902 6.53801L8.94278 3.39055C8.42211 2.86994 7.57773 2.86998 7.05704 3.39055L3.90958 6.53801C3.51907 6.92852 3.51909 7.56155 3.90958 7.95208C4.30009 8.3426 4.93311 8.34259 5.32364 7.95208L7.99942 5.2763L10.6762 7.95208ZM10.6762 12.7021C11.0667 13.0925 11.6997 13.0925 12.0902 12.7021C12.4807 12.3116 12.4807 11.6785 12.0902 11.288L8.94278 8.14055C8.4221 7.61993 7.57773 7.61996 7.05704 8.14055L3.90958 11.288C3.51906 11.6785 3.51908 12.3115 3.90958 12.7021C4.30009 13.0926 4.93311 13.0926 5.32364 12.7021L7.99942 10.0263L10.6762 12.7021Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBold16.category = 'Arrows';

export default DoubleChevronUpSmallBold16;
