import * as React from 'react';
import { IconProps } from './types';

export const MedalFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MedalFilled20"
      {...props}
    >
      <path
        d="M4.76 14.691c1.445 1.133 3.263 1.81 5.24 1.81 1.975 0 3.791-.676 5.234-1.807l.83 3.184c.173.662-.44 1.26-1.097 1.072l-4.97-1.42-4.969 1.42c-.657.188-1.27-.41-1.097-1.072l.83-3.187zM10 1c3.866 0 7 3.135 7 7.001 0 3.866-3.134 7-7 7s-7-3.134-7-7S6.134 1 10 1zm3.03 4.97c-.293-.293-.767-.293-1.06 0L9 8.94l-.97-.97c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l1.5 1.5c.293.293.767.293 1.06 0l3.5-3.5c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

MedalFilled20.category = 'Interface General';

export default MedalFilled20;
