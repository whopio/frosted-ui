import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0C10.2091 0 12 1.79086 12 4V8C12 10.2091 10.2091 12 8 12H4C1.79086 12 0 10.2091 0 8V4C0 1.79086 1.79086 0 4 0H8ZM6 5.5C5.44772 5.5 5 5.94772 5 6.5V8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8V6.5C7 5.94772 6.55228 5.5 6 5.5ZM6 3C5.50299 3.00005 5.10059 3.40337 5.10059 3.90039C5.1008 4.39723 5.50312 4.79975 6 4.7998C6.49693 4.7998 6.90018 4.39727 6.90039 3.90039C6.90039 3.40333 6.49706 3 6 3Z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareBoldFilled12.category = 'Interface General';

export default InfoSquareBoldFilled12;
