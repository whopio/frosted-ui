import * as React from 'react';
import { IconProps } from './types';

export const BannerPhoto12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BannerPhoto12"
      {...props}
    >
      <path
        d="M8.91 2c1.417 0 2.567 1.15 2.567 2.568v2.91c0 1.418-1.15 2.568-2.568 2.568H3.091c-1.418 0-2.568-1.15-2.569-2.568v-2.91C.522 3.15 1.672 2 3.091 2h5.818zM3.09 3.5c-.59 0-1.068.478-1.068 1.068v1.187l.522-.594c.14-.16.311-.284.5-.37.095-.043.194-.076.296-.099.102-.022.206-.033.312-.033.407 0 .796.169 1.075.465l3.216 3.422h.966c.59 0 1.067-.479 1.068-1.068v-2.91c0-.59-.478-1.068-1.068-1.068H3.091zM8 4.478c.552 0 1 .447 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.553.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

BannerPhoto12.category = 'Interface General';

export default BannerPhoto12;
