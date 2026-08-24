import * as React from 'react';
import { IconProps } from './types';

export const ExpandFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExpandFilled32"
      {...props}
    >
      <path
        d="M12.116 18.116c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L5.268 28.5H13c.69 0 1.25.56 1.25 1.25S13.69 31 13 31H2.25C1.56 31 1 30.44 1 29.75V19c0-.69.56-1.25 1.25-1.25S3.5 18.31 3.5 19v7.732l8.616-8.616zM29.75 1c.69 0 1.25.56 1.25 1.25V13c0 .69-.56 1.25-1.25 1.25S28.5 13.69 28.5 13V5.268l-8.616 8.616c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L26.732 3.5H19c-.69 0-1.25-.56-1.25-1.25S18.31 1 19 1h10.75z"
        fill={color}
      />
    </svg>
  );
};

ExpandFilled32.category = 'Arrows';

export default ExpandFilled32;
