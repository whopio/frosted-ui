import * as React from 'react';
import { IconProps } from './types';

export const InfoFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoFilled16"
      {...props}
    >
      <path
        d="M8 7c.414 0 .75.336.75.75v4.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5v-4h-1.5c-.414 0-.75-.336-.75-.75S5.336 7 5.75 7H8zm-.75-5c.828 0 1.5.672 1.5 1.5S8.078 5 7.25 5s-1.5-.672-1.5-1.5S6.422 2 7.25 2z"
        fill={color}
      />
    </svg>
  );
};

InfoFilled16.category = 'Interface General';

export default InfoFilled16;
