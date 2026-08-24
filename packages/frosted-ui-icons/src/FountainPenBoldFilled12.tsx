import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenBoldFilled12"
      {...props}
    >
      <path
        d="M9.392 8.066L8.734 9.91c-.217.607-.749 1.045-1.386 1.142l-5.872.89L4.93 8.485C5.535 8.397 6 7.879 6 7.25 6 6.56 5.44 6 4.75 6c-.63 0-1.151.468-1.236 1.075L.06 10.53l.89-5.875.022-.118c.13-.584.551-1.065 1.12-1.268l1.843-.659 5.456 5.456zM5.886.856C6.433-.065 7.655-.27 8.47.372l.158.14 2.863 2.863c.806.807.638 2.157-.343 2.74l-.55.327-5.04-5.039.328-.549z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBoldFilled12.category = 'Interface General';

export default FountainPenBoldFilled12;
