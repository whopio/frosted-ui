import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesBoldFilled12"
      {...props}
    >
      <path
        d="M9.25 0C10.769 0 12 1.231 12 2.75S10.769 5.5 9.25 5.5c-.752 0-1.433-.303-1.93-.793l-1.848.925c.016.12.028.243.028.368s-.012.247-.028.367l1.848.925c.497-.49 1.178-.792 1.93-.792C10.769 6.5 12 7.731 12 9.25S10.769 12 9.25 12 6.5 10.769 6.5 9.25c0-.043.004-.086.006-.129L4.502 8.12c-.476.394-1.086.631-1.752.631C1.231 8.75 0 7.519 0 6s1.231-2.75 2.75-2.75c.666 0 1.276.236 1.752.63l2.004-1.002c-.002-.043-.006-.085-.006-.128C6.5 1.231 7.731 0 9.25 0z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesBoldFilled12.category = 'Interface General';

export default ShareNodesBoldFilled12;
