import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM6 5.5C6.55228 5.5 7 5.94772 7 6.5V8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8V6.5C5 5.94772 5.44772 5.5 6 5.5ZM6 3C6.49706 3 6.90039 3.40333 6.90039 3.90039C6.90018 4.39727 6.49693 4.7998 6 4.7998C5.50312 4.79975 5.1008 4.39723 5.10059 3.90039C5.10059 3.40337 5.50299 3.00005 6 3Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBold12.category = 'Interface General';

export default InfoCircleBold12;
