import * as React from 'react';
import { IconProps } from './types';

export const BellFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.1226 28.4997C20.3223 30.548 18.3313 31.9996 15.9996 31.9996C13.6679 31.9996 11.6768 30.548 10.8766 28.4997L21.1226 28.4997ZM16.0006 0C20.9081 0.000117257 23.8386 2.25176 25.5297 5.04584C27.1889 7.7874 27.6338 11.0073 27.7416 13.0057C27.8019 14.1229 28.1719 15.1742 28.8725 15.9451L29.2885 16.4031C31.4064 18.7332 31.4454 22.2798 29.3793 24.656C28.0845 26.1449 26.208 26.9997 24.2348 26.9997L7.76432 26.9997C5.79118 26.9997 3.91463 26.1448 2.61984 24.656C0.553626 22.2797 0.592382 18.7322 2.71066 16.4022L3.12668 15.9451C3.82728 15.1742 4.19719 14.1229 4.25752 13.0057C4.3655 11.0074 4.811 7.78739 6.47039 5.04584C8.16174 2.25174 11.0928 1.27607e-06 16.0006 0Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BellFilled32.category = 'Interface General';

export default BellFilled32;
