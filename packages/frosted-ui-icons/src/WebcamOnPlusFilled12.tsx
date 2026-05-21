import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 1.5C7.34388 1.5 8.4815 2.3836 8.86328 3.60156L10 2.75C10.824 2.13197 12 2.71994 12 3.75V8.25C12 9.28006 10.824 9.86803 10 9.25L8.86328 8.39746C8.48177 9.61588 7.34421 10.5 6 10.5H3C1.34315 10.5 0 9.15685 0 7.5V4.5C0 2.84315 1.34315 1.5 3 1.5H6ZM4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5V5.25H3C2.58579 5.25 2.25 5.58579 2.25 6C2.25 6.41421 2.58579 6.75 3 6.75H3.75V7.5C3.75 7.91421 4.08579 8.25 4.5 8.25C4.91421 8.25 5.25 7.91421 5.25 7.5V6.75H6C6.41421 6.75 6.75 6.41421 6.75 6C6.75 5.58579 6.41421 5.25 6 5.25H5.25V4.5C5.25 4.08579 4.91421 3.75 4.5 3.75Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusFilled12.category = 'Interface General';

export default WebcamOnPlusFilled12;
