import * as React from 'react';
import { IconProps } from './types';

export const LockFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 0C8.20914 0 10 1.79086 10 4V5.20898C10.8828 5.59484 11.5 6.47498 11.5 7.5V9.5C11.5 10.8807 10.3807 12 9 12H3C1.61929 12 0.5 10.8807 0.5 9.5V7.5C0.5 6.47498 1.11724 5.59484 2 5.20898V4C2 1.79086 3.79086 0 6 0ZM6 1.5C4.61929 1.5 3.5 2.61929 3.5 4V5H8.5V4C8.5 2.61929 7.38071 1.5 6 1.5Z"
        fill={color}
      />
    </svg>
  );
};

export default LockFilled12;
