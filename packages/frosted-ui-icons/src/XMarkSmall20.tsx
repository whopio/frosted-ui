import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.7207 4.21973C15.0136 3.92684 15.4884 3.92685 15.7812 4.21973C16.0741 4.51262 16.0741 4.98738 15.7812 5.28027L11.0615 10L15.7812 14.7207C16.0741 15.0136 16.0741 15.4884 15.7812 15.7812C15.4883 16.074 15.0136 16.0741 14.7207 15.7812L10 11.0615L5.28027 15.7812C4.98737 16.074 4.51257 16.0741 4.21973 15.7812C3.9269 15.4884 3.92698 15.0136 4.21973 14.7207L8.93848 10L4.21973 5.28027C3.92688 4.98743 3.92697 4.51263 4.21973 4.21973C4.51262 3.92683 4.98738 3.92684 5.28027 4.21973L10 8.93848L14.7207 4.21973Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall20.category = 'Interface General';

export default XMarkSmall20;
