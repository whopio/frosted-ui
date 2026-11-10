import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeft20"
      {...props}
    >
      <path
        d="M2.344 12.208c-1.79-.927-1.79-3.487 0-4.414l12.482-6.462c2.434-1.26 5.07 1.306 3.876 3.772l-2.198 4.543c-.107.222-.107.481 0 .703l2.2 4.548c1.191 2.467-1.444 5.03-3.877 3.772L2.344 12.208zm.69-3.082c-.71.367-.71 1.382 0 1.75l12.484 6.462c1.152.595 2.399-.619 1.834-1.787l-2.199-4.547c-.04-.084-.075-.17-.105-.258H10.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.3c.03-.086.064-.17.104-.252l2.198-4.543c.565-1.168-.683-2.383-1.835-1.787L3.034 9.126z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeft20.category = 'Communication';

export default PaperAirplaneLeft20;
