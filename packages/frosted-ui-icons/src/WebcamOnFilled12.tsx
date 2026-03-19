import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 1.5C7.34388 1.5 8.4815 2.3836 8.86328 3.60156L10 2.75C10.824 2.13197 12 2.71994 12 3.75V8.25C12 9.28006 10.824 9.86803 10 9.25L8.86328 8.39746C8.48177 9.61588 7.34421 10.5 6 10.5H3C1.34315 10.5 0 9.15685 0 7.5V4.5C0 2.84315 1.34315 1.5 3 1.5H6Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnFilled12.category = 'Product Icons';

export default WebcamOnFilled12;
