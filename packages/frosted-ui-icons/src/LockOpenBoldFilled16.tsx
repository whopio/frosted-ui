import * as React from 'react';
import { IconProps } from './types';

export const LockOpenBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockOpenBoldFilled16"
      {...props}
    >
      <path
        d="M8 1c1.399 0 2.663.574 3.57 1.5.6.613.051 1.5-.807 1.5-.338 0-.653-.155-.92-.363C9.336 3.238 8.697 3 8 3 6.343 3 5 4.343 5 6v.25h6.3c1.767 0 3.2 1.433 3.2 3.2v2.35c0 1.767-1.433 3.2-3.2 3.2H4.7c-1.767 0-3.2-1.433-3.2-3.2V9.45c0-1.153.612-2.161 1.526-2.724C3.01 6.653 3 6.578 3 6.5V6c0-2.761 2.239-5 5-5z"
        fill={color}
      />
    </svg>
  );
};

LockOpenBoldFilled16.category = 'Security';

export default LockOpenBoldFilled16;
