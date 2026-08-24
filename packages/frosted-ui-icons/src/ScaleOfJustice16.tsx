import * as React from 'react';
import { IconProps } from './types';

export const ScaleOfJustice16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ScaleOfJustice16"
      {...props}
    >
      <path
        d="M8 .75v14.5m0 0H5m3 0h3M3 3.75l2.143 5.582c.163.425.154.914-.13 1.27-1.103 1.383-2.924 1.383-4.027 0-.284-.356-.293-.845-.13-1.27L3 3.75zm0 0h10m0 0l-2.144 5.581c-.163.426-.154.915.13 1.271 1.103 1.383 2.924 1.383 4.027 0 .284-.356.293-.845.13-1.27L13 3.75z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ScaleOfJustice16.category = 'Objects';

export default ScaleOfJustice16;
