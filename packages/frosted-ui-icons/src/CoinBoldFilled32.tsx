import * as React from 'react';
import { IconProps } from './types';

export const CoinBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinBoldFilled32"
      {...props}
    >
      <path
        d="M11.5 1C17.299 1 22 7.716 22 16c0 8.284-4.701 15-10.5 15S1 24.284 1 16C1 7.716 5.701 1 11.5 1zm18.445 22c-.416 1.274-.949 2.443-1.588 3.472C26.664 29.198 24.18 31 21.153 31H17.43c1.197-.87 2.254-1.98 3.14-3.246.973-1.39 1.764-2.997 2.342-4.754h7.034zm.538-12c.339 1.57.518 3.253.518 5 0 1.747-.18 3.43-.518 5h-7.021c.355-1.589.544-3.27.544-5s-.19-3.411-.544-5h7.021zm-9.33-10c3.027 0 5.511 1.802 7.204 4.528.639 1.029 1.172 2.198 1.588 3.472h-7.034c-.578-1.757-1.369-3.364-2.342-4.754C19.683 2.98 18.626 1.87 17.43 1h3.724z"
        fill={color}
      />
    </svg>
  );
};

CoinBoldFilled32.category = 'Money & Shopping';

export default CoinBoldFilled32;
