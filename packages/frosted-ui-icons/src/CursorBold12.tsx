import * as React from 'react';
import { IconProps } from './types';

export const CursorBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorBold12"
      {...props}
    >
      <path
        d="M1.202 2.988L4 11.15c.324.948 1.629 1.04 2.085.149l.539-1.054c.334-.654 1.208-.791 1.727-.272l1.607 1.606c.203.203.478.317.764.317h.093c.598 0 1.082-.484 1.082-1.082v-.092c0-.287-.114-.562-.317-.765L9.974 8.35c-.52-.519-.382-1.393.272-1.727l1.053-.54c.893-.455.8-1.76-.148-2.084L2.988 1.202C1.88.822.822 1.882 1.202 2.988z"
        stroke={color}
        strokeWidth="2.163"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold12.category = 'Arrows';

export default CursorBold12;
