import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftFilled16"
      {...props}
    >
      <path
        d="M2.133 9.865C.62 9.082.62 6.92 2.133 6.137l9.379-4.86c2.015-1.045 4.21 1.051 3.261 3.113l-1.317 2.858h-4.69c-.414 0-.75.336-.75.75s.336.75.75.75h4.688l1.32 2.865c.95 2.062-1.247 4.158-3.262 3.114l-9.38-4.862z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftFilled16.category = 'Communication';

export default PaperAirplaneLeftFilled16;
