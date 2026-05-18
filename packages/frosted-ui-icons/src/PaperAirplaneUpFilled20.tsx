import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.79323 2.34355C8.72009 0.553639 11.2803 0.553755 12.2073 2.34355L18.6692 14.826C19.9284 17.2593 17.3632 19.8949 14.8967 18.7019L10.7542 16.6971V10.7498C10.754 10.3357 10.4183 9.9998 10.0042 9.9998C9.59022 10 9.25428 10.3358 9.25416 10.7498V16.6951L5.1028 18.7029C2.63618 19.8959 0.0719017 17.2602 1.33131 14.8269L7.79323 2.34355Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled20.category = 'Communication';

export default PaperAirplaneUpFilled20;
