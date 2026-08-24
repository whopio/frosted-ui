import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStackFilled12"
      {...props}
    >
      <path
        d="M12 8.75C12 9.993 10.992 11 9.75 11h-5.5C3.008 11 2 9.994 2 8.75V6.5h10v2.25zM4.25 8c-.414 0-.75.336-.75.75s.336.75.75.75h1.714c.414 0 .75-.336.75-.75S6.378 8 5.964 8H4.25zm4-7c.698 0 1.3.41 1.58 1.001H4.25C2.455 2 1 3.455 1 5.25v3.5l.001.08C.41 8.55.001 7.948 0 7.25v-3.5C0 2.23 1.231 1 2.75 1h5.5zm1.5 2c1.158 0 2.111.875 2.235 2h-9.97c.124-1.125 1.077-2 2.235-2h5.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardStackFilled12.category = 'Money & Shopping';

export default CreditCardStackFilled12;
