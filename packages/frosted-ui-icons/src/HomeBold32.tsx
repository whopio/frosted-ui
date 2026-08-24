import * as React from 'react';
import { IconProps } from './types';

export const HomeBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeBold32"
      {...props}
    >
      <path
        d="M11.052 2.904c2.805-2.554 7.091-2.554 9.896 0l7.951 7.24c1.338 1.218 2.1 2.944 2.101 4.753v11.031C31 28.73 28.73 31 25.929 31h-3.215C20.663 31 19 29.337 19 27.286v-6.287c0-1.656-1.343-3-3-3s-3 1.344-3 3v6.287c0 2.05-1.663 3.713-3.714 3.713H6.071c-2.8 0-5.07-2.27-5.071-5.07V14.896c0-1.81.763-3.535 2.1-4.753l7.952-7.24zm8.55 1.478c-2.041-1.859-5.163-1.859-7.204 0l-7.95 7.24C3.525 12.463 3 13.652 3 14.898v11.031C3 27.624 4.375 29 6.071 29h3.215c.947 0 1.714-.768 1.714-1.714v-6.287c0-2.76 2.239-5 5-5s5 2.24 5 5v6.287c0 .946.767 1.713 1.714 1.713h3.215c1.696 0 3.07-1.375 3.071-3.07V14.896c0-1.246-.526-2.435-1.447-3.274l-7.95-7.24z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

HomeBold32.category = 'Buildings';

export default HomeBold32;
