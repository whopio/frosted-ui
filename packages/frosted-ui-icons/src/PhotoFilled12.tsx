import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PhotoFilled12"
      {...props}
    >
      <path
        d="M8.25 0C10.321 0 12 1.679 12 3.75v4.5C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h4.5zM7.5 4.75c-.519 0-1.017.206-1.384.573L1.903 9.534c.407.584 1.082.966 1.847.966h4.5c1.243 0 2.25-1.007 2.25-2.25V6.94L8.884 5.322c-.367-.367-.865-.573-1.384-.573zm-3.5-2c-.69 0-1.25.56-1.25 1.25S3.31 5.25 4 5.25 5.25 4.69 5.25 4 4.69 2.75 4 2.75z"
        fill={color}
      />
    </svg>
  );
};

PhotoFilled12.category = 'Interface General';

export default PhotoFilled12;
