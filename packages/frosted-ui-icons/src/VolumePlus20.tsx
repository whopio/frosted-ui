import * as React from 'react';
import { IconProps } from './types';

export const VolumePlus20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumePlus20"
      {...props}
    >
      <path
        d="M8.291 1.535C9.751.291 12 1.33 12 3.248v13.504c0 1.919-2.248 2.957-3.709 1.713l-3.646-3.107c-.272-.23-.617-.358-.973-.358H2.75C1.231 15 0 13.769 0 12.25v-4.5C0 6.231 1.231 5 2.75 5h.922c.356 0 .701-.127.973-.358L8.29 1.535zM10.5 3.248c0-.64-.75-.985-1.236-.57L5.617 5.784c-.542.462-1.232.716-1.945.716H2.75c-.69 0-1.25.56-1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25h.922c.713 0 1.403.255 1.945.717l3.647 3.105c.487.415 1.236.07 1.236-.57V3.248zm6.25 3.502c.414 0 .75.336.75.75v1.75h1.75c.414 0 .75.336.75.75s-.336.75-.75.75H17.5v1.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.75h-1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H16V7.5c0-.414.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumePlus20.category = 'Sound & Music';

export default VolumePlus20;
