import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5 0C13.8805 0.00019725 15 1.11941 15 2.5V14.7646C15 15.679 14.0503 16.2837 13.2217 15.8975L10.9229 14.8232L8.58887 15.8594C8.21402 16.0257 7.78582 16.025 7.41113 15.8584L5.08789 14.8232L2.77734 15.8994C1.94878 16.2848 1 15.6795 1 14.7656V2.5C1 1.11929 2.11929 0 3.5 0H12.5ZM5.5 10C4.67157 10 4 10.6716 4 11.5C4 12.3284 4.67157 13 5.5 13H10.5C11.3284 13 12 12.3284 12 11.5C12 10.6716 11.3284 10 10.5 10H5.5ZM11.3105 3.43945C10.7248 2.85367 9.77524 2.85367 9.18945 3.43945L7.125 5.50391L6.81055 5.18945C6.22476 4.60367 5.27524 4.60367 4.68945 5.18945C4.10367 5.77524 4.10367 6.72476 4.68945 7.31055L6.06445 8.68555C6.65024 9.27133 7.59976 9.27133 8.18555 8.68555L11.3105 5.56055C11.8963 4.97476 11.8963 4.02524 11.3105 3.43945Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled16.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled16;
