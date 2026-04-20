import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.5 1C12.9853 1 15 3.01472 15 5.5V10.5C15 12.9853 12.9853 15 10.5 15H5.5C3.01472 15 1 12.9853 1 10.5V5.5C1 3.01472 3.01472 1 5.5 1H10.5ZM11.9619 5.83984C11.574 5.44692 10.9409 5.4424 10.5479 5.83008L8.59082 7.76172L7.72559 6.90723C7.25403 6.44192 6.5139 6.41316 6.00879 6.82031L5.91113 6.90723L4.04785 8.74707C3.65502 9.13503 3.6503 9.76814 4.03809 10.1611C4.42605 10.554 5.05915 10.5577 5.45215 10.1699L6.81738 8.82129L7.68359 9.67676C8.1865 10.1728 8.9951 10.1727 9.49805 9.67676L11.9521 7.25391C12.345 6.86607 12.3494 6.23291 11.9619 5.83984Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled16.category = 'Stats & Charts';

export default DashboardBoldFilled16;
