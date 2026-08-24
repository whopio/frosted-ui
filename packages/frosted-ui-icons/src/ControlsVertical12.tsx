import * as React from 'react';
import { IconProps } from './types';

export const ControlsVertical12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsVertical12"
      {...props}
    >
      <path
        d="M5 4c0 1.12-.736 2.066-1.75 2.385v4.865c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.385C.736 6.066 0 5.119 0 4c0-1.12.736-2.066 1.75-2.385V.75c0-.414.336-.75.75-.75s.75.336.75.75v.865C4.264 1.934 5 2.881 5 4zM3.5 4c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zM12 8c0 1.12-.736 2.066-1.75 2.385v.865c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.865C7.736 10.066 7 9.119 7 8c0-1.12.736-2.066 1.75-2.385V.75c0-.414.336-.75.75-.75s.75.336.75.75v4.865C11.264 5.934 12 6.881 12 8zm-1.5 0c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"
        fill={color}
      />
    </svg>
  );
};

ControlsVertical12.category = 'Interface General';

export default ControlsVertical12;
