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
        d="M7.092.253c.557-.337 1.255-.337 1.812 0l6.566 3.975c.707.428.706 1.454-.001 1.882l-3.126 1.891 3.126 1.894c.706.428.706 1.454-.001 1.881l-6.565 3.972c-.557.337-1.255.336-1.812 0L.53 11.775c-.708-.428-.708-1.453-.002-1.881L3.654 8 .531 6.11c-.707-.429-.707-1.454 0-1.882L7.09.253zm1.812 9.828c-.557.337-1.255.337-1.812 0l-1.99-1.204-.502.306-2.729 1.651 5.997 3.63c.08.048.18.048.259 0l5.999-3.63-2.728-1.651-.504-.306-1.99 1.204zm-.776-8.545c-.08-.048-.18-.048-.259 0L1.872 5.168l5.997 3.63c.08.048.18.048.259 0l5.998-3.63-5.998-3.632z"
        fill={color}
      />
    </svg>
  );
};

Connection16.category = 'Interface General';

export default Connection16;
