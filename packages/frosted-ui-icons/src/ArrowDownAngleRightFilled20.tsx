import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 2.5C1.55964 2.5 1 3.05964 1 3.75V10.6875C1 12.2408 2.2592 13.5 3.8125 13.5H14.5889L12.8955 15.0879C12.392 15.56 12.366 16.3508 12.8379 16.8545C13.31 17.358 14.1008 17.384 14.6045 16.9121L18.6045 13.1621C18.8566 12.9258 19 12.5955 19 12.25C19 11.9045 18.8566 11.5742 18.6045 11.3379L14.6045 7.58789C14.1008 7.11604 13.31 7.14198 12.8379 7.64551C12.366 8.14916 12.392 8.94005 12.8955 9.41211L14.5889 11H3.8125C3.63991 11 3.5 10.8601 3.5 10.6875V3.75C3.5 3.05964 2.94036 2.5 2.25 2.5Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightFilled20.category = 'Arrows';

export default ArrowDownAngleRightFilled20;
