import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseFillted24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinbaseFillted24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm.161 3.75C7.808 4.25 4.25 7.704 4.25 12c0 4.296 3.558 7.75 7.911 7.75 3.364 0 6.247-2.06 7.389-4.977.15-.385-.04-.82-.425-.971-.386-.151-.82.039-.972.425-.917 2.345-3.249 4.023-5.992 4.023-3.557 0-6.411-2.814-6.411-6.25s2.854-6.25 6.411-6.25c2.743 0 5.075 1.678 5.992 4.023.151.386.586.576.972.425.386-.15.576-.586.425-.971C18.408 6.31 15.525 4.25 12.16 4.25z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseFillted24.category = 'Interface General';

export default CoinbaseFillted24;
