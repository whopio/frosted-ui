import * as React from 'react';
import { IconProps } from './types';

export const StarFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StarFilled24"
      {...props}
    >
      <path
        d="M10.535 1.498c.59-1.228 2.342-1.228 2.932 0L16.2 7.186l.017.026c.02.023.048.04.081.043l6.288.824c1.353.177 1.904 1.845.905 2.787L18.894 15.2c-.03.029-.044.07-.036.11l1.154 6.192c.25 1.348-1.176 2.367-2.371 1.723l-5.578-3.008c-.038-.02-.085-.02-.123 0l-5.578 3.008c-1.196.644-2.623-.375-2.372-1.723l1.155-6.193c.007-.039-.006-.08-.036-.11L.51 10.867c-.998-.942-.448-2.61.905-2.787l6.288-.824c.044-.005.08-.032.098-.069l2.733-5.688z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarFilled24.category = 'Interface General';

export default StarFilled24;
