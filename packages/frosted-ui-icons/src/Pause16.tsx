import * as React from 'react';
import { IconProps } from './types';

export const Pause16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pause16"
      {...props}
    >
      <path
        d="M4.5 2.25c.414 0 .75.336.75.75v10c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3c0-.414.336-.75.75-.75zm7 0c.414 0 .75.336.75.75v10c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Pause16.category = 'Sound & Music';

export default Pause16;
