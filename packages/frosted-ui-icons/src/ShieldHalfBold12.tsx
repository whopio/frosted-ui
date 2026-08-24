import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBold12"
      {...props}
    >
      <path
        d="M6.001 0c.04 0 .08.003.12.008.155.01.31.037.46.083l.185.067 3.14 1.33c.724.306 1.195 1.018 1.196 1.806V6.71c0 1.678-1.177 2.939-2.16 3.718-1.025.813-2.116 1.323-2.447 1.47-.315.139-.673.14-.988 0-.332-.147-1.422-.658-2.446-1.47C2.078 9.648.9 8.388.9 6.71V3.294c0-.787.47-1.5 1.196-1.807L5.237.158l.186-.067c.148-.046.301-.072.455-.082C5.918.004 5.959 0 6 0zm-3.1 3.318V6.71c0 .715.528 1.459 1.402 2.151.231.184.47.35.698.495V2.43l-2.1.89zM7 9.356c.229-.146.467-.311.698-.495.874-.693 1.403-1.436 1.403-2.151V3.318L7 2.428v6.928z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBold12.category = 'Security';

export default ShieldHalfBold12;
