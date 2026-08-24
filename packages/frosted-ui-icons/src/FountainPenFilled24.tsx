import * as React from 'react';
import { IconProps } from './types';

export const FountainPenFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenFilled24"
      {...props}
    >
      <path
        d="M18.823 13.34l-2.328 5.824c-.425 1.063-1.381 1.821-2.513 1.993L2.104 22.956l6.855-6.854c.272.124.573.195.892.195 1.187 0 2.15-.963 2.15-2.15 0-1.188-.963-2.15-2.15-2.15-1.188 0-2.15.963-2.15 2.15 0 .32.071.623.196.895l-6.851 6.851 1.799-11.875c.171-1.131.93-2.088 1.992-2.513l5.821-2.33 8.165 8.165zM13.001 2.037c.636-1.166 2.214-1.392 3.152-.454l6.264 6.264c.939.939.711 2.517-.454 3.152l-2.175 1.185-7.973-7.974L13 2.037z"
        fill={color}
      />
    </svg>
  );
};

FountainPenFilled24.category = 'Interface General';

export default FountainPenFilled24;
