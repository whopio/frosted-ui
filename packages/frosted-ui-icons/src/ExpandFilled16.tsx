import * as React from 'react';
import { IconProps } from './types';

export const ExpandFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExpandFilled16"
      {...props}
    >
      <path
        d="M5.616 8.616c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L5.268 12.5H6.5c.69 0 1.25.56 1.25 1.25S7.19 15 6.5 15H2.25C1.56 15 1 14.44 1 13.75V9.5c0-.69.56-1.25 1.25-1.25S3.5 8.81 3.5 9.5v1.232l2.116-2.116zM13.75 1c.69 0 1.25.56 1.25 1.25V6.5c0 .69-.56 1.25-1.25 1.25S12.5 7.19 12.5 6.5V5.268l-2.116 2.116c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L10.732 3.5H9.5c-.69 0-1.25-.56-1.25-1.25S8.81 1 9.5 1h4.25z"
        fill={color}
      />
    </svg>
  );
};

ExpandFilled16.category = 'Arrows';

export default ExpandFilled16;
