import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftFilled24"
      {...props}
    >
      <path
        d="M2.552 14.545c-2.07-1.07-2.07-4.03 0-5.1l15.59-8.062c2.848-1.473 5.92 1.55 4.495 4.42l-2.703 5.444h-7.181c-.414 0-.75.336-.75.75s.336.75.75.75h7.184l2.702 5.442c1.425 2.872-1.647 5.894-4.494 4.421L2.552 14.545z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeftFilled24.category = 'Communication';

export default PaperAirplaneLeftFilled24;
