import * as React from 'react';
import { IconProps } from './types';

export const UnpinFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UnpinFilled32"
      {...props}
    >
      <path
        d="M1.22 1.22c.293-.293.767-.293 1.06 0l28.5 28.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-6.693-6.692c-.056-.056-.132-.088-.212-.088H17.05c-.166 0-.3.134-.3.3v5.95c0 .414-.336.75-.75.75s-.75-.336-.75-.75V24.3c0-.166-.134-.3-.3-.3H8.695c-2.738 0-4.553-2.842-3.402-5.327l2.478-5.348c.15-.322.228-.674.228-1.03V9.184c0-.08-.032-.156-.088-.212L1.22 2.28c-.293-.293-.293-.767 0-1.06zM20.249 1c2.071 0 3.75 1.679 3.75 3.75v7.545c0 .355.078.708.228 1.03l2.478 5.348c.656 1.416.348 2.947-.545 4.002-.107.127-.299.127-.416.01L8.087 5.026c-.056-.056-.088-.132-.088-.212V4.75c0-2.07 1.68-3.75 3.75-3.75h8.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UnpinFilled32.category = 'Interface General';

export default UnpinFilled32;
