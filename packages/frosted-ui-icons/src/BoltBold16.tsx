import * as React from 'react';
import { IconProps } from './types';

export const BoltBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltBold16"
      {...props}
    >
      <path
        d="M7.321.52c.715-.98 2.32-.49 2.32.769v4.019h2.782c1.078 0 1.741 1.18 1.18 2.101l-4.851 7.969c-.677 1.11-2.386.63-2.386-.67V10.69H3.584c-1.079 0-1.741-1.18-1.18-2.101L7.253.62l.067-.1zM4.683 8.69h2.3c.764 0 1.383.62 1.383 1.383v2.093l2.958-4.858h-2.3c-.764 0-1.383-.62-1.383-1.383V3.83l-2.958 4.86z"
        fill={color}
      />
    </svg>
  );
};

BoltBold16.category = 'Nature & Weather';

export default BoltBold16;
