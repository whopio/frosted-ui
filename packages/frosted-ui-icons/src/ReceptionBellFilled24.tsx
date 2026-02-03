import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_6111_30)">
        <path
          d="M15.5654 0C15.9795 1.41981e-05 16.3153 0.335907 16.3154 0.75C16.3154 1.1642 15.9796 1.49999 15.5654 1.5H12.749V4.01562C17.431 4.20407 20.2531 6.16453 21.8867 8.84961C23.5638 11.6067 23.9252 15.0265 23.9873 17.7334C24.0098 18.7187 23.2087 19.5 22.248 19.5H12.749V22.499H22C22.4139 22.4993 22.7498 22.8351 22.75 23.249C22.75 23.6631 22.414 23.9987 22 23.999H2C1.58579 23.999 1.25 23.6632 1.25 23.249C1.25017 22.835 1.58589 22.499 2 22.499H11.249V19.5H1.74902C0.788386 19.5 -0.0127129 18.7187 0.00976562 17.7334C0.0718967 15.0265 0.433248 11.6067 2.11035 8.84961C3.74403 6.16434 6.56647 4.20384 11.249 4.01562V1.5H8.43164C8.01743 1.5 7.68164 1.16421 7.68164 0.75C7.68177 0.335899 8.01751 0 8.43164 0H15.5654Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_6111_30">
          <path fill={color} d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

ReceptionBellFilled24.category = 'Objects';

export default ReceptionBellFilled24;
