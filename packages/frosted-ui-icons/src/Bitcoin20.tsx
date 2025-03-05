import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 5.99999H12C13.1046 5.99999 14 6.89542 14 7.99999C14 9.10457 13.1046 10 12 10M12 10H8M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14H6M7.50186 5.99999L7.52476 14M8.5 4.49999V5.98684M8.5 15.5V14.0132M12 4.49999V5.98684M12 14.0132V15.5M18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bitcoin20;
