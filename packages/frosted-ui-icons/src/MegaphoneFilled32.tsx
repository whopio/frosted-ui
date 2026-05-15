import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.958 2.05273C24.0099 1.53724 25.9996 3.08952 26 5.20508V24.3682C25.9997 26.4942 23.9916 28.0476 21.9336 27.5137L11.375 24.7744C11.1853 24.7254 11.0003 24.8685 11 25.0645V29.25C10.9996 29.6639 10.664 30 10.25 30C9.83603 30 9.5004 29.6639 9.5 29.25V5.18262L21.958 2.05273ZM8 23.8984L4.18262 22.9082C2.30887 22.4219 1.00016 20.7308 1 18.7949V10.6338C1.00032 8.68597 2.32482 6.98664 4.21387 6.51172L8 5.55957V23.8984ZM27.5 9.84472C27.6839 9.90968 27.872 9.98425 28.0605 10.0713C28.77 10.3989 29.5118 10.9052 30.0752 11.6855C30.6441 12.4737 30.9989 13.4975 30.999 14.7969C30.999 16.0961 30.644 17.12 30.0752 17.9082C29.5119 18.6885 28.7699 19.1938 28.0605 19.5215C27.872 19.6085 27.6838 19.683 27.5 19.748V9.84472Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneFilled32.category = 'Objects';

export default MegaphoneFilled32;
