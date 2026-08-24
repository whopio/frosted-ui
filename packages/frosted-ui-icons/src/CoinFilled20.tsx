import * as React from 'react';
import { IconProps } from './types';

export const CoinFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinFilled20"
      {...props}
    >
      <path
        d="M7 1c3.314 0 6 4.03 6 9s-2.686 9-6 9-6-4.03-6-9 2.686-9 6-9zm11.413 13c-.26.82-.6 1.574-1.018 2.234C16.355 17.877 14.8 19 12.885 19h-1.991c.606-.511 1.143-1.125 1.595-1.804.62-.93 1.112-2.013 1.454-3.196h4.47zm.37-6.5c.145.798.22 1.637.22 2.5s-.075 1.702-.22 2.5H14.29c.138-.806.21-1.643.21-2.5s-.072-1.695-.21-2.5h4.494zM12.885 1c1.916 0 3.47 1.123 4.51 2.766.417.66.758 1.414 1.018 2.234h-4.47c-.342-1.183-.834-2.266-1.454-3.196C12.037 2.125 11.5 1.51 10.894 1h1.99z"
        fill={color}
      />
    </svg>
  );
};

CoinFilled20.category = 'Money & Shopping';

export default CoinFilled20;
