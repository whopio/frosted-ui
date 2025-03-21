import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.021 1.92451L6.39301 0.71452C6.14001 0.63052 5.862 0.63052 5.605 0.71452L1.979 1.92352C1.468 2.09452 1.125 2.57052 1.125 3.10852V5.95451C1.125 8.92351 3.631 10.2755 5.644 11.3615C5.755 11.4215 5.878 11.4515 6 11.4515C6.122 11.4515 6.245 11.4215 6.356 11.3615C8.369 10.2755 10.875 8.92351 10.875 5.95451V3.10852C10.875 2.57052 10.532 2.09451 10.021 1.92251V1.92451ZM9.375 5.95651C9.375 7.77451 7.995 8.75352 6 9.85052V2.16551L9.375 3.29051V5.95651Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ShieldHalf12;
