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
        d="M2.343 12.207c-1.79-.927-1.79-3.487 0-4.414l12.483-6.462c2.433-1.26 5.069 1.306 3.876 3.773l-2.199 4.543c-.107.222-.107.481 0 .703l2.2 4.548c1.192 2.466-1.443 5.031-3.876 3.771L2.343 12.207zm.69-3.082c-.709.368-.709 1.383 0 1.75l12.484 6.462c1.152.597 2.4-.618 1.835-1.786l-2.2-4.548c-.04-.084-.075-.17-.105-.258H10.75c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75h4.3c.03-.085.064-.17.104-.251L17.35 4.45c.565-1.169-.682-2.384-1.835-1.788L3.034 9.125z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeft20.category = 'Communication';

export default PaperAirplaneLeft20;
