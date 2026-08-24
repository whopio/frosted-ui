import * as React from 'react';
import { IconProps } from './types';

export const BanFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanFilled20"
      {...props}
    >
      <path
        d="M17.225 3.835C18.642 5.495 19.5 7.646 19.5 10c0 5.247-4.253 9.5-9.5 9.5-2.354 0-4.506-.858-6.165-2.275l13.39-13.39zM10 .5c2.353 0 4.505.857 6.164 2.274l-13.39 13.39C1.357 14.504.5 12.354.5 10 .5 4.753 4.753.5 10 .5z"
        fill={color}
      />
    </svg>
  );
};

BanFilled20.category = 'Interface General';

export default BanFilled20;
