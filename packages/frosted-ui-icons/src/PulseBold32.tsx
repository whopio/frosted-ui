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
        d="M30.283 8.30256C30.6682 7.90709 31.3014 7.89814 31.697 8.28303C32.0925 8.66823 32.1014 9.30143 31.7166 9.69709L19.8914 21.8377C19.2535 22.4926 18.2011 22.4926 17.5632 21.8377L10.5447 14.6326L1.71656 23.6971C1.33136 24.0926 0.698159 24.1015 0.302499 23.7166C-0.0929735 23.3314 -0.101922 22.6982 0.282968 22.3026L9.3816 12.9617L9.50562 12.8465C10.1062 12.3453 10.9841 12.3454 11.5847 12.8465L11.7097 12.9617L18.7263 20.1658L30.283 8.30256Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PulseBold32.category = 'Stats & Charts';

export default PulseBold32;
