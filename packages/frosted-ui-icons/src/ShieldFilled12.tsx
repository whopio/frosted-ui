import * as React from 'react';
import { IconProps } from './types';

export const ShieldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.37402 0.116455C5.77702 -0.0378902 6.22298 -0.0378903 6.62598 0.116455L10.376 1.55396C11.0529 1.81332 11.5 2.46286 11.5 3.18774V6.75024C11.4998 8.4145 10.2 9.67018 9.08984 10.4602C7.93111 11.2848 6.7006 11.799 6.36133 11.9338C6.1276 12.0267 5.8724 12.0267 5.63867 11.9338C5.2994 11.799 4.06889 11.2848 2.91016 10.4602C1.80001 9.67018 0.500155 8.4145 0.5 6.75024V3.18774C0.500025 2.46286 0.947119 1.81332 1.62402 1.55396L5.37402 0.116455Z"
        fill={color}
      />
    </svg>
  );
};

ShieldFilled12.category = 'Security';

export default ShieldFilled12;
