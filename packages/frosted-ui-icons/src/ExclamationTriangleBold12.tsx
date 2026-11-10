import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleBold12"
      {...props}
    >
      <path
        d="M3.99 1.69c.857-1.607 3.162-1.607 4.02 0l3.699 6.938c.81 1.517-.29 3.35-2.01 3.35H2.3c-1.718 0-2.818-1.833-2.009-3.35l3.7-6.937zm2.294.922c-.121-.228-.448-.228-.57 0L2.017 9.549c-.114.215.041.474.284.474h7.4c.242 0 .398-.26.283-.474L6.284 2.612zM6 8.25c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm0-4c.414 0 .75.336.75.75v1.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleBold12.category = 'Interface General';

export default ExclamationTriangleBold12;
