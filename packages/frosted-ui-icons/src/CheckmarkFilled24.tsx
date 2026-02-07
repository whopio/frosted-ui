import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.3203 5.84082C19.8223 5.32765 20.6459 5.31839 21.1592 5.82031C21.6723 6.32234 21.6816 7.14596 21.1797 7.65918L9.92969 19.1592C9.68687 19.4074 9.35407 19.5479 9.00684 19.5498C8.70304 19.5514 8.4098 19.4466 8.17676 19.2559L8.08105 19.1689L3.08105 14.1689C2.57337 13.6613 2.57337 12.8387 3.08105 12.3311C3.58874 11.8234 4.41127 11.8234 4.91895 12.3311L8.98926 16.4023L19.3203 5.84082Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkFilled24.category = 'Checkmarks';

export default CheckmarkFilled24;
