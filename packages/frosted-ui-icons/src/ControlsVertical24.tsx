import * as React from 'react';
import { IconProps } from './types';

export const ControlsVertical24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsVertical24"
      {...props}
    >
      <path
        d="M10 7.5c0 2.229-1.621 4.079-3.749 4.436V23.25c0 .414-.337.75-.751.75s-.75-.336-.75-.75V11.936C2.622 11.579 1 9.729 1 7.5c0-2.23 1.622-4.08 3.75-4.437V.75c0-.413.336-.75.75-.75s.75.337.751.75v2.313C8.379 3.421 10 5.27 10 7.5zm-1.5 0c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.656 1.343 3 3 3s3-1.344 3-3zm14.5 9c0 2.23-1.622 4.08-3.75 4.437v2.313c0 .413-.336.75-.75.75s-.75-.337-.75-.75v-2.313C15.622 20.58 14 18.73 14 16.5c0-2.23 1.622-4.079 3.75-4.436V.75c0-.414.336-.75.75-.75s.75.336.75.75v11.314c2.128.357 3.75 2.207 3.75 4.436zm-1.5 0c0-1.656-1.343-3-3-3s-3 1.344-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3z"
        fill={color}
      />
    </svg>
  );
};

ControlsVertical24.category = 'Interface General';

export default ControlsVertical24;
