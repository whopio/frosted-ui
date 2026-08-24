import * as React from 'react';
import { IconProps } from './types';

export const BrushFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrushFilled20"
      {...props}
    >
      <path
        d="M17.695 10.5c-.137 2.224-1.963 4-4.233 4h-.917l.31 2.17c.251 1.758-1.112 3.33-2.887 3.33s-3.139-1.572-2.888-3.33l.31-2.17H6.224c-2.248 0-4.134-1.756-4.22-4h15.691zM10.718 0c.66 0 1.183.359 1.555.732.354.357.642.803.87 1.22.144-.367.303-.742.464-1.045.092-.17.201-.35.326-.499.062-.074.147-.163.257-.24.106-.073.287-.168.524-.168h2.52c1.251 0 2.06 1.25 1.667 2.379-.864 2.486-1.11 4.359-1.175 6.621H2.052c.115-2.132.405-3.981 1.144-6.255C3.75 1.045 5.368 0 7.093 0h3.625z"
        fill={color}
      />
    </svg>
  );
};

BrushFilled20.category = 'Objects';

export default BrushFilled20;
