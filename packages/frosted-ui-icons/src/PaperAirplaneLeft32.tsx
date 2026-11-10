import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeft32"
      {...props}
    >
      <path
        d="M2.968 19.235c-2.628-1.358-2.628-5.115 0-6.473L24.775 1.497c3.671-1.896 7.616 2.03 5.737 5.71l-4.06 7.949c-.27.527-.269 1.152 0 1.68l4.064 7.962c1.877 3.68-2.068 7.604-5.738 5.708L2.968 19.235zm.688-5.14c-1.545.799-1.545 3.008 0 3.807l21.81 11.271c2.376 1.227 4.928-1.312 3.714-3.693l-4.064-7.963c-.125-.246-.218-.504-.28-.767h-8.089c-.414 0-.75-.336-.75-.75 0-.415.336-.75.75-.75h8.087c.06-.267.155-.527.282-.776l4.06-7.949c1.216-2.381-1.337-4.922-3.712-3.695L3.656 14.095z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeft32.category = 'Communication';

export default PaperAirplaneLeft32;
