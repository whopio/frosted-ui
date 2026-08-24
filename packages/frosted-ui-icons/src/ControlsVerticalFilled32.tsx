import * as React from 'react';
import { IconProps } from './types';

export const ControlsVerticalFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsVerticalFilled32"
      {...props}
    >
      <path
        d="M12.502 11.034c0 2.73-2.085 4.973-4.75 5.225v13.993c0 .415-.336.75-.75.75s-.75-.335-.75-.75V16.188c-2.421-.467-4.25-2.597-4.25-5.154 0-2.558 1.829-4.688 4.25-5.155V1.748c0-.414.336-.75.75-.75s.75.336.75.75v4.06c2.665.252 4.75 2.495 4.75 5.226zm17.5 9.932c0 2.731-2.085 4.974-4.75 5.226v4.06c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.131c-2.421-.467-4.25-2.597-4.25-5.155 0-2.557 1.829-4.687 4.25-5.154V1.748c0-.415.336-.75.75-.75s.75.335.75.75V15.74c2.665.252 4.75 2.494 4.75 5.225z"
        fill={color}
      />
    </svg>
  );
};

ControlsVerticalFilled32.category = 'Interface General';

export default ControlsVerticalFilled32;
