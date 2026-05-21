import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.092 10.4711C17.6764 9.88402 17.6742 8.93352 17.0871 8.34903C16.5 7.76474 15.5494 7.76689 14.965 8.35391L8.88005 14.4672C8.03869 15.3125 8.0387 16.6785 8.88005 17.5238L14.965 23.6371C15.5494 24.2241 16.5 24.2263 17.0871 23.642C17.6741 23.0575 17.6764 22.107 17.092 21.5199L11.592 15.9955L17.092 10.4711ZM23.3146 10.4711C23.899 9.88401 23.8968 8.93348 23.3097 8.34903C22.7227 7.76466 21.7721 7.76695 21.1877 8.35391L15.1027 14.4672C14.2612 15.3125 14.2612 16.6785 15.1027 17.5238L21.1877 23.6371C21.7721 24.2242 22.7226 24.2264 23.3097 23.642C23.8967 23.0575 23.899 22.107 23.3146 21.5199L17.8146 15.9955L23.3146 10.4711Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled32.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled32;
