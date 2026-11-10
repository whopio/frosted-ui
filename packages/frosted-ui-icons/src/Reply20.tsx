import * as React from 'react';
import { IconProps } from './types';

export const Reply20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Reply20"
      {...props}
    >
      <path
        d="M9.25 7.25c7.857 0 9 4.321 9 9.036-2.75-3.143-5.857-3.536-9-3.536v3.808c0 .263-.313.399-.505.22l-6.777-6.34c-.253-.237-.253-.639 0-.876l6.777-6.34c.192-.179.505-.043.505.22V7.25z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Reply20.category = 'Arrows';

export default Reply20;
