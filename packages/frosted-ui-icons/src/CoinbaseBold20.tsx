import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinbaseBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm.03 1.75c2.41 0 4.477 1.469 5.344 3.558.211.51-.031 1.095-.541 1.306-.51.212-1.095-.03-1.307-.54C12.961 7.21 11.61 6.25 10.03 6.25 7.936 6.25 6.25 7.935 6.25 10s1.686 3.75 3.78 3.75c1.579 0 2.93-.96 3.496-2.323.212-.51.797-.753 1.307-.541.51.211.752.796.541 1.306-.867 2.09-2.934 3.558-5.345 3.558-3.186 0-5.779-2.569-5.779-5.75s2.593-5.75 5.78-5.75z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseBold20.category = 'Interface General';

export default CoinbaseBold20;
