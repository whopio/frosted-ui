import * as React from 'react';
import { IconProps } from './types';

export const PencilBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilBoldFilled12"
      {...props}
    >
      <path
        d="M9.093 7.11l-4.087 4.087c-.146.146-.335.24-.54.27l-3.332.475c-.297.043-.597-.056-.809-.268-.212-.212-.31-.512-.268-.809l.475-3.333.034-.15c.046-.146.126-.28.236-.389l4.087-4.088L9.093 7.11zM8.916.047c.748 0 1.465.297 1.994.826l.215.215c.529.529.826 1.246.826 1.994s-.297 1.466-.826 1.995l-.685.684-4.204-4.204.685-.684C7.45.345 8.168.048 8.916.048z"
        fill={color}
      />
    </svg>
  );
};

PencilBoldFilled12.category = 'Objects';

export default PencilBoldFilled12;
