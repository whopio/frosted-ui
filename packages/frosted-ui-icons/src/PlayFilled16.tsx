import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayFilled16"
      {...props}
    >
      <path
        d="M2 3.367C2 1.512 4.048.388 5.612 1.385l7.273 4.633c1.45.924 1.45 3.04 0 3.964l-7.273 4.633C4.048 15.611 2 14.488 2 12.633V3.367z"
        fill={color}
      />
    </svg>
  );
};

PlayFilled16.category = 'Sound & Music';

export default PlayFilled16;
