import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.80176 0.857027C8.91177 0.563254 9.9996 1.40031 10 2.54843V9.45078C9.9998 10.5991 8.91189 11.436 7.80176 11.1422L5.87695 10.6324C5.68676 10.5821 5.50027 10.7258 5.5 10.9225V11.2496C5.5 11.6638 5.16421 11.9996 4.75 11.9996C4.33579 11.9996 4 11.6638 4 11.2496V1.86289L7.80176 0.857027ZM2.5 9.73789L1.67383 9.52011C0.687266 9.25874 0.000137581 8.36592 0 7.34531V4.6539C0.000279148 3.6334 0.687327 2.74041 1.67383 2.4791L2.5 2.26035V9.73789ZM11.5 4.57871C11.7813 4.91653 11.9989 5.38089 11.999 5.99961C11.999 6.61792 11.7809 7.08174 11.5 7.41953V4.57871Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneFilled12.category = 'Objects';

export default MegaphoneFilled12;
