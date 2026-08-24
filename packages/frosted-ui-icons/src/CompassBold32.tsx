import * as React from 'react';
import { IconProps } from './types';

export const CompassBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassBold32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm0 2C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16 23.456 2.5 16 2.5zm4.234 6.687c1.612-.612 3.19.967 2.58 2.579l-2.4 6.326c-.407 1.07-1.252 1.915-2.322 2.321l-6.326 2.4c-1.612.612-3.19-.967-2.58-2.579l2.4-6.327c.406-1.07 1.251-1.915 2.321-2.321l6.327-2.4zm-5.618 4.27c-.535.202-.957.624-1.16 1.16l-2.4 6.326 6.327-2.4c.535-.202.958-.625 1.16-1.16l2.4-6.327-6.327 2.4z"
        fill={color}
      />
    </svg>
  );
};

CompassBold32.category = 'Interface General';

export default CompassBold32;
