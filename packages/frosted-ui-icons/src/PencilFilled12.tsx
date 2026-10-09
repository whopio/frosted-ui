import * as React from 'react';
import { IconProps } from './types';

export const PencilFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilFilled12"
      {...props}
    >
      <path
        d="M9.25 6.81l-4.47 4.47c-.115.115-.263.19-.424.212l-3.5.5c-.233.034-.47-.045-.637-.212-.166-.167-.245-.403-.211-.636l.5-3.5c.023-.16.097-.31.211-.424l4.47-4.47 4.06 4.06zM9.062 0c.72 0 1.409.286 1.917.794l.227.227c.508.508.794 1.198.794 1.917 0 .718-.286 1.408-.794 1.916l-.896.896-4.06-4.06.895-.896C7.654.286 8.343 0 9.062 0z"
        fill={color}
      />
    </svg>
  );
};

PencilFilled12.category = 'Objects';

export default PencilFilled12;
