import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownFilled24"
      {...props}
    >
      <path
        d="M9.451 21.445c1.07 2.069 4.03 2.07 5.1 0l8.062-15.591c1.473-2.847-1.55-5.92-4.42-4.494l-5.444 2.703v7.18c0 .415-.336.75-.75.75s-.75-.335-.75-.75V4.06L5.807 1.358C2.935-.067-.087 3.005 1.386 5.852L9.45 21.445z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneDownFilled24.category = 'Communication';

export default PaperAirplaneDownFilled24;
