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
        d="M7.572 2.477C8.592.51 11.41.51 12.43 2.477l6.21 11.984c1.358 2.62-1.367 5.476-4.047 4.243L10.235 16.7c-.147-.068-.318-.068-.465 0l-4.362 2.005c-2.68 1.233-5.404-1.624-4.047-4.243L7.572 2.477zm3.082.92c-.274-.529-1.03-.528-1.305 0L3.137 15.383c-.482.93.484 1.942 1.435 1.505l4.363-2.005.07-.032v-4.118c.001-.552.449-1 1-1 .553 0 1 .448 1 1v4.121l.066.029 4.358 2.004c.95.437 1.917-.576 1.435-1.505l-6.21-11.985z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpBold20.category = 'Communication';

export default PaperAirplaneUpBold20;
