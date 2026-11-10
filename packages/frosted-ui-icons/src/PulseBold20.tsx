import * as React from 'react';
import { IconProps } from './types';

export const PulseBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBold20"
      {...props}
    >
      <path
        d="M18 6.712l-6.153 6.153c-.154.153-.402.153-.556 0L7.132 8.706c-.153-.153-.402-.153-.555 0L2 13.284"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBold20.category = 'Stats & Charts';

export default PulseBold20;
