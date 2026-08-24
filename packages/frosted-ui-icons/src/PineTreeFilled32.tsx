import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTreeFilled32"
      {...props}
    >
      <path
        d="M15.312 1.297c.372-.39 1-.39 1.372 0l.075.09 9.027 12.096c.467.626.02 1.517-.762 1.517h-3.682l6.485 9.516c.429.63-.023 1.484-.785 1.484H16.747v4.248c0 .414-.336.75-.75.75s-.75-.336-.75-.75V26H4.957c-.763 0-1.214-.855-.785-1.485L10.662 15H6.973c-.781 0-1.228-.89-.762-1.517l9.026-12.096.075-.09z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTreeFilled32.category = 'Nature & Weather';

export default PineTreeFilled32;
