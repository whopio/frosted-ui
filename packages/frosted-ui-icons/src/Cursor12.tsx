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
        d="M.91 2.629l3.045 8.796c.332.96 1.663 1.034 2.098.115l.586-1.237c.32-.676 1.213-.83 1.741-.302l1.841 1.842c.203.202.478.316.765.316h.092c.597 0 1.081-.484 1.081-1.08v-.093c0-.287-.114-.562-.316-.764L10 8.38c-.528-.528-.374-1.421.302-1.741l1.237-.586c.919-.435.846-1.766-.115-2.098L2.63.91C1.563.54.54 1.563.909 2.629z"
        stroke={color}
        strokeWidth="1.621"
        strokeLinecap="round"
      />
    </svg>
  );
};

Cursor12.category = 'Arrows';

export default Cursor12;
