import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBold20"
      {...props}
    >
      <path
        d="M7.571 17.524c1.02 1.969 3.837 1.969 4.858 0l6.21-11.983c1.358-2.62-1.366-5.477-4.047-4.244l-4.358 2.004c-.147.068-.318.068-.465 0L5.407 1.296C2.727.064.003 2.92 1.36 5.54l6.211 11.984zm3.082-.92c-.274.529-1.03.529-1.305 0L3.136 4.619c-.482-.93.484-1.942 1.435-1.505l4.363 2.005.07.03v4.12c.001.551.449 1 1 1 .553-.001 1-.449 1-1V5.146c.023-.01.045-.018.066-.028l4.358-2.004c.95-.438 1.917.575 1.435 1.505l-6.21 11.984z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneDownBold20.category = 'Communication';

export default PaperAirplaneDownBold20;
