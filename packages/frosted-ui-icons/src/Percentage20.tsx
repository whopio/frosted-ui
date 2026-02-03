import * as React from 'react';
import { IconProps } from './types';

export const Percentage20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_882_1140)">
        <path
          d="M18.7197 0.219727C19.0126 -0.073152 19.4874 -0.0731225 19.7803 0.219727C20.0732 0.51262 20.0732 0.98738 19.7803 1.28027L1.28027 19.7803C0.987377 20.0731 0.512605 20.0732 0.219727 19.7803C-0.073108 19.4874 -0.0731083 19.0126 0.219727 18.7197L18.7197 0.219727ZM16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12ZM16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5ZM4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0ZM4 1.5C2.61929 1.5 1.5 2.61929 1.5 4C1.5 5.38071 2.61929 6.5 4 6.5C5.38071 6.5 6.5 5.38071 6.5 4C6.5 2.61929 5.38071 1.5 4 1.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_882_1140">
          <path fill={color} d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

Percentage20.category = 'Money & Finance';

export default Percentage20;
