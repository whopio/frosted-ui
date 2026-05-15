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
        d="M10.6762 7.95199C11.0667 8.34244 11.6997 8.34242 12.0902 7.95199C12.4806 7.56147 12.4807 6.92841 12.0902 6.53792L8.94278 3.39046C8.42211 2.86985 7.57773 2.86989 7.05704 3.39046L3.90958 6.53792C3.51907 6.92843 3.51909 7.56146 3.90958 7.95199C4.30009 8.3425 4.93311 8.3425 5.32364 7.95199L7.99942 5.2762L10.6762 7.95199ZM10.6762 12.702C11.0667 13.0924 11.6997 13.0924 12.0902 12.702C12.4807 12.3115 12.4807 11.6784 12.0902 11.2879L8.94278 8.14046C8.4221 7.61984 7.57773 7.61987 7.05704 8.14046L3.90958 11.2879C3.51906 11.6784 3.51908 12.3115 3.90958 12.702C4.30009 13.0925 4.93311 13.0925 5.32364 12.702L7.99942 10.0262L10.6762 12.702Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBold16.category = 'Arrows';

export default DoubleChevronUpSmallBold16;
