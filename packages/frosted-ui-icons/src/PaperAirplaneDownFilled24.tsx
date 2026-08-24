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
        d="M9.452 21.445c1.07 2.069 4.03 2.07 5.1 0l8.062-15.591c1.472-2.848-1.55-5.92-4.421-4.494L12.75 4.063v7.18c0 .414-.336.75-.75.75-.415 0-.75-.335-.75-.75V4.06L5.807 1.358C2.936-.068-.086 3.005 1.387 5.852l8.065 15.593z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownFilled24.category = 'Communication';

export default PaperAirplaneDownFilled24;
