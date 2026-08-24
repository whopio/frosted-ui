import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeFilled20"
      {...props}
    >
      <path
        d="M7.028 2.158c1.691-1.517 4.253-1.517 5.944 0l4.735 4.248C18.53 7.145 19 8.198 19 9.304v6.589C19 17.609 17.609 19 15.893 19H13.35c-.746 0-1.35-.604-1.35-1.35V13c0-1.105-.895-2-2-2s-2 .895-2 2v4.65C8 18.396 7.396 19 6.65 19H4.107C2.391 19 1 17.609 1 15.893v-6.59c0-1.105.47-2.158 1.293-2.897l4.735-4.248z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

HomeFilled20.category = 'Buildings';

export default HomeFilled20;
