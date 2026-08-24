import * as React from 'react';
import { IconProps } from './types';

export const PlayBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBoldFilled20"
      {...props}
    >
      <path
        d="M3 4.109C3 1.679 5.702.225 7.73 1.563l8.927 5.891c1.827 1.206 1.828 3.887.001 5.092l-8.929 5.89C5.702 19.776 3 18.32 3 15.892V4.109z"
        fill={color}
      />
    </svg>
  );
};

PlayBoldFilled20.category = 'Sound & Music';

export default PlayBoldFilled20;
