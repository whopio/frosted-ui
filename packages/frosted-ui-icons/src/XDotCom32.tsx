import * as React from 'react';
import { IconProps } from './types';

export const XDotCom32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M23.2044 4.66669H27.0469L18.652 14.268L28.528 27.3334H20.7952L14.7387 19.4094L7.8085 27.3334H3.96359L12.9428 17.0636L3.46875 4.66669H11.3979L16.8725 11.9096L23.2044 4.66669ZM21.8557 25.0318H23.9849L10.2409 6.84734H7.95603L21.8557 25.0318Z"
        fill={color}
      />
    </svg>
  );
};

export default XDotCom32;
