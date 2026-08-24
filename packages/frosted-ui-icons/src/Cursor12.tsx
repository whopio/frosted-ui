import * as React from 'react';
import { IconProps } from './types';

export const Cursor12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Cursor12"
      {...props}
    >
      <path
        d="M3.955 11.425L.91 2.63C.54 1.563 1.563.54 2.629.909l8.796 3.046c.96.332 1.034 1.663.115 2.098l-1.237.586c-.676.32-.83 1.213-.302 1.741l1.842 1.841c.202.203.316.478.316.765v.092c0 .597-.484 1.081-1.08 1.081h-.093c-.287 0-.562-.114-.764-.316L8.38 10c-.528-.528-1.421-.374-1.741.302l-.586 1.237c-.435.919-1.766.846-2.098-.115z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Cursor12.category = 'Arrows';

export default Cursor12;
