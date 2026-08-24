import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownFilled16"
      {...props}
    >
      <path
        d="M6.137 13.87c.783 1.51 2.945 1.51 3.728 0l4.86-9.38C15.77 2.475 13.675.28 11.613 1.23L8.754 2.546v4.69c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.548l-2.865-1.32C2.327.278.23 2.476 1.275 4.49l4.862 9.38z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownFilled16.category = 'Communication';

export default PaperAirplaneDownFilled16;
