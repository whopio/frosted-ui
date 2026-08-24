import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinbaseBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm-.028 2.75C4.18 2.75 2.75 4.217 2.75 6s1.43 3.25 3.222 3.25c1.137 0 2.131-.595 2.702-1.481.299-.465.164-1.083-.3-1.382-.464-.299-1.083-.166-1.382.299-.222.345-.599.564-1.02.564-.663 0-1.222-.547-1.222-1.25s.56-1.25 1.222-1.25c.421 0 .798.22 1.02.564.3.465.918.598 1.382.3.464-.3.599-.918.3-1.383-.57-.886-1.565-1.48-2.702-1.481z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseBoldFilled12.category = 'Interface General';

export default CoinbaseBoldFilled12;
