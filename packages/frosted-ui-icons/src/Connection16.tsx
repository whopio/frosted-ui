import * as React from 'react';
import { IconProps } from './types';

export const Connection16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Connection16"
      {...props}
    >
      <path
        d="M7.092.253c.557-.337 1.256-.337 1.813 0l6.565 3.974c.707.429.706 1.455-.001 1.883L12.343 8l3.126 1.894c.707.429.706 1.454-.001 1.882l-6.564 3.972c-.557.337-1.256.336-1.813-.001l-6.56-3.97c-.707-.429-.708-1.454-.001-1.883L3.655 8 .53 6.11c-.706-.429-.707-1.454 0-1.883L7.091.253zm1.813 9.828c-.558.337-1.256.337-1.813 0l-1.99-1.204-.502.305-2.729 1.652 5.997 3.63c.08.048.18.048.26 0l5.998-3.63-2.728-1.652-.504-.305-1.99 1.204zm-.777-8.545c-.08-.048-.18-.048-.259 0L1.872 5.168l5.997 3.63c.08.048.18.048.26 0l5.997-3.63-5.998-3.632z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Connection16.category = 'Interface General';

export default Connection16;
