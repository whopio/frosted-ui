import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoCircleBoldFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm.001 12.625c-.76 0-1.375.616-1.375 1.375V23c0 .76.616 1.375 1.375 1.375s1.375-.616 1.375-1.375v-8.5c0-.76-.616-1.375-1.375-1.375zM16 7.75c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBoldFilled32.category = 'Interface General';

export default InfoCircleBoldFilled32;
