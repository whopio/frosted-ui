import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfFilled12"
      {...props}
    >
      <path
        d="M5.327.136c.433-.181.92-.181 1.353 0l3.35 1.403c.65.273 1.074.91 1.074 1.614v3.59c0 1.623-1.157 2.87-2.182 3.674-1.059.83-2.19 1.352-2.526 1.5-.252.109-.533.109-.785 0-.149-.066-.455-.207-.841-.414-.485-.26-1.096-.625-1.685-1.086C2.06 9.614.903 8.366.902 6.743v-3.59c0-.352.107-.688.294-.97.047-.07.099-.137.156-.2.056-.063.117-.122.183-.176.131-.11.28-.2.443-.268L5.328.136zm.675 10.307v.001c.424-.199 1.24-.615 1.995-1.208.947-.742 1.606-1.6 1.607-2.493v-3.59c0-.1-.061-.19-.154-.23L6.1 1.52c-.031-.013-.065-.02-.098-.02v8.944z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldHalfFilled12.category = 'Security';

export default ShieldHalfFilled12;
