import * as React from 'react';
import { IconProps } from './types';

export const CoinFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinFilled16"
      {...props}
    >
      <path
        d="M5.5 1C7.985 1 10 4.134 10 8s-2.015 7-4.5 7S1 11.866 1 8s2.015-7 4.5-7zm8.896 10.5c-.182.478-.403.923-.66 1.324C12.911 14.106 11.67 15 10.126 15H8.938c.38-.371.717-.791 1.005-1.24.43-.669.78-1.432 1.038-2.26h3.415zm.42-5.5c.121.638.185 1.31.185 2s-.063 1.362-.186 2h-3.478c.107-.646.163-1.316.163-2 0-.684-.056-1.354-.163-2h3.478zm-4.689-5c1.543 0 2.785.894 3.608 2.176.258.401.479.846.66 1.324h-3.414c-.258-.828-.607-1.591-1.038-2.26C9.655 1.79 9.318 1.37 8.938 1h1.189z"
        fill={color}
      />
    </svg>
  );
};

CoinFilled16.category = 'Money & Shopping';

export default CoinFilled16;
