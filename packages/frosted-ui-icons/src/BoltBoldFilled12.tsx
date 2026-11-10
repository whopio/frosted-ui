import * as React from 'react';
import { IconProps } from './types';

export const BoltBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltBoldFilled12"
      {...props}
    >
      <path
        d="M5.105.623C5.772-.49 7.48-.016 7.48 1.28v2.549h1.837c1.01 0 1.627 1.109 1.095 1.966l-3.509 5.653c-.683 1.1-2.38.616-2.38-.68V8.464H2.674c-1.001 0-1.62-1.092-1.105-1.95L5.105.623z"
        fill={color}
      />
    </svg>
  );
};

BoltBoldFilled12.category = 'Nature & Weather';

export default BoltBoldFilled12;
