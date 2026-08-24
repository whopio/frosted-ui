import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM9.333 14.417c-.874 0-1.583.709-1.583 1.583s.709 1.584 1.583 1.584 1.584-.71 1.584-1.584c0-.874-.71-1.583-1.584-1.583zm6.667 0c-.874 0-1.583.709-1.583 1.583s.709 1.584 1.583 1.584 1.584-.71 1.584-1.584c0-.874-.71-1.583-1.584-1.583zm6.663 0c-.874 0-1.583.709-1.583 1.583s.709 1.584 1.583 1.584c.875 0 1.584-.71 1.584-1.584 0-.874-.71-1.583-1.584-1.583z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleFilled32.category = 'Interface General';

export default ThreeDotsCircleFilled32;
