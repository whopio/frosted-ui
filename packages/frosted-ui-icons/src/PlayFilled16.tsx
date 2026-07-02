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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2 3.36693C2 1.51213 4.04795 0.388176 5.6123 1.38451L12.8848 6.0183C14.3344 6.94194 14.3344 9.05853 12.8848 9.98217L5.6123 14.615C4.04797 15.6115 2.00011 14.4883 2 12.6335V3.36693Z"
        fill={color}
      />
    </svg>
  );
};

PlayFilled16.category = 'Sound & Music';

export default PlayFilled16;
