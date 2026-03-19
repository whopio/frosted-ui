import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.25 0C10.2163 0.000197241 11 0.783623 11 1.75V10.958C11 11.6992 10.2525 12.2072 9.56348 11.9346L7.98242 11.3076L6.54395 11.8896C6.19486 12.0307 5.80395 12.0302 5.45508 11.8887L4.02539 11.3076L2.43555 11.9355C1.74649 12.2075 1 11.6998 1 10.959V1.75C1 0.783502 1.7835 0 2.75 0H9.25ZM8.63379 3.7666C8.14562 3.27851 7.35433 3.27848 6.86621 3.7666L5.27441 5.35742L5.13379 5.2168C4.64556 4.72876 3.85428 4.72862 3.36621 5.2168C2.87837 5.70504 2.8781 6.49637 3.36621 6.98438L4.3916 8.00977C4.87977 8.49741 5.67119 8.49664 6.15918 8.00879L8.63379 5.53418C9.12182 5.04607 9.12172 4.25474 8.63379 3.7666Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled12.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled12;
