import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBlankBold32"
      {...props}
    >
      <path
        d="M26.75 4.5c2.9 0 5.25 2.35 5.25 5.25v12.5c0 2.9-2.35 5.25-5.25 5.25H5.25C2.35 27.5 0 25.15 0 22.25V9.75C0 6.85 2.35 4.5 5.25 4.5h21.5zM2 12.5v9.75c0 1.795 1.455 3.25 3.25 3.25h21.5c1.795 0 3.25-1.455 3.25-3.25V12.5H2zm3.25-6C3.455 6.5 2 7.955 2 9.75v.75h28v-.75c0-1.795-1.455-3.25-3.25-3.25H5.25z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold32.category = 'Money & Shopping';

export default CreditCardBlankBold32;
