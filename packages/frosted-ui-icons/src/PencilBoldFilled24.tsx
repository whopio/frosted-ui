import * as React from 'react';
import { IconProps } from './types';

export const PencilBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilBoldFilled24"
      {...props}
    >
      <path
        d="M18.5 12.914l-9.043 9.043c-.153.153-.351.253-.565.283l-7 1c-.312.045-.626-.06-.849-.283-.222-.223-.327-.537-.283-.849l1-7c.03-.214.13-.412.283-.565l9.042-9.044 7.415 7.415zM17.813.75c1.265 0 2.479.503 3.374 1.397l.666.666c.894.895 1.397 2.109 1.397 3.374 0 1.266-.502 2.48-1.397 3.375L19.914 11.5 12.5 4.085l1.939-1.938c.895-.894 2.11-1.397 3.375-1.397z"
        fill={color}
      />
    </svg>
  );
};

PencilBoldFilled24.category = 'Objects';

export default PencilBoldFilled24;
