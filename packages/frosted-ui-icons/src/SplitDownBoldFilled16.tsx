import * as React from 'react';
import { IconProps } from './types';

export const SplitDownBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitDownBoldFilled16"
      {...props}
    >
      <path
        d="M.817 11.08c-.509.653-.391 1.595.262 2.104l2.25 1.75c.542.42 1.3.42 1.842 0l2.25-1.75c.654-.509.771-1.451.263-2.105-.417-.536-1.126-.71-1.728-.476.14-.24.345-.443.6-.576l1.687-.88c.579.307 1.164.615 1.678.881.257.134.466.332.61.569-.6-.227-1.3-.05-1.714.482-.509.654-.391 1.596.262 2.105l2.25 1.75c.542.42 1.3.42 1.842 0l2.25-1.75c.654-.509.771-1.451.263-2.105-.478-.613-1.337-.755-1.982-.35-.209-1.433-1.1-2.691-2.402-3.366-.48-.248-1.017-.53-1.55-.811V5.369c0-.04-.004-.08-.007-.119.61-.456 1.006-1.18 1.006-2 0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5c0 .82.397 1.544 1.006 2-.003.04-.005.08-.005.12v1.173l-1.579.823c-1.299.677-2.175 1.936-2.376 3.36-.644-.402-1.502-.26-1.978.353z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitDownBoldFilled16.category = 'Arrows';

export default SplitDownBoldFilled16;
