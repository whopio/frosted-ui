import * as React from 'react';
import { IconProps } from './types';

export const BankBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BankBold12"
      {...props}
    >
      <path
        d="M4.69.277c.835-.367 1.785-.367 2.62 0l3.496 1.54C11.53 2.135 12 2.853 12 3.646v1.015c0 .621-.425 1.14-1 1.29V10l.102.005c.505.051.898.477.898.995 0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1 0-.518.393-.944.897-.995L1 10V5.95c-.575-.148-1-.668-1-1.289V3.646c0-.792.469-1.51 1.194-1.83L4.69.277zM3 5.996V10h2V5.996H3zm4 0V10h2V5.996H7zm-.496-3.889c-.321-.141-.687-.141-1.008 0L2 3.647v.349h8v-.35L6.504 2.107z"
        fill={color}
      />
    </svg>
  );
};

BankBold12.category = 'Buildings';

export default BankBold12;
