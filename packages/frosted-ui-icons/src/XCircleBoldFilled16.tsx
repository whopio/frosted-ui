import * as React from 'react';
import { IconProps } from './types';

export const XCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM10.5986 5.33887C10.2082 4.94853 9.57509 4.94869 9.18457 5.33887L7.96875 6.55469L6.75391 5.33887C6.36352 4.94848 5.7304 4.94875 5.33984 5.33887C4.94932 5.72939 4.94932 6.36241 5.33984 6.75293L6.55469 7.96875L5.33984 9.18457C4.94932 9.57509 4.94932 10.2081 5.33984 10.5986C5.7304 10.9888 6.36352 10.989 6.75391 10.5986L7.96875 9.38281L9.18457 10.5986C9.57509 10.9888 10.2082 10.989 10.5986 10.5986C10.989 10.2082 10.9888 9.57512 10.5986 9.18457L9.38281 7.96875L10.5986 6.75293C10.9888 6.36238 10.989 5.72928 10.5986 5.33887Z"
        fill={color}
      />
    </svg>
  );
};

XCircleBoldFilled16.category = 'Interface General';

export default XCircleBoldFilled16;
