import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBold24"
      {...props}
    >
      <path
        d="M9.231 21.315c1.165 2.248 4.38 2.247 5.543-.001l7.812-15.092c1.57-3.035-1.613-6.328-4.7-4.86l-5.492 2.613c-.246.117-.531.117-.777 0l-5.5-2.615C3.03-.107-.155 3.187 1.416 6.22l7.814 15.094zm3.768-.92c-.418.807-1.573.807-1.991 0L3.193 5.301c-.69-1.333.708-2.779 2.064-2.135l5.5 2.616c.08.038.163.07.245.101v5.358c0 .552.448 1 1 1s1-.448 1-1V5.884c.084-.03.168-.064.25-.103l5.494-2.613c1.356-.644 2.755.802 2.065 2.135l-7.812 15.092z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneDownBold24.category = 'Communication';

export default PaperAirplaneDownBold24;
