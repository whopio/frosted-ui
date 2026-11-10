import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBoldFilled12"
      {...props}
    >
      <path
        d="M1.116 1.116c.488-.488 1.28-.488 1.768 0L6 4.232l3.116-3.115c.488-.488 1.28-.488 1.768 0 .487.488.488 1.28 0 1.768L7.768 6l3.116 3.116c.488.488.488 1.28 0 1.768s-1.28.487-1.768 0L6 7.766l-3.116 3.117c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L4.232 6 1.116 2.884c-.488-.489-.488-1.28 0-1.768z"
        fill={color}
      />
    </svg>
  );
};

XMarkBoldFilled12.category = 'Interface General';

export default XMarkBoldFilled12;
