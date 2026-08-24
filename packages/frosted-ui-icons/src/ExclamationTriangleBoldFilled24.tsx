import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleBoldFilled24"
      {...props}
    >
      <path
        d="M8.648 3.147c1.474-2.607 5.23-2.607 6.704 0l8.115 14.358c1.45 2.567-.404 5.745-3.352 5.745H3.885c-2.948 0-4.802-3.178-3.352-5.745L8.648 3.147zM12 17c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1c0-.553-.448-1-1-1zm0-9.25c-.552 0-1 .447-1 1v5.5c0 .552.448 1 1 1s1-.448 1-1v-5.5c0-.553-.448-1-1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled24.category = 'Interface General';

export default ExclamationTriangleBoldFilled24;
