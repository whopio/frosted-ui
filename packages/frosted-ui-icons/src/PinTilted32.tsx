import * as React from 'react';
import { IconProps } from './types';

export const PinTilted32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.5118 22.438L14.676 27.6023C16.2256 29.1518 18.8596 28.5711 19.614 26.5137L21.6433 20.9791C21.8033 20.5428 22.0564 20.1466 22.385 19.818L27.7199 14.4831C28.8914 13.3116 28.8914 11.4121 27.7199 10.2405L21.7094 4.23008C20.5379 3.0585 18.6384 3.0585 17.4668 4.23008L12.132 9.56493C11.8034 9.89353 11.4071 10.1466 10.9708 10.3066L5.43622 12.3359C3.37879 13.0903 2.79812 15.7243 4.34766 17.2739L9.5118 22.438ZM9.5118 22.438L4.38528 27.5645"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PinTilted32;
