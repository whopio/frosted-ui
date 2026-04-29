import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 1.25C10.6569 1.25 12 2.59315 12 4.25V7.75C12 9.40685 10.6569 10.75 9 10.75H3C1.34315 10.75 0 9.40685 0 7.75V4.25C0 2.59315 1.34315 1.25 3 1.25H9ZM2 7.75C2 8.30228 2.44772 8.75 3 8.75H9C9.55229 8.75 10 8.30228 10 7.75V6H2V7.75ZM5.5 6.5C5.91421 6.5 6.25 6.83579 6.25 7.25C6.25 7.66421 5.91421 8 5.5 8H4C3.58579 8 3.25 7.66421 3.25 7.25C3.25 6.83579 3.58579 6.5 4 6.5H5.5ZM3 3.25C2.53419 3.25 2.14436 3.5689 2.0332 4H9.9668C9.85564 3.5689 9.46581 3.25 9 3.25H3Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBold12.category = 'Money & Shopping';

export default CreditCardBold12;
