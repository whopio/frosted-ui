import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.3824 7L20.5659 7C21.3579 7 22 7.64208 22 8.43412V15.5659C22 16.3579 21.3579 17 20.5659 17H12.3824C12.1712 17 12 17.1712 12 17.3824V20.6615C12 21.1658 11.3959 21.4247 11.0307 21.0769L2.37234 12.8308C1.8976 12.3786 1.8976 11.6213 2.37234 11.1692L11.0307 2.92311C11.396 2.57528 12 2.83416 12 3.33851V6.61757C12 6.82878 12.1712 7 12.3824 7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBold24.category = 'Arrows';

export default ArrowFatLeftBold24;
