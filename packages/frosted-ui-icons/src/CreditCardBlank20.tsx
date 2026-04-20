import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.249 3C18.3201 3 19.999 4.67893 19.999 6.75V13.25C19.999 15.3211 18.3201 17 16.249 17H3.75C1.67914 16.9998 0 15.3209 0 13.25V6.75C0 4.67908 1.67914 3.00025 3.75 3H16.249ZM1.5 8.5V13.25C1.5 14.4925 2.50757 15.4998 3.75 15.5H16.249C17.4917 15.5 18.499 14.4926 18.499 13.25V8.5H1.5ZM3.75 4.5C2.50757 4.50025 1.5 5.50751 1.5 6.75V7H18.499V6.75C18.499 5.50736 17.4917 4.5 16.249 4.5H3.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank20.category = 'Money & Shopping';

export default CreditCardBlank20;
