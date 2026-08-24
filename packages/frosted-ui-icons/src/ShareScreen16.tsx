import * as React from 'react';
import { IconProps } from './types';

export const ShareScreen16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareScreen16"
      {...props}
    >
      <path
        d="M11.25 1.5C13.321 1.5 15 3.179 15 5.25v5.5c0 2.071-1.679 3.75-3.75 3.75h-6.5C2.679 14.5 1 12.821 1 10.75v-5.5C1 3.179 2.679 1.5 4.75 1.5h6.5zM4.75 3C3.507 3 2.5 4.007 2.5 5.25v5.5C2.5 11.993 3.507 13 4.75 13h6.5c1.243 0 2.25-1.007 2.25-2.25v-5.5C13.5 4.007 12.493 3 11.25 3h-6.5zm2.566 1.88c.426-.346 1.053-.321 1.45.075L10.78 6.97c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-.97-.97v3.44c0 .414-.336.75-.75.75s-.75-.336-.75-.75V7.06l-.97.97c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l2.014-2.015.082-.074z"
        fill={color}
      />
    </svg>
  );
};

ShareScreen16.category = 'Interface General';

export default ShareScreen16;
