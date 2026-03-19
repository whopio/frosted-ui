import * as React from 'react';
import { IconProps } from './types';

export const CreditCard16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5 2C14.433 2 16 3.567 16 5.5V10.5C16 12.433 14.433 14 12.5 14H3.5C1.567 14 0 12.433 0 10.5V5.5C1.28853e-07 3.567 1.567 2 3.5 2H12.5ZM1.5 10.5C1.5 11.6046 2.39543 12.5 3.5 12.5H12.5C13.6046 12.5 14.5 11.6046 14.5 10.5V7.5H1.5V10.5ZM6.25 9.5C6.66421 9.5 7 9.83579 7 10.25C7 10.6642 6.66421 11 6.25 11H3.75C3.33579 11 3 10.6642 3 10.25C3 9.83579 3.33579 9.5 3.75 9.5H6.25ZM3.5 3.5C2.39543 3.5 1.5 4.39543 1.5 5.5V6H14.5V5.5C14.5 4.39543 13.6046 3.5 12.5 3.5H3.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard16.category = 'Money & Shopping';

export default CreditCard16;
