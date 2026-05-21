import * as React from 'react';
import { IconProps } from './types';

export const EyeFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.0002 1.5C7.91111 1.5001 9.3471 2.46365 10.3 3.4209C11.2515 4.37682 11.7818 5.38333 11.9016 5.62402C12.0193 5.86079 12.0193 6.13921 11.9016 6.37598C11.7818 6.61667 11.2515 7.62318 10.3 8.5791C9.3471 9.53635 7.91111 10.4999 6.0002 10.5C4.08925 10.5 2.65336 9.53635 1.7004 8.5791C0.748965 7.62329 0.218764 6.61689 0.0988363 6.37598C-0.0189482 6.13915 -0.0189479 5.86085 0.0988363 5.62402L0.265829 5.3125C0.50989 4.88307 0.986736 4.13784 1.7004 3.4209C2.65336 2.46365 4.08925 1.5 6.0002 1.5ZM6.0002 4C4.89563 4 4.0002 4.89543 4.0002 6C4.0002 7.10457 4.89563 8 6.0002 8C7.10464 7.99984 8.0002 7.10447 8.0002 6C8.0002 4.89553 7.10464 4.00016 6.0002 4Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

EyeFilled12.category = 'Accessibility';

export default EyeFilled12;
