import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23.125 4C27.4111 4 31 7.33295 31 12.0791C30.9999 17.3443 28.0148 21.4233 24.8135 24.2852C21.6072 27.1514 18.0901 28.884 16.8027 29.4668C16.2864 29.7005 15.7136 29.7005 15.1973 29.4668C13.9099 28.884 10.3928 27.1514 7.18652 24.2852C3.9852 21.4233 1.00012 17.3443 1 12.0791C1 7.33295 4.58895 4 8.875 4C11.813 4 13.7818 5.30826 15.001 6.61328C15.4184 7.06015 15.7468 7.50718 16 7.90039C16.2532 7.50718 16.5816 7.06015 16.999 6.61328C18.2182 5.30826 20.187 4 23.125 4Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartFilled32;
