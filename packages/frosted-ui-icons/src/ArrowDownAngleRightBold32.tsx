import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2 4.75C1.44776 4.75004 1.00001 5.19775 1 5.75V17.5C1 19.433 2.56704 21 4.5 21H27.5176L22.8066 25.5293C22.4088 25.9121 22.3966 26.5453 22.7793 26.9434C23.1621 27.3413 23.7953 27.3534 24.1934 26.9707L30.6934 20.7207C30.8893 20.5322 31 20.2719 31 20C31 19.7281 30.8893 19.4678 30.6934 19.2793L24.1934 13.0293C23.7953 12.6466 23.1621 12.6587 22.7793 13.0566C22.3966 13.4547 22.4088 14.0879 22.8066 14.4707L27.5176 19H4.5C3.67161 19 3 18.3284 3 17.5V5.75C2.99999 5.19772 2.55228 4.75 2 4.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightBold32.category = 'Arrows';

export default ArrowDownAngleRightBold32;
