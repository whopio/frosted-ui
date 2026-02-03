import * as React from 'react';
import { IconProps } from './types';

export const StarFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.92285 1.1156C7.43752 0.372171 8.57029 0.372172 9.08496 1.1156L9.18555 1.2865L10.9004 4.75916L14.8574 5.26404C15.9254 5.40033 16.4262 6.72784 15.584 7.50037L12.7061 10.139L13.4277 13.9037C13.6428 15.0275 12.4427 15.7734 11.5195 15.2894L8.00391 13.4457L4.48828 15.2894C3.56517 15.7733 2.36501 15.0275 2.58008 13.9037L3.30078 10.139L0.423828 7.50037C-0.418328 6.72783 0.0825185 5.40035 1.15039 5.26404L5.10645 4.75916L6.82227 1.2865L6.92285 1.1156Z"
        fill={color}
      />
    </svg>
  );
};

StarFilled16.category = 'Interface General';

export default StarFilled16;
