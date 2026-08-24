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
        d="M2.968 19.235c-2.628-1.358-2.628-5.115 0-6.473L24.775 1.496c3.67-1.895 7.615 2.03 5.737 5.71l-4.06 7.95c-.27.527-.27 1.152 0 1.68l4.063 7.962c1.878 3.68-2.067 7.604-5.737 5.708L2.968 19.235zm.688-5.14c-1.545.799-1.545 3.008 0 3.807l21.81 11.271c2.375 1.227 4.928-1.312 3.713-3.693l-4.063-7.963c-.126-.246-.218-.504-.28-.768h-8.09c-.413 0-.75-.335-.75-.75 0-.414.337-.75.75-.75h8.088c.06-.266.155-.526.282-.775l4.06-7.95c1.215-2.38-1.337-4.921-3.712-3.695L3.656 14.095z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeft32.category = 'Communication';

export default PaperAirplaneLeft32;
