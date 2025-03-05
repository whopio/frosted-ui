import * as React from 'react';
import { IconProps } from './types';

export const Dice20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.45932 3.45926C2.89338 4.0252 2.57543 4.79278 2.57543 5.59315L2.57543 14.4069C2.57543 15.2072 2.89338 15.9748 3.45932 16.5407V16.5407C4.02526 17.1067 4.79284 17.4246 5.5932 17.4246H14.4069C15.2073 17.4246 15.9749 17.1067 16.5408 16.5407V16.5407C17.1067 15.9748 17.4247 15.2072 17.4247 14.4069V5.59314C17.4247 4.79278 17.1067 4.0252 16.5408 3.45926V3.45926C15.9749 2.89332 15.2073 2.57538 14.4069 2.57538L5.5932 2.57538C4.79284 2.57538 4.02526 2.89332 3.45932 3.45926V3.45926Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7072 9.29289C11.0977 9.68342 11.0977 10.3166 10.7072 10.7071 10.3166 11.0976 9.68347 11.0976 9.29294 10.7071 8.90242 10.3166 8.90242 9.68342 9.29294 9.29289 9.68347 8.90237 10.3166 8.90237 10.7072 9.29289zM7.17162 5.75736C7.56215 6.14788 7.56215 6.78105 7.17162 7.17157 6.7811 7.5621 6.14794 7.5621 5.75741 7.17157 5.36689 6.78105 5.36689 6.14788 5.75741 5.75736 6.14794 5.36684 6.7811 5.36684 7.17162 5.75736zM5.75741 12.8284C6.14794 12.4379 6.7811 12.4379 7.17162 12.8284 7.56215 13.219 7.56215 13.8521 7.17162 14.2426 6.7811 14.6332 6.14794 14.6332 5.75741 14.2426 5.36689 13.8521 5.36689 13.219 5.75741 12.8284zM14.2427 12.8284C14.6332 13.219 14.6332 13.8521 14.2427 14.2426 13.8522 14.6332 13.219 14.6332 12.8285 14.2426 12.438 13.8521 12.438 13.219 12.8285 12.8284 13.219 12.4379 13.8522 12.4379 14.2427 12.8284zM12.8285 5.75736C13.219 5.36683 13.8522 5.36684 14.2427 5.75736 14.6332 6.14788 14.6332 6.78105 14.2427 7.17157 13.8522 7.5621 13.219 7.5621 12.8285 7.17157 12.438 6.78105 12.438 6.14788 12.8285 5.75736z"
        fill={color}
      />
    </svg>
  );
};

export default Dice20;
