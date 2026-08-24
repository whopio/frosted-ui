import * as React from 'react';
import { IconProps } from './types';

export const LightsOff24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightsOff24"
      {...props}
    >
      <path
        d="M14.4 22.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.8zM12 5c4.076 0 7 3.098 7 7 0 2.6-1.568 4.221-2.618 5.015-.407.307-.632.715-.632 1.086 0 1.6-1.298 2.899-2.9 2.899h-1.7c-1.602 0-2.9-1.298-2.9-2.9 0-.37-.226-.778-.632-1.085C6.568 16.22 5 14.599 5 12c0-3.902 2.924-7 7-7zm0 1.5c-3.224 0-5.5 2.402-5.5 5.5 0 1.928 1.152 3.16 2.022 3.818.664.502 1.228 1.312 1.228 2.283 0 .772.627 1.399 1.4 1.399h1.7c.773 0 1.4-.627 1.4-1.4 0-.97.563-1.78 1.227-2.282.871-.658 2.023-1.89 2.023-3.818 0-3.098-2.276-5.5-5.5-5.5z"
        fill={color}
      />
    </svg>
  );
};

LightsOff24.category = 'Objects';

export default LightsOff24;
