import * as React from 'react';
import { IconProps } from './types';

export const CoinBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinBoldFilled24"
      {...props}
    >
      <path
        d="M8.497 1c4.14 0 7.497 4.925 7.497 11s-3.357 11-7.497 11S1 18.075 1 12 4.357 1 8.497 1zm13.75 16c-.311.964-.714 1.85-1.202 2.627-1.257 2.001-3.12 3.35-5.405 3.35h-2.01c.689-.6 1.303-1.303 1.828-2.073.776-1.138 1.393-2.461 1.825-3.904h4.964zm.497-8c.166.954.254 1.957.254 2.988 0 1.04-.09 2.051-.259 3.012h-4.99c.164-.968.252-1.973.252-3s-.088-2.032-.252-3h4.995zM15.64 1c2.285 0 4.148 1.348 5.405 3.35.492.783.897 1.677 1.21 2.65h-4.972c-.432-1.443-1.049-2.766-1.825-3.904-.532-.78-1.155-1.491-1.856-2.096h2.038z"
        fill={color}
      />
    </svg>
  );
};

CoinBoldFilled24.category = 'Money & Shopping';

export default CoinBoldFilled24;
