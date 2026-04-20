import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.03613 9.75C5.27844 9.75023 6.2859 10.7577 6.28613 12C6.28591 13.2423 5.27844 14.2498 4.03613 14.25C2.7938 14.2498 1.78636 13.2423 1.78613 12C1.78636 10.7577 2.7938 9.7502 4.03613 9.75ZM12.001 9.75C13.2432 9.75033 14.2508 10.7578 14.251 12C14.2508 13.2422 13.2432 14.2497 12.001 14.25C10.7585 14.25 9.7512 13.2424 9.75098 12C9.7512 10.7576 10.7585 9.75 12.001 9.75ZM19.9648 9.75C21.2071 9.75023 22.2146 10.7577 22.2148 12C22.2146 13.2423 21.2072 14.2498 19.9648 14.25C18.7225 14.2499 17.7151 13.2424 17.7148 12C17.7151 10.7576 18.7225 9.75013 19.9648 9.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalFilled24.category = 'Interface General';

export default ThreeDotsHorizontalFilled24;
