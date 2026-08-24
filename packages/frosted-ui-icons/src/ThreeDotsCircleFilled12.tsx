import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zM3.625 5.125c-.453 0-.825.344-.87.785L2.75 6l.005.09c.045.44.417.785.87.785.483 0 .875-.392.875-.875 0-.453-.344-.825-.785-.87l-.09-.005zm2.375 0c-.453 0-.825.344-.87.785L5.125 6l.005.09c.045.44.417.785.87.785.483 0 .875-.392.875-.875 0-.453-.344-.825-.785-.87L6 5.125zm2.375 0c-.453 0-.825.344-.87.785L7.5 6l.005.09c.045.44.417.785.87.785.483 0 .875-.392.875-.875 0-.453-.344-.825-.785-.87l-.09-.005z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleFilled12.category = 'Interface General';

export default ThreeDotsCircleFilled12;
