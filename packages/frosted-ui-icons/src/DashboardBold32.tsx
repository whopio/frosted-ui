import * as React from 'react';
import { IconProps } from './types';

export const DashboardBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22 1C26.9706 1 31 5.02944 31 10V22C31 26.9706 26.9706 31 22 31H10C5.02944 31 1 26.9706 1 22V10C1 5.02944 5.02944 1 10 1H22ZM10 3C6.13401 3 3 6.13401 3 10V22C3 25.866 6.13401 29 10 29H22C25.866 29 29 25.866 29 22V10C29 6.13401 25.866 3 22 3H10ZM22.5479 12.0381C22.9411 11.6503 23.5741 11.6547 23.9619 12.0479C24.3497 12.4411 24.3453 13.0741 23.9521 13.4619L18.459 18.8789C17.8263 19.5029 16.8095 19.5029 16.1768 18.8789L13.3633 16.1035L9.45215 19.9619C9.05893 20.3497 8.42589 20.3453 8.03809 19.9521C7.65029 19.5589 7.65465 18.9259 8.04785 18.5381L12.2227 14.4209L12.3457 14.3115C12.9388 13.8336 13.7888 13.8335 14.3818 14.3115L14.5049 14.4209L17.3174 17.1953L22.5479 12.0381Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBold32.category = 'Stats & Charts';

export default DashboardBold32;
