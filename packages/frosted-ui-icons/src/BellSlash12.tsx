import * as React from 'react';
import { IconProps } from './types';

export const BellSlash12 = ({
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
        d="M5 2V1.79452C5 1.35616 5.44828 1 6 1C6.55172 1 7 1.35616 7 1.79452V2M8 9C8 10.1039 7.10387 11 6 11C4.89613 11 4 10.1039 4 9M1 11L11 1M9.22501 5.32918V4.79857C9.22501 3.35878 7.92612 2.09897 6.21278 2.00588C4.33291 1.90349 2.77129 3.15088 2.77129 4.70548V5.32918C2.77129 5.64258 2.54926 5.93736 2.19771 6.04286C1.4428 6.27248 0.921026 6.90859 1.00984 7.63469C1.10605 8.42285 1.94977 9 2.89711 9H9.10289C10.0465 9 10.8939 8.42285 10.9902 7.63469C11.079 6.90549 10.5572 6.27248 9.80229 6.04286C9.45074 5.93736 9.22871 5.64258 9.22871 5.32918H9.22501Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BellSlash12;
