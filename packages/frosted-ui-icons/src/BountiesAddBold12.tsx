import * as React from 'react';
import { IconProps } from './types';

export const BountiesAddBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BountiesAddBold12"
      {...props}
    >
      <path
        d="M6 0c3.199 0 5.812 2.504 5.99 5.658-.426-.598-1.084-1.02-1.844-1.13C9.541 2.822 7.914 1.6 6 1.6 3.57 1.6 1.6 3.57 1.6 6c0 2.43 1.97 4.4 4.4 4.4l.052-.002c.296.393.693.705 1.155.895.076.184.171.359.283.52-.476.122-.976.187-1.49.187-3.314 0-6-2.686-6-6s2.686-6 6-6zm3.75 6.25c.552 0 1 .448 1 1v.5h.5c.552 0 1 .448 1 1s-.448 1-1 1h-.5v.5c0 .552-.448 1-1 1s-1-.448-1-1v-.5h-.5c-.552 0-1-.448-1-1s.448-1 1-1h.5v-.5c0-.552.448-1 1-1zM6 3c1.193 0 2.22.698 2.704 1.707-.55.227-1.012.627-1.314 1.134C7.31 5.143 6.72 4.6 6 4.6c-.773 0-1.4.627-1.4 1.4 0 .726.552 1.322 1.26 1.393-.229.4-.36.863-.36 1.357 0 .07.002.14.007.209C4.085 8.724 3 7.489 3 6c0-1.657 1.343-3 3-3z"
        fill={color}
      />
    </svg>
  );
};

BountiesAddBold12.category = 'Interface General';

export default BountiesAddBold12;
