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
        d="M4.222 10.91c.743 1.451 2.818 1.451 3.56 0l3.975-7.77c.924-1.804-.937-3.767-2.789-2.942l-2.215.986V5.25c0 .414-.335.75-.75.75-.414 0-.75-.336-.75-.75V1.184L3.033.196C1.18-.628-.68 1.336.245 3.14l3.977 7.77z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownFilled12.category = 'Communication';

export default PaperAirplaneDownFilled12;
