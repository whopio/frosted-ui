import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceiptBold32"
      {...props}
    >
      <path
        d="M24 1c2.761 0 5 2.239 5 5v23.241c0 1.213-1.298 1.985-2.364 1.405l-5.099-2.771-4.668 2.776c-.536.32-1.203.32-1.74 0l-4.658-2.777-5.108 2.774C4.297 31.226 3 30.454 3 29.24V6c0-2.761 2.239-5 5-5h16zM8 3C6.343 3 5 4.343 5 6v22.568l4.768-2.587c.407-.22.89-.24 1.308-.06l.175.09L16 28.842l4.76-2.83.175-.09c.359-.153.765-.162 1.13-.022l.177.083L27 28.568V6c0-1.657-1.343-3-3-3H8zm10.25 11c.552 0 1 .448 1 1s-.448 1-1 1h-8.5c-.552 0-1-.448-1-1s.448-1 1-1h8.5zm4-6c.552 0 1 .448 1 1s-.448 1-1 1H9.75c-.552 0-1-.448-1-1s.448-1 1-1h12.5z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBold32.category = 'Money & Shopping';

export default ReceiptBold32;
