import * as React from 'react';
import { IconProps } from './types';

export const CrownBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.833 14C14.8329 15.1045 13.9375 16 12.833 16H3.16699C2.13177 15.9996 1.28007 15.2124 1.17773 14.2041L1.16699 14H14.833ZM6.21094 1.3418C6.94793 -0.132193 9.05187 -0.13199 9.78906 1.3418L11.5439 4.85156L12.4277 3.79102C13.7252 2.23407 16.2495 3.37288 15.9414 5.37598L14.9219 12H1.07812L0.0585938 5.37598C-0.249383 3.37314 2.27474 2.23471 3.57227 3.79102L4.45605 4.85156L6.21094 1.3418Z"
        fill={color}
      />
    </svg>
  );
};

CrownBoldFilled16.category = 'Objects';

export default CrownBoldFilled16;
