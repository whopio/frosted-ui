import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.75 19.9263V4.05417C4.75 2.21585 6.79994 1.12042 8.32822 2.14206L20.1513 10.0457C21.5106 10.9543 21.5144 12.9512 20.1586 13.865L8.33545 21.8336C6.80777 22.8632 4.75 21.7686 4.75 19.9263Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayFilled24.category = 'Sound & Music';

export default PlayFilled24;
