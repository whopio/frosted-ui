import * as React from 'react';
import { IconProps } from './types';

export const Reply16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.27647 7.75165L6.94408 2.66531C7.15868 2.47271 7.50001 2.62503 7.50001 2.91339V5.66637C13.1667 5.66637 14.6667 7.83304 14.6667 13.4997C13.6667 11.4997 13.1667 10.333 7.50001 10.333V13.086C7.50001 13.3744 7.15868 13.5267 6.94408 13.3341L1.27647 8.24778C1.12887 8.11531 1.12887 7.88405 1.27647 7.75165Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Reply16;
