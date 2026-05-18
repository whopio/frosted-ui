import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.0003 1C10.5525 1 11.0003 1.44772 11.0003 2C11.0003 2.55228 10.5525 3 10.0003 3H9.00025V3.54688C10.8221 3.7155 12.2419 4.35864 13.2503 5.45801C14.4141 6.72707 14.8893 8.44998 14.9827 10.2822C15.0322 11.2555 14.239 12 13.3333 12H9.00025V13H13.0003C13.5525 13 14.0003 13.4477 14.0003 14C14.0003 14.5523 13.5525 15 13.0003 15H3.00025C2.44799 15 2.00025 14.5523 2.00025 14C2.00025 13.4477 2.44799 13 3.00025 13H7.00025V12H2.66724C1.76148 12 0.968276 11.2555 1.01783 10.2822L1.04029 9.94043C1.17361 8.23666 1.65912 6.64784 2.75025 5.45801C3.75855 4.35864 5.17836 3.71551 7.00025 3.54688V3H6.00025C5.44799 2.99997 5.00025 2.55227 5.00025 2C5.00025 1.44773 5.44799 1.00003 6.00025 1H10.0003Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellBoldFilled16.category = 'Objects';

export default ReceptionBellBoldFilled16;
