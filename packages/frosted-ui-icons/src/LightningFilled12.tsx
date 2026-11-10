import * as React from 'react';
import { IconProps } from './types';

export const LightningFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightningFilled12"
      {...props}
    >
      <path
        d="M8.12 0c.743 0 1.23.776.908 1.445L7.79 4.018h1.75c.861 0 1.326 1.01.765 1.664L5.19 11.636c-.665.774-1.928.182-1.758-.824L3.99 7.5H2.454c-.683 0-1.168-.664-.96-1.314L3.21.82l.032-.09c.18-.439.61-.73 1.091-.73H8.12z"
        fill={color}
      />
    </svg>
  );
};

LightningFilled12.category = 'Nature & Weather';

export default LightningFilled12;
