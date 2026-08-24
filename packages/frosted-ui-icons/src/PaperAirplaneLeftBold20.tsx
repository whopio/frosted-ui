import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBold20"
      {...props}
    >
      <path
        d="M2.478 12.43c-1.97-1.021-1.97-3.838 0-4.858l11.983-6.21c2.62-1.359 5.476 1.366 4.243 4.047L16.7 9.766c-.068.148-.068.318 0 .466l2.005 4.362c1.233 2.68-1.623 5.404-4.243 4.046L2.478 12.43zm.92-3.083c-.53.275-.53 1.032 0 1.306l11.985 6.212c.93.482 1.942-.484 1.505-1.435l-2.005-4.363-.031-.071h-4.119c-.552 0-1-.448-1-1s.448-1 1-1h4.122l.028-.066 2.004-4.357c.437-.951-.576-1.917-1.505-1.436L3.398 9.348z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBold20.category = 'Communication';

export default PaperAirplaneLeftBold20;
