import * as React from 'react';
import { IconProps } from './types';

export const BanBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanBold16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM4.883 12.53c.886.611 1.96.97 3.117.97 3.038 0 5.5-2.462 5.5-5.5 0-1.158-.359-2.231-.97-3.117L4.883 12.53zM8 2.5C4.962 2.5 2.5 4.962 2.5 8c0 1.157.358 2.23.969 3.116l7.647-7.647C10.23 2.859 9.157 2.5 8 2.5z"
        fill={color}
      />
    </svg>
  );
};

BanBold16.category = 'Interface General';

export default BanBold16;
