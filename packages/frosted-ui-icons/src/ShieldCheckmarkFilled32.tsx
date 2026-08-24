import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmarkFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCheckmarkFilled32"
      {...props}
    >
      <path
        d="M14.7.252c.834-.336 1.766-.336 2.6 0l10.014 4.024c1.32.531 2.186 1.813 2.186 3.236V17.58c0 4.118-2.903 7.505-5.836 9.895-2.965 2.416-6.152 3.97-7.086 4.402-.37.17-.785.17-1.156 0-.934-.432-4.121-1.986-7.086-4.402C5.403 25.085 2.5 21.698 2.5 17.58V7.512c0-1.423.865-2.705 2.187-3.236L14.699.252zm6.35 11.971c-.293-.293-.768-.293-1.06 0l-5.761 5.76-1.986-1.985c-.293-.293-.768-.293-1.06 0-.293.293-.293.767 0 1.06l2.516 2.516c.293.293.768.293 1.06 0l6.29-6.29c.294-.293.294-.768 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

ShieldCheckmarkFilled32.category = 'Security';

export default ShieldCheckmarkFilled32;
