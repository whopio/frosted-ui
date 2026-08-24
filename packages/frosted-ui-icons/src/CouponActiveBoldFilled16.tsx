import * as React from 'react';
import { IconProps } from './types';

export const CouponActiveBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponActiveBoldFilled16"
      {...props}
    >
      <path
        d="M5.392 0c.56 0 1 .301 1.261.666l.1.16.107.167c.272.372.689.595 1.14.595l.19-.014c.44-.062.827-.336 1.055-.749l.1-.159C9.608.301 10.048 0 10.608 0h.893C12.88 0 14 1.12 14 2.5v11c0 1.38-1.12 2.5-2.5 2.5h-.942c-.62 0-1.093-.37-1.337-.781-.232-.39-.611-.648-1.036-.706L8 14.5c-.5 0-.956.273-1.222.719-.244.411-.717.781-1.337.781H4.5C3.12 16 2 14.88 2 13.5v-11C2 1.12 3.12 0 4.5 0h.892zM10.5 9C9.672 9 9 9.672 9 10.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5S11.328 9 10.5 9zm.707-4.207c-.39-.39-1.024-.39-1.414 0l-5 5c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0l5-5c.39-.39.39-1.024 0-1.414zM5.5 4C4.672 4 4 4.672 4 5.5S4.672 7 5.5 7 7 6.328 7 5.5 6.328 4 5.5 4z"
        fill={color}
      />
    </svg>
  );
};

CouponActiveBoldFilled16.category = 'Money & Shopping';

export default CouponActiveBoldFilled16;
