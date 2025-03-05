import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M7.98678 18.0883V12.5467H6.26687V9.99996H7.98678V8.90271C7.98678 6.06616 9.27008 4.75273 12.0534 4.75273C12.5803 4.75273 13.49 4.85598 13.8637 4.95922V7.26616C13.6668 7.24626 13.3233 7.23607 12.9002 7.23607C11.5335 7.23607 11.0067 7.75273 11.0067 9.09946V9.99996H13.7303L13.2637 12.5463H11.0104V18.273C15.1365 17.7732 18.3334 14.26 18.3334 9.99996C18.3334 5.39764 14.6024 1.66663 10.0001 1.66663C5.39776 1.66663 1.66675 5.39764 1.66675 9.99996C1.66675 13.9082 4.35686 17.1877 7.98678 18.0883Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookFilled20;
