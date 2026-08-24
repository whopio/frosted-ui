import * as React from 'react';
import { IconProps } from './types';

export const InfoFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoFilled20"
      {...props}
    >
      <path
        d="M10.5 8c.414 0 .75.336.75.75v7.719H13c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H7.687c-.414 0-.75-.336-.75-.75 0-.415.336-.75.75-.75H9.75V9.5H7.687c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H10.5zm-1-4.313c.828 0 1.5.672 1.5 1.5 0 .829-.672 1.5-1.5 1.5S8 6.016 8 5.188c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

InfoFilled20.category = 'Interface General';

export default InfoFilled20;
