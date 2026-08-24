import * as React from 'react';
import { IconProps } from './types';

export const BrushFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrushFilled12"
      {...props}
    >
      <path
        d="M.01 6.46c.071.024.147.04.226.04h10.98c.033 0 .067-.003.1-.008l-.005.266C11.296 8.264 10.085 9.5 8.561 9.5h-.68c.194 1.308-.816 2.5-2.156 2.5-1.339 0-2.35-1.192-2.155-2.5h-.833c-1.51 0-2.77-1.227-2.736-2.767l.008-.272zM6.223 0c.507 0 .908.27 1.174.515.213.195.4.428.554.653.105-.185.214-.371.322-.527.076-.11.168-.231.27-.333.05-.051.122-.116.213-.172C8.84.084 9.002 0 9.217 0h1.01c1.264 0 2.045 1.258 1.69 2.372-.303.955-.457 1.773-.534 2.649-.053-.013-.11-.02-.167-.021H.236c-.047 0-.093.004-.138.013.105-1.054.308-2.053.707-3.24C1.177.671 2.228 0 3.335 0h2.89z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BrushFilled12.category = 'Objects';

export default BrushFilled12;
