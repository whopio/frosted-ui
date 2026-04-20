import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.5 20.2499C30.3284 20.2499 31 20.9215 31 21.7499V23.9999C31 27.8659 27.866 30.9999 24 30.9999H8C4.13402 30.9999 1.00003 27.8659 1 23.9999V21.7499C1 20.9215 1.67157 20.2499 2.5 20.2499C3.32843 20.2499 4 20.9215 4 21.7499V23.9999C4.00003 26.2091 5.79088 27.9999 8 27.9999H24C26.2091 27.9999 28 26.2091 28 23.9999V21.7499C28 20.9215 28.6716 20.2499 29.5 20.2499ZM19.9395 1.4394C20.5252 0.853614 21.4748 0.853614 22.0605 1.4394L27.0605 6.4394C27.6463 7.02519 27.6463 7.97472 27.0605 8.56049L22.0605 13.5605C21.4748 14.1462 20.5252 14.1462 19.9395 13.5605C19.3537 12.9747 19.3537 12.0252 19.9395 11.4394L22.3789 8.99995H18.5C16.567 8.99995 15 10.567 15 12.4999V22.2499C14.9999 23.0783 14.3284 23.7499 13.5 23.7499C12.6716 23.7499 12.0001 23.0783 12 22.2499V12.4999C12 8.9101 14.9101 5.99995 18.5 5.99995H22.3789L19.9395 3.56049C19.3537 2.97472 19.3537 2.02519 19.9395 1.4394Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBoldFilled32.category = 'Arrows';

export default ArrowUpRightFromBracketBoldFilled32;
