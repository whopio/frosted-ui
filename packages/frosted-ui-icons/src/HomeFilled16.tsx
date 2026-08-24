import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeFilled16"
      {...props}
    >
      <path
        d="M5.563 1.928c1.386-1.243 3.488-1.243 4.875 0l3.522 3.16C14.622 5.683 15 6.53 15 7.42v5.043C15 13.864 13.864 15 12.464 15H10.75c-.69 0-1.25-.56-1.25-1.25V9.5C9.5 8.67 8.828 8 8 8s-1.5.671-1.5 1.5v4.25c0 .69-.56 1.25-1.25 1.25H3.536C2.136 15 1 13.864 1 12.463V7.42c0-.89.378-1.738 1.04-2.331l3.522-3.16z"
        fill={color}
      />
    </svg>
  );
};

HomeFilled16.category = 'Buildings';

export default HomeFilled16;
