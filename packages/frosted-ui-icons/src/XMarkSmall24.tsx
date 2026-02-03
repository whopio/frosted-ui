import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.7207 5.21973C18.0136 4.92703 18.4884 4.9269 18.7812 5.21973C19.0735 5.5126 19.0738 5.98755 18.7812 6.28027L13.0605 12L18.7812 17.7207C19.0734 18.0137 19.0739 18.4886 18.7812 18.7812C18.4886 19.0739 18.0137 19.0734 17.7207 18.7812L12 13.0605L6.28027 18.7812C5.98755 19.0738 5.5126 19.0735 5.21973 18.7812C4.9269 18.4884 4.92703 18.0136 5.21973 17.7207L10.9395 12L5.21973 6.28027C4.92683 5.98738 4.92683 5.51262 5.21973 5.21973C5.51262 4.92683 5.98738 4.92683 6.28027 5.21973L12 10.9395L17.7207 5.21973Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall24.category = 'Interface General';

export default XMarkSmall24;
