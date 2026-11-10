import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownFilled12"
      {...props}
    >
      <path
        d="M4.223 10.91c.743 1.451 2.817 1.451 3.56 0l3.975-7.77c.923-1.804-.937-3.767-2.79-2.942l-2.214.986V5.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V1.184L3.034.196C1.18-.63-.68 1.335.244 3.14l3.978 7.77z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneDownFilled12.category = 'Communication';

export default PaperAirplaneDownFilled12;
