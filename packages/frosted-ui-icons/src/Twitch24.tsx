import * as React from 'react';
import { IconProps } from './types';

export const Twitch24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Twitch24"
      {...props}
    >
      <path
        d="M3.364 2L2 5.478V19.39h4.999V22h2.729l2.726-2.61h4.09L22 14.175V2H3.364zM5.18 3.738h15.001v9.566l-3.183 3.043H12l-2.726 2.607v-2.607H5.181V3.738zm5 8.697H12V7.218h-1.818v5.217zm5 0H17V7.218h-1.818v5.217z"
        fill={color}
      />
    </svg>
  );
};

Twitch24.category = 'Social & Brands';

export default Twitch24;
