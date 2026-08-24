import * as React from 'react';
import { IconProps } from './types';

export const CouponBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponBoldFilled16"
      {...props}
    >
      <path
        d="M5.392 0c.56 0 1 .301 1.261.666l.1.16.107.167c.272.372.689.595 1.14.595l.19-.014c.44-.062.827-.336 1.055-.749l.1-.159C9.608.301 10.048 0 10.608 0h.893C12.88 0 14 1.12 14 2.5v11c0 1.38-1.12 2.5-2.5 2.5h-.942c-.62 0-1.093-.37-1.337-.781-.232-.39-.611-.648-1.036-.706L8 14.5c-.5 0-.956.273-1.222.719-.244.411-.717.781-1.337.781H4.5C3.12 16 2 14.88 2 13.5v-11C2 1.12 3.12 0 4.5 0h.892z"
        fill={color}
      />
    </svg>
  );
};

CouponBoldFilled16.category = 'Money & Shopping';

export default CouponBoldFilled16;
