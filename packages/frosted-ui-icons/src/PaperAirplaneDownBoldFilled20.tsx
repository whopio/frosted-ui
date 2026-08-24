import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBoldFilled20"
      {...props}
    >
      <path
        d="M7.572 17.524c1.02 1.968 3.836 1.968 4.857 0l6.21-11.984c1.359-2.62-1.366-5.476-4.047-4.243l-3.587 1.65v6.32c0 .552-.448 1-1 1s-1-.448-1-1V2.95L5.407 1.296C2.727.064.003 2.92 1.361 5.54l6.21 11.985z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled20.category = 'Communication';

export default PaperAirplaneDownBoldFilled20;
