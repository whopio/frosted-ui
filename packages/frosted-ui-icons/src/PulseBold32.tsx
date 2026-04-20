import * as React from 'react';
import { IconProps } from './types';

export const PulseBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M30.283 8.3025C30.6682 7.90703 31.3014 7.89808 31.697 8.28297C32.0925 8.66817 32.1014 9.30137 31.7166 9.69703L19.8914 21.8377C19.2535 22.4925 18.2011 22.4925 17.5632 21.8377L10.5447 14.6326L1.71656 23.697C1.33136 24.0925 0.698159 24.1015 0.302499 23.7166C-0.0929735 23.3314 -0.101922 22.6982 0.282968 22.3025L9.3816 12.9617L9.50562 12.8464C10.1062 12.3453 10.9841 12.3453 11.5847 12.8464L11.7097 12.9617L18.7263 20.1658L30.283 8.3025Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PulseBold32.category = 'Stats & Charts';

export default PulseBold32;
