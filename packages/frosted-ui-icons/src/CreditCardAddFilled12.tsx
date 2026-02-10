import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAddFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.75 7.5C10.1642 7.5 10.5 7.83579 10.5 8.25V9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H10.5V11.25C10.5 11.6642 10.1642 12 9.75 12C9.33579 12 9 11.6642 9 11.25V10.5H8.25C7.8358 10.5 7.50003 10.1642 7.5 9.75C7.5 9.33579 7.83579 9 8.25 9H9V8.25C9 7.83579 9.33579 7.5 9.75 7.5ZM12 7.89844C11.9026 7.85903 11.8016 7.82659 11.6973 7.80273C11.4939 6.91377 10.7006 6.25 9.75 6.25C8.79939 6.25 8.00608 6.91377 7.80273 7.80273C6.91377 8.00608 6.25 8.79939 6.25 9.75C6.25001 10.2236 6.41511 10.658 6.69043 11H2.75C1.23122 11 4.0266e-09 9.76878 0 8.25V5.5H12V7.89844ZM9.25 1C10.7688 1 12 2.23122 12 3.75V4H0V3.75C0 2.23122 1.23122 1 2.75 1H9.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAddFilled12.category = 'Money & Shopping';

export default CreditCardAddFilled12;
