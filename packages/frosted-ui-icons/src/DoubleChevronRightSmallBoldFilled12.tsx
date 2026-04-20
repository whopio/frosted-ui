import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.36865 4.28156C5.88073 3.79338 5.88057 3.00206 6.36865 2.51398C6.85676 2.02632 7.6482 2.02619 8.13623 2.51398L10.5591 4.93683C11.1448 5.52251 11.1445 6.47309 10.5591 7.0589L8.13623 9.48175C7.64808 9.96991 6.85681 9.96991 6.36865 9.48175C5.88064 8.99358 5.88054 8.20228 6.36865 7.71417L8.08447 5.99835L6.36865 4.28156ZM1.36865 4.28156C0.880727 3.79338 0.880573 3.00206 1.36865 2.51398C1.85676 2.02632 2.6482 2.02619 3.13623 2.51398L5.55908 4.93683C6.14476 5.52251 6.14454 6.47309 5.55908 7.0589L3.13623 9.48175C2.64808 9.96991 1.85681 9.96991 1.36865 9.48175C0.880636 8.99358 0.880544 8.20228 1.36865 7.71417L3.08447 5.99835L1.36865 4.28156Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled12.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled12;
