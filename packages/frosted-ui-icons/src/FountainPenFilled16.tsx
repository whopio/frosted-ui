import * as React from 'react';
import { IconProps } from './types';

export const FountainPenFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.2656 9.34033L11.0088 12.4839C10.7124 13.2248 10.0458 13.753 9.25684 13.8726L2.10645 14.9556L6.35938 10.7026C6.48253 10.7354 6.61166 10.7544 6.74512 10.7544C7.57284 10.7543 8.24414 10.0832 8.24414 9.25537C8.24407 8.42764 7.5728 7.75644 6.74512 7.75635C5.91736 7.75635 5.24616 8.42759 5.24609 9.25537C5.24609 9.3895 5.26481 9.51935 5.29785 9.64307L1.04492 13.896L2.12891 6.74463C2.24855 5.95593 2.77696 5.28907 3.51758 4.99268L6.66016 3.73486L12.2656 9.34033ZM8.35547 1.78174C8.83513 0.903086 10.0254 0.732176 10.7334 1.43994L14.5615 5.26807C15.2695 5.97606 15.0985 7.16632 14.2197 7.646L13.2305 8.18506L7.81543 2.77002L8.35547 1.78174Z"
        fill={color}
      />
    </svg>
  );
};

FountainPenFilled16.category = 'Interface General';

export default FountainPenFilled16;
