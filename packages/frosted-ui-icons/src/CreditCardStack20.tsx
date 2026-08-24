import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStack20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStack20"
      {...props}
    >
      <path
        d="M13.055 2.305c1.884 0 3.423 1.478 3.522 3.338 1.86.098 3.339 1.639 3.339 3.524v5c0 1.947-1.58 3.528-3.527 3.528H6.943c-1.884 0-3.425-1.479-3.523-3.339-1.86-.099-3.338-1.639-3.338-3.523v-5c0-1.948 1.58-3.527 3.527-3.528h9.446zM4.916 14.167c0 1.12.908 2.028 2.027 2.028h9.446c1.12 0 2.027-.909 2.027-2.028v-3.695h-13.5v3.695zm5.916-1.306c.414 0 .75.336.75.75s-.336.75-.75.75H7.499c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.333zM3.609 3.805c-1.119 0-2.027.908-2.027 2.028v5c0 1.054.805 1.92 1.834 2.018V9.167c0-1.948 1.58-3.528 3.527-3.528h8.13c-.098-1.028-.964-1.834-2.018-1.834H3.609zM6.943 7.14c-1.054 0-1.92.805-2.018 1.833h13.481c-.098-1.028-.963-1.832-2.017-1.833H6.943z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardStack20.category = 'Money & Shopping';

export default CreditCardStack20;
