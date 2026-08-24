import * as React from 'react';
import { IconProps } from './types';

export const LockFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockFilled24"
      {...props}
    >
      <path
        d="M12 1c4.142 0 7.5 3.358 7.5 7.5v1.687c1.737.533 3 2.15 3 4.063v4.5c0 2.347-1.903 4.25-4.25 4.25H5.75c-2.347 0-4.25-1.903-4.25-4.25v-4.5c0-1.912 1.263-3.53 3-4.063V8.5C4.5 4.358 7.858 1 12 1zm0 1.5c-3.314 0-6 2.686-6 6V10h12V8.5c0-3.314-2.686-6-6-6z"
        fill={color}
      />
    </svg>
  );
};

LockFilled24.category = 'Security';

export default LockFilled24;
