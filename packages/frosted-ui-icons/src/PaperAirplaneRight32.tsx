import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRight32"
      {...props}
    >
      <path
        d="M29.028 19.235c2.628-1.358 2.628-5.115 0-6.473L7.221 1.497C3.55-.4-.394 3.527 1.484 7.207l4.06 7.949c.27.527.27 1.152 0 1.68L1.48 24.797c-1.877 3.68 2.068 7.604 5.738 5.708l21.81-11.271zm-.688-5.14c1.545.799 1.545 3.008 0 3.807L6.53 29.173C4.153 30.4 1.601 27.861 2.815 25.48l4.064-7.963c.125-.246.218-.504.28-.767h8.089c.414 0 .75-.336.75-.75 0-.415-.336-.75-.75-.75H7.162c-.06-.267-.155-.527-.282-.776L2.82 6.525C1.605 4.144 4.157 1.603 6.532 2.83L28.34 14.095z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneRight32.category = 'Communication';

export default PaperAirplaneRight32;
