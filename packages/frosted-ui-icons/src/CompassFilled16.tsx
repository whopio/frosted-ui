import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassFilled16"
      {...props}
    >
      <path
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM11.5752 5.94824C12.0147 4.98099 11.0191 3.98615 10.0518 4.42578L7.12305 5.75684C6.51769 6.03199 6.03196 6.51767 5.75684 7.12305L4.42578 10.0527C3.98671 11.0199 4.98115 12.0146 5.94824 11.5752L8.87793 10.2432C9.48295 9.96806 9.96805 9.48295 10.2432 8.87793L11.5752 5.94824ZM8 6.75C8.69036 6.75 9.25 7.30964 9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled16.category = 'Interface General';

export default CompassFilled16;
