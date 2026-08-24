import * as React from 'react';
import { IconProps } from './types';

export const ShieldCrossFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCrossFilled32"
      {...props}
    >
      <path
        d="M14.7.252c.834-.336 1.766-.336 2.6 0l10.014 4.024c1.32.531 2.186 1.813 2.186 3.236V17.58c0 4.117-2.903 7.505-5.836 9.895-2.965 2.416-6.152 3.97-7.086 4.402-.37.171-.785.171-1.156 0-.934-.432-4.121-1.986-7.086-4.402C5.403 25.085 2.5 21.698 2.5 17.58V7.512c0-1.423.866-2.705 2.187-3.236L14.699.252zm6.33 10.222c-.293-.293-.767-.293-1.06 0L16 14.444l-3.97-3.97c-.293-.293-.767-.293-1.06 0-.293.293-.293.768 0 1.06l3.97 3.97-3.97 3.97c-.293.293-.293.768 0 1.06.293.294.767.294 1.06 0L16 16.566l3.97 3.97c.293.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-3.97-3.97 3.97-3.97c.293-.293.293-.768 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

ShieldCrossFilled32.category = 'Security';

export default ShieldCrossFilled32;
