import * as React from 'react';
import { IconProps } from './types';

export const Venmo20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Venmo20"
      {...props}
    >
      <path
        d="M17.86.771c.066-.012.133.017.168.074.655 1.081.951 2.2.951 3.605 0 4.586-4.033 10.538-7.33 14.739-.031.039-.078.061-.127.061H4.185c-.079 0-.146-.057-.16-.135L1.051 1.932c-.016-.093.051-.18.146-.189l6.28-.576c.087-.008.165.054.176.141l1.524 11.846c.019.15.215.194.294.065 1.447-2.358 3.105-5.806 3.105-8.196 0-1.269-.207-2.166-.537-2.904-.044-.097.013-.212.118-.233L17.86.772z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Venmo20.category = 'Social & Brands';

export default Venmo20;
