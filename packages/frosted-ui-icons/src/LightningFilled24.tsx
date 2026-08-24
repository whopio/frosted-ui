import * as React from 'react';
import { IconProps } from './types';

export const LightningFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightningFilled24"
      {...props}
    >
      <path
        d="M16.356 0c.948 0 1.572.989 1.165 1.845L14.35 8.5h4.985c1.098 0 1.694 1.284.986 2.122L9.414 23.53c-.85 1.007-2.487.24-2.256-1.058L8.668 14H4.49c-.874 0-1.494-.852-1.227-1.685L6.85 1.145C7.069.464 7.705 0 8.42 0h7.935z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

LightningFilled24.category = 'Nature & Weather';

export default LightningFilled24;
