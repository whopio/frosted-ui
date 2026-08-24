import * as React from 'react';
import { IconProps } from './types';

export const PictureInPicture16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PictureInPicture16"
      {...props}
    >
      <path
        d="M11.25 1.5C13.321 1.5 15 3.179 15 5.25v5.5c0 2.071-1.679 3.75-3.75 3.75h-6.5C2.679 14.5 1 12.821 1 10.75v-5.5C1 3.179 2.679 1.5 4.75 1.5h6.5zm-2 7.25c-.276 0-.5.224-.5.5V13h2.5c1.243 0 2.25-1.007 2.25-2.25v-2H9.25zM4.75 3C3.507 3 2.5 4.007 2.5 5.25v5.5C2.5 11.993 3.507 13 4.75 13h2.5V9.25c0-1.105.895-2 2-2h4.25v-2C13.5 4.007 12.493 3 11.25 3h-6.5z"
        fill={color}
      />
    </svg>
  );
};

PictureInPicture16.category = 'Interface General';

export default PictureInPicture16;
