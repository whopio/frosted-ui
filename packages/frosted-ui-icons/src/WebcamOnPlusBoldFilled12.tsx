import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOnPlusBoldFilled12"
      {...props}
    >
      <path
        d="M5.75 1.5c1.26 0 2.353.718 2.892 1.768L9.6 2.55l.094-.066C10.676 1.854 12 2.553 12 3.75v4.5c0 1.236-1.412 1.942-2.4 1.2l-.958-.719C8.102 9.781 7.01 10.5 5.75 10.5h-2.5C1.455 10.5 0 9.045 0 7.25v-2.5C0 2.955 1.455 1.5 3.25 1.5h2.5zM4.5 3.75c-.414 0-.75.336-.75.75v.75H3c-.414 0-.75.336-.75.75s.336.75.75.75h.75v.75c0 .414.336.75.75.75s.75-.336.75-.75v-.75H6c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-.75V4.5c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusBoldFilled12.category = 'Interface General';

export default WebcamOnPlusBoldFilled12;
