import * as React from 'react';
import { IconProps } from './types';

export const MoonBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MoonBoldFilled20"
      {...props}
    >
      <path
        d="M10 .5c.161 0 .25.187.16.321-.697 1.035-1.103 2.282-1.103 3.623 0 3.59 2.91 6.5 6.5 6.5 1.34 0 2.586-.407 3.62-1.104.135-.09.323-.001.323.16 0 5.247-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5z"
        fill={color}
      />
    </svg>
  );
};

MoonBoldFilled20.category = 'Nature & Weather';

export default MoonBoldFilled20;
