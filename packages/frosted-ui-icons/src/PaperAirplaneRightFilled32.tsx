import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightFilled32"
      {...props}
    >
      <path
        d="M29.028 19.235c2.628-1.358 2.628-5.115 0-6.473L7.221 1.497C3.55-.4-.395 3.527 1.484 7.207l4.06 7.949c.016.03.027.063.041.094h9.664c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H5.582c-.013.028-.024.058-.038.085L1.48 24.799c-1.877 3.68 2.068 7.604 5.738 5.708l21.81-11.271z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneRightFilled32.category = 'Communication';

export default PaperAirplaneRightFilled32;
