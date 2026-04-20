import * as React from 'react';
import { IconProps } from './types';

export const Table16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.3027 1C13.7937 1.00023 15.002 2.20917 15.002 3.7002V12.3027C15.0017 13.7935 13.7935 15.0017 12.3027 15.002H3.7002C2.20921 15.002 1.00029 13.7937 1 12.3027V3.7002C1 2.20903 2.20903 1 3.7002 1H12.3027ZM7.02637 13.502H12.3027C12.9651 13.5017 13.5017 12.9651 13.502 12.3027V6.5957H7.02637V13.502ZM2.5 12.3027C2.50029 12.9652 3.03763 13.502 3.7002 13.502H5.52637V6.5957H2.5V12.3027ZM7.02637 5.0957H13.502V3.7002C13.502 3.03759 12.9653 2.50023 12.3027 2.5H7.02637V5.0957ZM3.7002 2.5C3.03745 2.5 2.5 3.03745 2.5 3.7002V5.0957H5.52637V2.5H3.7002Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Table16.category = 'Interface General';

export default Table16;
