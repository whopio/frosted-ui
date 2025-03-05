import * as React from 'react';
import { IconProps } from './types';

export const Messages12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.6249 7.125H9.626C10.1783 7.125 10.626 6.6773 10.626 6.125V2.875C10.626 2.32271 10.1783 1.875 9.626 1.875H4.50098C3.94869 1.875 3.50098 2.32271 3.50098 2.875V3.875M7.626 3.875H2.37598C1.82369 3.875 1.37598 4.32271 1.37598 4.875V8.125C1.37598 8.6773 1.82369 9.125 2.37598 9.125H3.00098V10.375L5.251 9.125H7.626C8.17825 9.125 8.626 8.6773 8.626 8.125V4.875C8.626 4.32271 8.17825 3.875 7.626 3.875Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Messages12;
