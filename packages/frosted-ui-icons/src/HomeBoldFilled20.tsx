import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.86719 2.20923C8.65101 0.614625 11.349 0.614623 13.1328 2.20923L17.6182 6.21899C18.4973 7.00494 19 8.12863 19 9.30786V15.6428C18.9998 17.4968 17.4966 19.0002 15.6426 19.0002H13.5703C12.6869 19.0002 11.9701 18.2839 11.9697 17.4006V12.97C11.9696 11.8821 11.0879 11.0002 10 11.0002C8.91208 11.0002 8.03041 11.8821 8.03027 12.97V17.4006C8.02987 18.2839 7.31309 19.0002 6.42969 19.0002H4.35742C2.50344 19.0002 1.00018 17.4968 1 15.6428V9.30786C1 8.12863 1.50272 7.00494 2.38184 6.21899L6.86719 2.20923Z"
        fill={color}
      />
    </svg>
  );
};

HomeBoldFilled20.category = 'Buildings';

export default HomeBoldFilled20;
