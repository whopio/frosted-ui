import * as React from 'react';
import { IconProps } from './types';

export const TriangleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBold16"
      {...props}
    >
      <path
        d="M2.19 11.789l4.49-8.336c.566-1.052 2.074-1.052 2.64 0l4.49 8.336c.537 1-.186 2.211-1.321 2.211H3.51c-1.135 0-1.858-1.212-1.32-2.211z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBold16.category = 'Interface General';

export default TriangleBold16;
