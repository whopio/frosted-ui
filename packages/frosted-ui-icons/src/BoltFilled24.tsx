import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltFilled24"
      {...props}
    >
      <path
        d="M11.47.493c.612-.872 2.03-.454 2.03.654V8.5h5.427c1.055 0 1.702 1.158 1.149 2.058l-7.91 12.855C11.547 24.417 10 23.98 10 22.8v-7.3H5.046c-1.043 0-1.692-1.131-1.166-2.031L11.413.58l.056-.088z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoltFilled24.category = 'Nature & Weather';

export default BoltFilled24;
