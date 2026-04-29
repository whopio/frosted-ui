import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.4683 9.89447C16.1749 10.3228 16.1744 11.3485 15.4673 11.7763L8.90305 15.7478C8.34612 16.0846 7.64742 16.0838 7.0906 15.7468L0.530257 11.7763C-0.176372 11.3483 -0.176906 10.3229 0.529281 9.89447L2.20696 8.8779L6.31524 11.3651C7.34931 11.991 8.64607 11.9915 9.68037 11.3661L13.7906 8.8779L15.4683 9.89447ZM7.09158 0.253166C7.64847 -0.0840297 8.34698 -0.0837101 8.90403 0.253166L15.4693 4.22765C16.1762 4.65588 16.1755 5.68254 15.4683 6.11041L8.90403 10.081C8.34703 10.4179 7.64848 10.4181 7.09158 10.081L0.531234 6.10943C-0.175389 5.68138 -0.176341 4.65585 0.530257 4.22765L7.09158 0.253166Z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled16.category = 'Interface General';

export default ConnectionFilled16;
