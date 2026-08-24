import * as React from 'react';
import { IconProps } from './types';

export const PineTree20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTree20"
      {...props}
    >
      <path
        d="M9.234.4c.355-.48 1.051-.51 1.45-.092l.075.09 6.005 8.085c.465.627.018 1.516-.763 1.516h-1.952l4.109 5.48c.47.626.022 1.52-.76 1.52h-6.65v2.251c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.231l.001-.02H2.596c-.783 0-1.23-.894-.76-1.52l4.113-5.48H3.995c-.78 0-1.227-.89-.762-1.516l6-8.084zM5.09 8.5h1.96c.782 0 1.228.893.759 1.519l-4.113 5.48h12.602l-4.11-5.48c-.468-.626-.021-1.52.761-1.52h1.958l-4.91-6.612L5.09 8.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTree20.category = 'Nature & Weather';

export default PineTree20;
