import * as React from 'react';
import { IconProps } from './types';

export const SplitLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitLeftFilled24"
      {...props}
    >
      <path
        d="M5.709 23.28c-.569.39-1.347.246-1.738-.322l-2.75-4c-.293-.427-.293-.99 0-1.416l2.75-4c.39-.569 1.17-.713 1.738-.323.569.391.713 1.17.322 1.739L4.627 17h1.98c1.371 0 2.633-.749 3.29-1.951l1.668-3.052c-.572-1.06-1.16-2.14-1.669-3.067C9.243 7.74 7.99 7 6.626 7h-2l1.405 2.042c.391.569.247 1.347-.322 1.738-.569.39-1.347.247-1.738-.322l-2.75-4c-.292-.427-.292-.99 0-1.416l2.75-4C4.36.472 5.14.329 5.709.719c.569.391.713 1.17.322 1.739L4.627 4.5h1.999c2.272 0 4.368 1.232 5.463 3.23.5.912 1.079 1.973 1.644 3.02h2.998C17.235 9.434 18.508 8.5 20 8.5c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5c-1.492 0-2.766-.935-3.27-2.25h-3l-1.64 2.998C10.996 18.253 8.893 19.5 6.608 19.5h-1.98l1.404 2.042c.391.568.247 1.347-.322 1.738z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitLeftFilled24.category = 'Arrows';

export default SplitLeftFilled24;
