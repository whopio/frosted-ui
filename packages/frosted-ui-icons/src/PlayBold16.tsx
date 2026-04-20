import * as React from 'react';
import { IconProps } from './types';

export const PlayBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 12.3363V3.66369C3 2.40135 4.39344 1.63618 5.45862 2.31359L12.2771 6.64989C13.2656 7.27854 13.2656 8.72143 12.2771 9.35009L5.45862 13.6864C4.39344 14.3638 3 13.5986 3 12.3363Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold16.category = 'Sound & Music';

export default PlayBold16;
