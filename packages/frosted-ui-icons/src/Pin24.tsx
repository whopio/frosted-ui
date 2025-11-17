import * as React from 'react';
import { IconProps } from './types';

export const Pin24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.9999 17.25H17.4403C19.0758 17.25 20.1394 15.5289 19.408 14.0661L17.5034 10.2569C17.3368 9.9236 17.25 9.55612 17.25 9.18353V3.95C17.25 2.73497 16.265 1.75 15.05 1.75H8.95C7.73497 1.75 6.75 2.73497 6.75 3.95V9.18353C6.75 9.55612 6.66325 9.9236 6.49662 10.2569L4.59196 14.0661C3.86056 15.5289 4.92425 17.25 6.5597 17.25H11.9999ZM11.9999 17.25V22.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Pin24;
