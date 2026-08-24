import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AppleWalletBoldFilled32"
      {...props}
    >
      <path
        d="M26 3.75c2.9 0 5.25 2.35 5.25 5.25v13c0 2.9-2.35 5.25-5.25 5.25H6C3.1 27.25.75 24.9.75 22V9C.75 6.1 3.1 3.75 6 3.75h20zm-20 2C4.205 5.75 2.75 7.205 2.75 9v6.25h5.453c.696 0 1.38.182 1.985.527l4.82 2.754c.615.352 1.37.352 1.984 0l4.82-2.754c.605-.345 1.289-.527 1.985-.527h5.453V9c0-1.795-1.455-3.25-3.25-3.25H6z"
        fill={color}
      />
    </svg>
  );
};

AppleWalletBoldFilled32.category = 'Money & Shopping';

export default AppleWalletBoldFilled32;
