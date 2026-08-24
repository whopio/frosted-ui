import * as React from 'react';
import { IconProps } from './types';

export const Home16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Home16"
      {...props}
    >
      <path
        d="M5.563 1.929c1.386-1.244 3.488-1.244 4.875 0l3.522 3.16c.662.594 1.04 1.442 1.04 2.33v5.045c0 1.4-1.136 2.536-2.536 2.536H10.94C9.87 15 9 14.13 9 13.06V9.75c0-.552-.448-1-1-1s-1 .448-1 1v3.31C7 14.13 6.131 15 5.06 15H3.536C2.136 15 1 13.864 1 12.464V7.42c0-.89.378-1.737 1.04-2.331l3.522-3.16zm3.873 1.117c-.817-.733-2.055-.733-2.872 0l-3.522 3.16c-.345.31-.542.75-.542 1.214v5.044c0 .572.464 1.036 1.036 1.036H5.06c.243 0 .44-.197.44-.44V9.75c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v3.31c0 .243.197.44.44.44h1.524c.572 0 1.036-.464 1.036-1.036V7.42c0-.463-.197-.905-.542-1.214l-3.522-3.16z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Home16.category = 'Buildings';

export default Home16;
