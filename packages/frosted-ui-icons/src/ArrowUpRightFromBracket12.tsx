import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracket12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracket12"
      {...props}
    >
      <path
        d="M11.25 6.75c.414 0 .75.336.75.75v1.25C12 10.545 10.545 12 8.75 12h-5.5C1.455 12 0 10.545 0 8.75V7.5c0-.414.336-.75.75-.75s.75.336.75.75v1.25c0 .966.784 1.75 1.75 1.75h5.5c.966 0 1.75-.784 1.75-1.75V7.5c0-.414.336-.75.75-.75zM7.22.22c.293-.293.767-.293 1.06 0l2 2c.293.293.293.767 0 1.06l-2 2c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l.72-.72H6.75c-.69 0-1.25.56-1.25 1.25v2.5c0 .414-.336.75-.75.75S4 7.664 4 7.25v-2.5C4 3.23 5.231 2 6.75 2h1.19l-.72-.72c-.293-.293-.293-.767 0-1.06z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracket12.category = 'Arrows';

export default ArrowUpRightFromBracket12;
