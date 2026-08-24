import * as React from 'react';
import { IconProps } from './types';

export const PinFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinFilled32"
      {...props}
    >
      <path
        d="M20.25 1C22.32 1 24 2.679 24 4.75v7.545c0 .356.077.707.227 1.03l2.478 5.348C27.857 21.158 26.042 24 23.303 24h-6.554v6.25c0 .414-.335.75-.75.75-.414 0-.75-.336-.75-.75V24H8.696c-2.74 0-4.554-2.842-3.403-5.327l2.479-5.348c.15-.322.227-.674.227-1.03V4.75C8 2.68 9.68 1 11.75 1h8.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinFilled32.category = 'Interface General';

export default PinFilled32;
