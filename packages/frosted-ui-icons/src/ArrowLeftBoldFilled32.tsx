import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.25073 16.0001L13.0007 5.25M2.25073 16.0001L13.0007 26.75M2.25073 16.0001H29.7507"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftBoldFilled32.category = 'Arrows';

export default ArrowLeftBoldFilled32;
