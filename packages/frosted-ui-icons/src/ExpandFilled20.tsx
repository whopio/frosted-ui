import * as React from 'react';
import { IconProps } from './types';

export const ExpandFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExpandFilled20"
      {...props}
    >
      <path
        d="M7.116 11.116c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L5.268 16.5H8c.69 0 1.25.56 1.25 1.25S8.69 19 8 19H2.25C1.56 19 1 18.44 1 17.75V12c0-.69.56-1.25 1.25-1.25S3.5 11.31 3.5 12v2.732l3.616-3.616zM17.75 1c.69 0 1.25.56 1.25 1.25V8c0 .69-.56 1.25-1.25 1.25S16.5 8.69 16.5 8V5.268l-3.616 3.616c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L14.732 3.5H12c-.69 0-1.25-.56-1.25-1.25S11.31 1 12 1h5.75z"
        fill={color}
      />
    </svg>
  );
};

ExpandFilled20.category = 'Arrows';

export default ExpandFilled20;
