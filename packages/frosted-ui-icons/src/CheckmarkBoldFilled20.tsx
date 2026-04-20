import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.1895 3.6897C17.7753 3.10409 18.7248 3.10397 19.3105 3.6897C19.8961 4.27544 19.8961 5.22505 19.3105 5.81079L8.06055 17.0608C7.47482 17.6464 6.52523 17.6464 5.93945 17.0608L0.689453 11.8108C0.103692 11.225 0.103744 10.2755 0.689453 9.6897C1.27524 9.10391 2.22476 9.10391 2.81055 9.6897L7 13.8792L17.1895 3.6897Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkBoldFilled20.category = 'Checkmarks';

export default CheckmarkBoldFilled20;
