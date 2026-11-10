import * as React from 'react';
import { IconProps } from './types';

export const Trash24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Trash24"
      {...props}
    >
      <path
        d="M16.369 5.75l-.892-1.828C14.828 2.592 13.479 1.75 12 1.75c-1.479 0-2.828.843-3.477 2.172L7.631 5.75m8.738 0H7.631m8.738 0h3.44m-12.178 0h-3.44m-1.691 0h1.69m0 0l1.647 13.916c.174 1.474 1.424 2.584 2.908 2.584h6.51c1.484 0 2.733-1.11 2.908-2.584L19.809 5.75m0 0H21.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Trash24.category = 'Interface General';

export default Trash24;
