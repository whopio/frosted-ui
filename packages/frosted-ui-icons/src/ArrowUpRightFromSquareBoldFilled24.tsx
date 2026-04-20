import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.5 1.5C9.32843 1.5 10 2.17157 10 3C10 3.82843 9.32843 4.5 8.5 4.5H8C5.79086 4.5 4 6.29086 4 8.5V16C4 18.2091 5.79086 20 8 20H15.5C17.7091 20 19.5 18.2091 19.5 16V15.5C19.5 14.6716 20.1716 14 21 14C21.8284 14 22.5 14.6716 22.5 15.5V16C22.5 19.866 19.366 23 15.5 23H8C4.13401 23 1 19.866 1 16V8.5C1 4.63401 4.13401 1.5 8 1.5H8.5ZM21.5 1C22.3284 1 23 1.67157 23 2.5V10C23 10.8284 22.3284 11.5 21.5 11.5C20.6716 11.5 20 10.8284 20 10V6.12109L13.0605 13.0605C12.4748 13.6463 11.5252 13.6463 10.9395 13.0605C10.3537 12.4748 10.3537 11.5252 10.9395 10.9395L17.8789 4H14C13.1716 4 12.5 3.32843 12.5 2.5C12.5 1.67157 13.1716 1 14 1H21.5Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareBoldFilled24.category = 'Arrows';

export default ArrowUpRightFromSquareBoldFilled24;
