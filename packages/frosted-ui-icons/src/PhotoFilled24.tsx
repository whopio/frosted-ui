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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.5 0C21.0898 0 24 2.91015 24 6.5V17.5C24 21.0899 21.0898 24 17.5 24H6.5C2.91015 24 0 21.0899 0 17.5V6.5C2.57711e-07 2.91015 2.91015 0 6.5 0H17.5ZM16.7119 10.2617C15.7831 10.2618 14.8921 10.6313 14.2354 11.2881L3.80859 21.7129C4.58572 22.2104 5.5088 22.5 6.5 22.5H17.5C20.2614 22.5 22.5 20.2614 22.5 17.5V14.5986L19.1885 11.2881C18.5316 10.6312 17.6409 10.2617 16.7119 10.2617ZM8 4.75C6.20507 4.75 4.75 6.20507 4.75 8C4.75 9.79493 6.20507 11.25 8 11.25C9.79493 11.25 11.25 9.79493 11.25 8C11.25 6.20507 9.79493 4.75 8 4.75Z"
        fill={color}
      />
    </svg>
  );
};

PhotoFilled24.category = 'Interface General';

export default PhotoFilled24;
