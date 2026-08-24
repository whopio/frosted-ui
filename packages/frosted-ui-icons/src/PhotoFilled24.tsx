import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PhotoFilled24"
      {...props}
    >
      <path
        d="M17.5 0C21.09 0 24 2.91 24 6.5v11c0 3.59-2.91 6.5-6.5 6.5h-11C2.91 24 0 21.09 0 17.5v-11C0 2.91 2.91 0 6.5 0h11zm-.788 10.262c-.929 0-1.82.37-2.477 1.026L3.81 21.713c.777.497 1.7.787 2.691.787h11c2.761 0 5-2.239 5-5v-2.901l-3.311-3.31c-.657-.658-1.548-1.027-2.477-1.027zM8 4.75C6.205 4.75 4.75 6.205 4.75 8S6.205 11.25 8 11.25 11.25 9.795 11.25 8 9.795 4.75 8 4.75z"
        fill={color}
      />
    </svg>
  );
};

PhotoFilled24.category = 'Interface General';

export default PhotoFilled24;
