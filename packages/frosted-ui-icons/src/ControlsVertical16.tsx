import * as React from 'react';
import { IconProps } from './types';

export const ControlsVertical16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsVertical16"
      {...props}
    >
      <path
        d="M6.752 5.379c0 1.512-1.074 2.773-2.5 3.062v6.812c0 .414-.336.75-.75.75s-.75-.336-.75-.75V8.379C1.452 8 .502 6.8.502 5.379s.95-2.622 2.25-3V.75c0-.414.336-.75.75-.75s.75.336.75.75v1.566c1.426.29 2.5 1.551 2.5 3.063zm-1.5 0c0-.898-.728-1.625-1.625-1.625s-1.625.728-1.625 1.625.728 1.625 1.625 1.625 1.625-.728 1.625-1.625zm10.25 5.245c0 1.512-1.074 2.773-2.5 3.063v1.566c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.629c-1.3-.379-2.25-1.578-2.25-3s.95-2.621 2.25-3V.75c0-.414.336-.75.75-.75s.75.336.75.75v6.812c1.426.289 2.5 1.55 2.5 3.062zm-1.5 0c0-.897-.728-1.625-1.625-1.625s-1.625.728-1.625 1.625.728 1.625 1.625 1.625 1.625-.728 1.625-1.625z"
        fill={color}
      />
    </svg>
  );
};

ControlsVertical16.category = 'Interface General';

export default ControlsVertical16;
