import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRight20"
      {...props}
    >
      <path
        d="M17.656 12.208c1.79-.927 1.79-3.487 0-4.414L5.173 1.332C2.74.072.103 2.638 1.297 5.104l2.199 4.543c.107.222.107.481 0 .703l-2.2 4.548c-1.192 2.467 1.443 5.03 3.876 3.772l12.484-6.462zm-.69-3.082c.71.367.71 1.382 0 1.75L4.481 17.338c-1.152.595-2.4-.619-1.835-1.787l2.2-4.547c.04-.084.075-.17.105-.258h4.297c.415 0 .75-.336.75-.75s-.335-.75-.75-.75h-4.3c-.029-.086-.064-.17-.104-.252L2.648 4.45c-.565-1.168.682-2.383 1.835-1.787l12.482 6.462z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRight20.category = 'Communication';

export default PaperAirplaneRight20;
