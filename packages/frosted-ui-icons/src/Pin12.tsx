import * as React from 'react';
import { IconProps } from './types';

export const Pin12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.99997 8.25H8.73381C9.5111 8.25 9.99122 7.40203 9.5913 6.7355L8.42101 4.78501C8.30911 4.59852 8.25 4.38511 8.25 4.16762V1.75C8.25 1.19772 7.80228 0.75 7.25 0.75H4.75C4.19772 0.75 3.75 1.19772 3.75 1.75V4.16762C3.75 4.38511 3.69089 4.59852 3.57899 4.78501L2.4087 6.7355C2.00878 7.40203 2.4889 8.25 3.26619 8.25H5.99997ZM5.99997 8.25V11.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Pin12;
