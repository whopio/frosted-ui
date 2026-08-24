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
        d="M29.029 19.235c2.627-1.358 2.627-5.115 0-6.473L7.22 1.496C3.55-.399-.394 3.526 1.485 7.206l4.06 7.95c.015.03.026.062.04.093h9.664c.414 0 .75.336.75.75s-.336.75-.75.75H5.582c-.013.029-.024.058-.038.086l-4.063 7.963c-1.877 3.68 2.067 7.604 5.737 5.708l21.81-11.271z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled32.category = 'Communication';

export default PaperAirplaneRightFilled32;
