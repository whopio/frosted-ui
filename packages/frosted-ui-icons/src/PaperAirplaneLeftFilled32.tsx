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
        d="M2.968 19.235c-2.628-1.358-2.628-5.115 0-6.473L24.775 1.496c3.67-1.895 7.616 2.03 5.737 5.71l-4.06 7.95c-.016.03-.027.062-.041.093h-9.664c-.414 0-.75.336-.75.75s.336.75.75.75h9.667c.013.029.024.058.038.086l4.063 7.963c1.878 3.68-2.067 7.604-5.737 5.708L2.968 19.235z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftFilled32.category = 'Communication';

export default PaperAirplaneLeftFilled32;
