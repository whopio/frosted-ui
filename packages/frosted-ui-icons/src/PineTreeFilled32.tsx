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
        d="M15.313 1.297c.371-.39 1-.39 1.372 0l.075.09 9.026 12.095c.467.627.02 1.517-.762 1.518h-3.681l6.484 9.515c.43.63-.023 1.484-.785 1.485H16.747v4.249c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.25H4.958c-.763 0-1.215-.854-.785-1.485L10.663 15h-3.69c-.781 0-1.228-.891-.761-1.518l9.025-12.096.075-.09z"
        fill={color}
      />
    </svg>
  );
};

PineTreeFilled32.category = 'Nature & Weather';

export default PineTreeFilled32;
