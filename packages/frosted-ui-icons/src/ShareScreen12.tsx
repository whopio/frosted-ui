import * as React from 'react';
import { IconProps } from './types';

export const ShareScreen12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareScreen12"
      {...props}
    >
      <path
        d="M8.438.938c1.656 0 3 1.343 3 3v4.124c0 1.657-1.344 3-3 3H3.561c-1.656 0-3-1.343-3-3V3.939c0-1.657 1.344-3 3-3h4.876zm-4.876 1.5c-.828 0-1.5.671-1.5 1.5v4.124c0 .829.672 1.5 1.5 1.5h4.876c.828 0 1.5-.671 1.5-1.5V3.939c0-.829-.672-1.5-1.5-1.5H3.561zM5.37 3.516c.393-.32.972-.298 1.338.068l1.51 1.51c.294.294.294.768 0 1.061-.292.293-.767.293-1.06 0l-.407-.407v2.127c0 .414-.336.75-.75.75s-.75-.336-.75-.75V5.748l-.407.407c-.293.293-.768.293-1.06 0-.294-.293-.294-.767 0-1.06l1.51-1.511.076-.068z"
        fill={color}
      />
    </svg>
  );
};

ShareScreen12.category = 'Interface General';

export default ShareScreen12;
