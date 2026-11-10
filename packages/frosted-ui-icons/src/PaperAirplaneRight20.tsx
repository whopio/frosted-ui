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
        d="M17.656 12.208c1.79-.927 1.79-3.487 0-4.414L5.174 1.332C2.74.072.104 2.638 1.298 5.104l2.198 4.543c.107.222.107.482 0 .704l-2.2 4.547C.105 17.365 2.74 19.93 5.174 18.67l12.483-6.462zm-.69-3.082c.71.367.71 1.383 0 1.75L4.482 17.338c-1.152.596-2.4-.618-1.835-1.786l2.2-4.548c.04-.084.075-.17.105-.258H9.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.3c-.03-.085-.063-.17-.103-.252L2.648 4.451c-.565-1.168.683-2.383 1.835-1.787l12.483 6.462z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneRight20.category = 'Communication';

export default PaperAirplaneRight20;
