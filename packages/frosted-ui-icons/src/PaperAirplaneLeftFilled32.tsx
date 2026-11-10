import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftFilled32"
      {...props}
    >
      <path
        d="M2.968 19.235c-2.628-1.358-2.628-5.115 0-6.473L24.775 1.497c3.671-1.896 7.616 2.03 5.737 5.71l-4.06 7.949c-.015.03-.027.063-.04.094h-9.665c-.414 0-.75.335-.75.75 0 .414.336.75.75.75h9.667c.013.028.024.058.038.085l4.064 7.963c1.877 3.68-2.068 7.604-5.738 5.708L2.968 19.235z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeftFilled32.category = 'Communication';

export default PaperAirplaneLeftFilled32;
