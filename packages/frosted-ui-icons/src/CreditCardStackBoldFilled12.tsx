import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 8.50098C11.9995 9.88124 10.8804 11.001 9.5 11.001H4.5C3.11961 11.001 2.00053 9.88124 2 8.50098V6.75098H12V8.50098ZM7.25 1C8.0301 1 8.71746 1.39701 9.12109 2H4.5C2.567 2 1 3.567 1 5.5V8.12012C0.397265 7.71644 0 7.02991 0 6.25V3.25C0 2.00736 1.00736 1 2.25 1H7.25ZM9.5 3C10.7963 3 11.8619 3.98755 11.9873 5.25098H2.0127C2.13814 3.98755 3.20367 3 4.5 3H9.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackBoldFilled12.category = 'Money & Shopping';

export default CreditCardStackBoldFilled12;
