import * as React from 'react';
import { IconProps } from './types';

export const LightsOn20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 19.25H12M2.1875 9.99995H0.9375M19.0625 9.99995L17.8125 10M10 2.1875V0.9375M4.0625 4.0625L3.125 3.125M16.5625 16.5625L15.625 15.625M3.4375 16.5625L4.375 15.625M15.9375 4.0625L16.875 3.125M5 10C5 11.9353 6.49823 13.571 7.17501 14.2112C7.37519 14.4005 7.5 14.6604 7.5 14.9359C7.5 15.9378 8.31218 16.75 9.31406 16.75H10.6859C11.6878 16.75 12.5 15.9378 12.5 14.9359C12.5 14.6604 12.6248 14.4005 12.825 14.2112C13.5018 13.571 15 11.9353 15 10C15 7.5 13 5 10 5C7 5 5 7.5 5 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LightsOn20;
