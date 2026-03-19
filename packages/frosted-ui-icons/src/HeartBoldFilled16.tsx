import * as React from 'react';
import { IconProps } from './types';

export const HeartBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.5 1.41797C13.9584 1.41797 15.9998 3.35343 16 6.04492C16 8.89407 14.3998 11.0649 12.7676 12.5391C11.1296 14.0184 9.33856 14.9096 8.66895 15.2158C8.24121 15.4114 7.75878 15.4114 7.33105 15.2158C6.66144 14.9096 4.87042 14.0184 3.23242 12.5391C1.60023 11.0649 3.42755e-05 8.89407 0 6.04492C0.000238665 3.35343 2.04158 1.41797 4.5 1.41797C6.11272 1.41797 7.23447 2.17658 7.92578 2.9043C7.95153 2.9314 7.97538 2.96025 8 2.9873C8.02462 2.96025 8.04847 2.9314 8.07422 2.9043C8.76553 2.17658 9.88728 1.41797 11.5 1.41797Z"
        fill={color}
      />
    </svg>
  );
};

HeartBoldFilled16.category = 'Product Icons';

export default HeartBoldFilled16;
