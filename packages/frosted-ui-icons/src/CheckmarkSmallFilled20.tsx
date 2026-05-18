import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.8661 5.61638C15.3542 5.1283 16.1455 5.12834 16.6336 5.61638C17.1215 6.10455 17.1216 6.8959 16.6336 7.38396L8.63363 15.384C8.14558 15.8719 7.3542 15.8718 6.86606 15.384L3.36606 11.884C2.87794 11.3958 2.87802 10.6045 3.36606 10.1164C3.85421 9.62822 4.64548 9.62822 5.13363 10.1164L7.74985 12.7326L14.8661 5.61638Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallFilled20.category = 'Checkmarks';

export default CheckmarkSmallFilled20;
