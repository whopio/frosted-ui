import * as React from 'react';
import { IconProps } from './types';

export const SplitUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitUpFilled12"
      {...props}
    >
      <path
        d="M.29 3.3c-.442-.53-.37-1.318.16-1.76L1.95.29c.463-.386 1.137-.386 1.6 0l1.5 1.25c.53.442.601 1.23.16 1.76-.226.271-.541.421-.867.446.151.204.346.378.577.503L6 4.83l1.08-.582c.231-.125.427-.298.578-.503-.326-.024-.643-.175-.868-.446-.442-.53-.37-1.318.16-1.76L8.45.29c.463-.386 1.137-.386 1.6 0l1.5 1.25c.53.442.601 1.23.16 1.76-.333.4-.86.538-1.328.395-.277 1.163-1.037 2.174-2.117 2.755l-1.015.546v.884c.603.403 1 1.09 1 1.87C8.25 10.992 7.243 12 6 12c-1.242 0-2.25-1.008-2.25-2.25 0-.78.398-1.467 1-1.87v-.883L3.735 6.45c-1.08-.582-1.839-1.593-2.116-2.756C1.15 3.838.622 3.7.289 3.3z"
        fill={color}
      />
    </svg>
  );
};

SplitUpFilled12.category = 'Arrows';

export default SplitUpFilled12;
