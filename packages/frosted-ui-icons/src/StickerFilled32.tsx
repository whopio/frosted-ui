import * as React from 'react';
import { IconProps } from './types';

export const StickerFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_6194_397)">
        <path
          d="M18.669 1.22623C23.3506 0.145495 28.0224 3.06476 29.1033 7.74632L29.7729 10.6467C29.869 11.0629 29.6095 11.4781 29.1934 11.5742L21.4849 13.3538C17.8436 14.1945 15.5732 17.8278 16.4139 21.4691L18.1937 29.1786C18.2898 29.5947 18.0303 30.01 17.6142 30.106L14.7129 30.7759C10.0312 31.8567 5.3594 28.9375 4.27853 24.2558L1.9161 14.023C0.835359 9.34133 3.75455 4.66952 8.43619 3.58866L18.669 1.22623ZM29.848 12.9625C30.0661 12.9121 30.2806 13.0647 30.2766 13.2885C30.1533 20.1061 26.282 26.3014 20.2085 29.4009C20.0096 29.5023 19.7788 29.376 19.7286 29.1585L17.8754 21.1317C17.2212 18.2976 18.9882 15.4697 21.8223 14.8154L29.848 12.9625Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_6194_397">
          <path fill={color} d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StickerFilled32;
