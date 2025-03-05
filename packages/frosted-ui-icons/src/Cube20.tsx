import * as React from 'react';
import { IconProps } from './types';

export const Cube20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.0002 9.99998V17.0833M10.0002 9.99998L3.75 6.48434M10.0002 9.99998L16.0522 6.59558M16.875 7.10752V12.8924C16.875 13.4946 16.5502 14.0498 16.0254 14.3451L10.8171 17.2747C10.3098 17.5601 9.69025 17.5601 9.18292 17.2747L3.97457 14.3451C3.44977 14.0498 3.125 13.4946 3.125 12.8924V7.10752C3.125 6.50541 3.44977 5.9501 3.97457 5.6549L9.18292 2.72521C9.69025 2.43982 10.3098 2.43982 10.8171 2.72521L16.0254 5.6549C16.5502 5.9501 16.875 6.50541 16.875 7.10752Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cube20;
