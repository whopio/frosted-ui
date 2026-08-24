import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTreeFilled20"
      {...props}
    >
      <path
        d="M9.236.4c.356-.48 1.051-.51 1.45-.092l.075.09 6.005 8.085c.465.627.018 1.516-.763 1.516H14.05l4.109 5.48c.47.626.022 1.52-.76 1.52h-6.65v2.251c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.231l.001-.02H2.598c-.783 0-1.23-.894-.76-1.52l4.112-5.48H3.998c-.78 0-1.227-.89-.762-1.516l6-8.084z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTreeFilled20.category = 'Nature & Weather';

export default PineTreeFilled20;
