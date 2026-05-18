import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.4388 4.18879C12.0245 3.60316 12.9751 3.60334 13.5609 4.18879C14.1465 4.77445 14.1463 5.72408 13.5609 6.30988L7.56088 12.3099C6.97509 12.8957 6.02459 12.8957 5.43881 12.3099L2.43978 9.31086C1.85403 8.7251 1.85409 7.77556 2.43978 7.18976C3.02557 6.60398 3.97509 6.60398 4.56088 7.18976L6.50033 9.12824L11.4388 4.18879Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled16.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled16;
