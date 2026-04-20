import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.70377 17.4979L1.847 3.76117C1.42659 2.57209 2.57214 1.42653 3.76122 1.84695L17.498 6.70376C18.3835 7.01686 18.4946 8.22426 17.681 8.69365L14.3792 10.5985C13.8096 10.9272 13.7068 11.7068 14.1718 12.1718L17.8358 15.8358C18.1011 16.101 18.25 16.4607 18.25 16.8358C18.25 17.6168 17.6169 18.25 16.8358 18.25C16.4607 18.25 16.101 18.101 15.8358 17.8358L12.1718 14.1718C11.7068 13.7068 10.9272 13.8095 10.5985 14.3792L8.69366 17.681C8.22428 18.4946 7.01687 18.3835 6.70377 17.4979Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorFilled20.category = 'Arrows';

export default CursorFilled20;
