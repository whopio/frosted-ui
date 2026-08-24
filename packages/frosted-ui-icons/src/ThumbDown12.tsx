import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbDown12"
      {...props}
    >
      <path
        d="M6.003 10.864c.973-.108 1.69-1.011 1.534-2.009l-.153-.98H9.13c1.377 0 2.43-1.227 2.223-2.589l-.418-2.75C10.768 1.437 9.823.625 8.711.625H1.875c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h1.106l1.712 3.322c.215.417.646.678 1.113.678l.197-.01zM2.125 2.125h.5v3.25h-.5v-3.25zm2 3.693V2.125h4.586c.37 0 .685.27.741.637l.42 2.75c.068.453-.283.863-.742.863H6.508c-.22 0-.427.096-.57.263-.142.166-.205.386-.171.602l.288 1.847c.015.102-.035.199-.118.25L4.125 5.818z"
        fill={color}
      />
    </svg>
  );
};

ThumbDown12.category = 'Interface General';

export default ThumbDown12;
