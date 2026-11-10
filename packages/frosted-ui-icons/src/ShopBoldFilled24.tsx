import * as React from 'react';
import { IconProps } from './types';

export const ShopBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShopBoldFilled24"
      {...props}
    >
      <path
        d="M17.057 1c2.211 0 4.188 1.38 4.951 3.455l.842 2.29c.62 1.688.2 3.432-.85 4.649v8.082C22 21.422 20.42 23 18.474 23H5.524C3.579 23 2 21.422 2 19.476v-8.083C.95 10.176.529 8.433 1.149 6.745l.842-2.29C2.754 2.38 4.73 1 6.94 1h10.116zM11.44 14.25c-1.21 0-2.19.981-2.19 2.19V20h5.5v-3.56c0-1.21-.981-2.19-2.19-2.19h-1.12zM6.942 4c-.954 0-1.806.595-2.135 1.49l-.842 2.29C3.57 8.857 4.366 10 5.513 10c.84 0 1.547-.632 1.64-1.467L7.66 4h-.718zm3.293 4.03c-.116 1.051.707 1.97 1.764 1.97 1.058 0 1.88-.919 1.764-1.97L13.32 4H10.68l-.445 4.03zm6.61.503c.094.835.8 1.467 1.64 1.467 1.148 0 1.945-1.143 1.549-2.22l-.842-2.29C18.862 4.595 18.01 4 17.057 4h-.718l.506 4.533z"
        fill={color}
      />
    </svg>
  );
};

ShopBoldFilled24.category = 'Buildings';

export default ShopBoldFilled24;
