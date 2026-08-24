import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownFilled32"
      {...props}
    >
      <path
        d="M12.765 29.032c1.358 2.627 5.115 2.627 6.473 0L30.503 7.224c1.896-3.67-2.03-7.615-5.71-5.736l-7.949 4.06c-.03.015-.063.027-.094.04v9.664c0 .415-.336.75-.75.75s-.75-.335-.75-.75V5.585c-.028-.012-.058-.023-.086-.038L7.201 1.484C3.521-.393-.402 3.55 1.493 7.22l11.272 21.81z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownFilled32.category = 'Communication';

export default PaperAirplaneDownFilled32;
