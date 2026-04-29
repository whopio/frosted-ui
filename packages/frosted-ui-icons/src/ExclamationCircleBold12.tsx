import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM6 7.25C6.55228 7.25 7 7.69772 7 8.25V8.25977C7 8.81205 6.55228 9.25977 6 9.25977C5.44772 9.25977 5 8.81205 5 8.25977V8.25C5 7.69772 5.44772 7.25 6 7.25ZM6 2.75C6.55228 2.75 7 3.19772 7 3.75V5.75C7 6.30228 6.55228 6.75 6 6.75C5.44772 6.75 5 6.30228 5 5.75V3.75C5 3.19772 5.44772 2.75 6 2.75Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleBold12.category = 'Interface General';

export default ExclamationCircleBold12;
