import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FacebookFilled24"
      {...props}
    >
      <path
        d="M9.222 23.244V15.57H6.848v-3.527h2.374v-1.52c0-3.929 1.77-5.748 5.612-5.748.727 0 1.982.143 2.498.286v3.195c-.272-.027-.746-.041-1.33-.041-1.886 0-2.613.715-2.613 2.58v1.248h3.759l-.644 3.526h-3.11V23.5c5.694-.692 10.106-5.558 10.106-11.458C23.5 5.667 18.351.5 12 .5S.5 5.667.5 12.042c0 5.413 3.712 9.955 8.722 11.202z"
        fill={color}
      />
    </svg>
  );
};

FacebookFilled24.category = 'Social & Brands';

export default FacebookFilled24;
