import * as React from 'react';
import { IconProps } from './types';

export const MoonBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MoonBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c.383 0 .515.505.275.803C5.79 1.403 5.5 2.168 5.5 3c0 1.933 1.567 3.5 3.5 3.5.832 0 1.595-.29 2.196-.775.298-.24.804-.108.804.275 0 3.314-2.686 6-6 6S0 9.314 0 6s2.686-6 6-6z"
        fill={color}
      />
    </svg>
  );
};

MoonBoldFilled12.category = 'Nature & Weather';

export default MoonBoldFilled12;
