import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpBold20"
      {...props}
    >
      <path
        d="M7.573 2.477C8.593.51 11.41.51 12.43 2.477l6.21 11.984c1.358 2.62-1.366 5.475-4.047 4.243L10.236 16.7c-.148-.068-.318-.068-.466 0l-4.362 2.005c-2.68 1.233-5.404-1.623-4.046-4.243l6.21-11.985zm3.082.92c-.275-.529-1.032-.528-1.306 0L3.137 15.383c-.482.93.484 1.942 1.436 1.505l4.362-2.005.07-.03v-4.12c0-.552.448-1 1-1s1 .448 1 1v4.121l.066.029 4.358 2.004c.951.437 1.917-.576 1.435-1.505l-6.21-11.985z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBold20.category = 'Communication';

export default PaperAirplaneUpBold20;
