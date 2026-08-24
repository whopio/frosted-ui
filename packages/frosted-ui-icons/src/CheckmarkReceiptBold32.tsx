import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceiptBold32"
      {...props}
    >
      <path
        d="M24 1c2.761 0 5 2.239 5 5v23.241c0 1.214-1.298 1.985-2.364 1.406l-5.099-2.772-4.668 2.776c-.536.32-1.203.32-1.74 0l-4.658-2.777-5.108 2.774C4.297 31.226 3 30.454 3 29.24V6.001c0-2.762 2.239-5 5-5h16zM8 3C6.343 3 5 4.343 5 6V28.57l4.768-2.587c.407-.221.89-.24 1.308-.06l.175.09L16 28.84l4.76-2.83.175-.089c.359-.154.765-.163 1.13-.023l.177.084L27 28.568V6c0-1.657-1.343-3-3-3H8zm12.043 7.043c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-6.63 6.63c-.187.188-.442.293-.707.293-.265 0-.52-.105-.707-.293l-2.87-2.87c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l2.163 2.163 5.923-5.923z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptBold32.category = 'Money & Shopping';

export default CheckmarkReceiptBold32;
