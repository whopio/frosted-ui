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
      data-fui-icon="MegaphoneFilled32"
      {...props}
    >
      <path
        d="M21.958 2.053C24.01 1.537 26 3.09 26 5.205v19.163c0 2.126-2.008 3.68-4.066 3.146l-10.559-2.74c-.19-.049-.375.095-.375.29v4.186c0 .414-.336.75-.75.75s-.75-.336-.75-.75V5.183l12.458-3.13zM8 23.898l-3.817-.99C2.309 22.422 1 20.731 1 18.795v-8.161c0-1.948 1.325-3.647 3.214-4.122L8 5.56v18.338zM27.5 9.845c.184.065.372.14.56.226.71.328 1.452.834 2.015 1.614.57.789.924 1.813.924 3.112 0 1.3-.355 2.323-.924 3.111-.563.78-1.305 1.286-2.014 1.613-.189.087-.377.162-.561.227V9.845z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneFilled32.category = 'Objects';

export default MegaphoneFilled32;
