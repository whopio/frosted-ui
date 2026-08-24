import * as React from 'react';
import { IconProps } from './types';

export const ExpandBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExpandBoldFilled12"
      {...props}
    >
      <path
        d="M3.616 6.616c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L4.268 9.5H4.5c.69 0 1.25.56 1.25 1.25S5.19 12 4.5 12H1.25C.56 12 0 11.44 0 10.75V7.5c0-.69.56-1.25 1.25-1.25S2.5 6.81 2.5 7.5v.232l1.116-1.116zM10.75 0C11.44 0 12 .56 12 1.25V4.5c0 .69-.56 1.25-1.25 1.25S9.5 5.19 9.5 4.5v-.232L8.384 5.384c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L7.732 2.5H7.5c-.69 0-1.25-.56-1.25-1.25S6.81 0 7.5 0h3.25z"
        fill={color}
      />
    </svg>
  );
};

ExpandBoldFilled12.category = 'Arrows';

export default ExpandBoldFilled12;
