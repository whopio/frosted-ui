import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.32911 11.6739C5.23461 13.4421 7.7623 13.442 8.66782 11.6739L12.7019 3.79501C13.798 1.65414 11.649 -0.699255 9.41774 0.198807L6.51539 1.36757C6.50542 1.37159 6.49363 1.37158 6.48366 1.36757L3.5792 0.19775C1.34808 -0.700027 -0.800703 1.65326 0.295023 3.79395L4.32911 11.6739ZM6.73963 10.686C6.63902 10.8824 6.35792 10.8824 6.25731 10.686L2.22322 2.80711C2.04075 2.45046 2.39836 2.05816 2.77006 2.20739L5.41644 3.27356V5.69148C5.41667 6.28945 5.9015 6.77457 6.49953 6.77457C7.09755 6.77456 7.58238 6.28945 7.58262 5.69148V3.2725L10.2269 2.20845C10.5986 2.05906 10.9562 2.45146 10.7737 2.80817L6.73963 10.686Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBold12.category = 'Communication';

export default PaperAirplaneDownBold12;
