import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.49951 4.25C1.67109 4.25 0.999519 4.92158 0.999512 5.75V17.5C0.999512 19.7091 2.79037 21.5 4.99951 21.5H25.7749L21.9595 25.1689C21.3626 25.7432 21.3444 26.693 21.9185 27.29C22.4927 27.8867 23.4426 27.9051 24.0396 27.3311L30.5396 21.0811C30.8333 20.7983 30.9995 20.4078 30.9995 20C30.9995 19.5922 30.8333 19.2017 30.5396 18.9189L24.0396 12.6689C23.4426 12.0949 22.4927 12.1133 21.9185 12.71C21.3444 13.307 21.3626 14.2568 21.9595 14.8311L25.7749 18.5H4.99951C4.44723 18.5 3.99951 18.0523 3.99951 17.5V5.75C3.9995 4.92173 3.32772 4.25025 2.49951 4.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled32.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled32;
