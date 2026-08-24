import * as React from 'react';
import { IconProps } from './types';

export const ControlsVerticalFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsVerticalFilled20"
      {...props}
    >
      <path
        d="M8.5 6.75c0 1.815-1.288 3.328-3 3.675v8.825c0 .414-.336.75-.75.75S4 19.664 4 19.25v-8.825c-1.712-.347-3-1.86-3-3.675 0-1.814 1.288-3.327 3-3.674V.75c0-.413.336-.75.75-.75s.75.337.75.75v2.326c1.712.347 3 1.86 3 3.674zm10.5 6.5c0 1.815-1.288 3.328-3 3.675v2.325c0 .413-.336.75-.75.75s-.75-.337-.75-.75v-2.325c-1.712-.347-3-1.86-3-3.675 0-1.814 1.288-3.327 3-3.674V.75c0-.414.336-.75.75-.75s.75.336.75.75v8.826c1.712.347 3 1.86 3 3.675z"
        fill={color}
      />
    </svg>
  );
};

ControlsVerticalFilled20.category = 'Interface General';

export default ControlsVerticalFilled20;
