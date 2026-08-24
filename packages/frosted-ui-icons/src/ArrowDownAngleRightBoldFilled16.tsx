import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBoldFilled16"
      {...props}
    >
      <path
        d="M2.5 1.75c-.829 0-1.5.672-1.5 1.5V8.5c0 1.519 1.231 2.75 2.75 2.75h5.943l-.703.64c-.612.558-.657 1.507-.1 2.12.558.612 1.507.657 2.12.1l3.5-3.188c.308-.28.486-.678.49-1.095.004-.417-.166-.818-.469-1.104l-3.5-3.313c-.601-.57-1.551-.543-2.12.059-.57.601-.544 1.551.058 2.12l.697.661H4v-5c0-.828-.672-1.5-1.5-1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled16.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled16;
