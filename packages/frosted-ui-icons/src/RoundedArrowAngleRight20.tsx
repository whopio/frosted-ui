import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRight20"
      {...props}
    >
      <path
        d="M7.25 18.998C3.797 18.998 1 16.2 1 12.75 1 9.3 3.798 6.5 7.25 6.5h9.2l-4.212-4.22c-.293-.293-.292-.768 0-1.061.294-.293.77-.292 1.062.001l5.479 5.49c.292.293.292.768 0 1.06l-5.48 5.48c-.293.293-.768.293-1.06 0-.293-.293-.293-.767 0-1.06L16.427 8H7.25C4.627 8 2.5 10.127 2.5 12.75c0 2.622 2.127 4.748 4.75 4.748h2c.413 0 .75.336.75.75s-.337.75-.75.75h-2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRight20.category = 'Arrows';

export default RoundedArrowAngleRight20;
