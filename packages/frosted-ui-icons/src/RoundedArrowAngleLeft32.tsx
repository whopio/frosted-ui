import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.5036 30.9998C26.3028 30.9995 31.0045 26.2981 31.0046 20.4988C31.0044 14.6996 26.3027 9.99805 20.5036 9.9978H3.5407L11.2214 2.27905C11.5134 1.98555 11.5127 1.51071 11.2194 1.21851C10.9259 0.926483 10.4511 0.927185 10.1589 1.22046L1.21941 10.2029C0.928561 10.4955 0.928419 10.969 1.21941 11.2615L10.1589 20.2439C10.451 20.537 10.9259 20.5376 11.2194 20.2458C11.5128 19.9536 11.5135 19.4788 11.2214 19.1853L3.57195 11.4978H20.5036C25.4743 11.4981 29.5044 15.528 29.5046 20.4988C29.5045 25.4696 25.4744 29.4995 20.5036 29.4998H16.5856C16.1715 29.4998 15.8358 29.8357 15.8356 30.2498C15.8357 30.6639 16.1715 30.9998 16.5856 30.9998H20.5036Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeft32.category = 'Arrows';

export default RoundedArrowAngleLeft32;
