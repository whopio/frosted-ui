import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.99996 17.6667H4.99996C4.26359 17.6667 3.66663 17.0698 3.66663 16.3334V6.33337C3.66663 5.59697 4.26359 5.00004 4.99996 5.00004H8.99996M8.99996 5.00004V17.3334L14.2944 27.6107C14.5229 28.0545 14.982 28.3334 15.4813 28.3334C17.1178 28.3334 18.3744 26.8729 18.1222 25.2559L17.3548 20.3334H24.3452C26.7941 20.3334 28.6681 18.1526 28.2997 15.7316L27.1837 8.39831C26.8864 6.44404 25.2061 5.00004 23.2293 5.00004H8.99996Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThumbDown32;
