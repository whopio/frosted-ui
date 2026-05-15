import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.4517 21.4445C10.5222 23.5138 13.4821 23.5141 14.5523 21.4445L22.6138 5.85365C24.086 3.00633 21.0639 -0.0657558 18.1929 1.35951L12.7496 4.06263V11.2433C12.7495 11.6574 12.4137 11.9932 11.9996 11.9933C11.5854 11.9933 11.2496 11.6575 11.2496 11.2433V4.05873L5.80717 1.35756C2.93599 -0.0675507 -0.0860482 3.00456 1.38627 5.8517L9.4517 21.4445Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownFilled24.category = 'Communication';

export default PaperAirplaneDownFilled24;
