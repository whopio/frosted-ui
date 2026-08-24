import * as React from 'react';
import { IconProps } from './types';

export const PictureInPicture12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PictureInPicture12"
      {...props}
    >
      <path
        d="M8.438.938c1.656 0 3 1.343 3 3v4.124c0 1.657-1.344 3-3 3H3.561c-1.656 0-3-1.343-3-3V3.939c0-1.657 1.344-3 3-3h4.876zm-1.5 5.812c-.104 0-.188.084-.188.188v2.625h1.688c.828 0 1.5-.672 1.5-1.5V6.75h-3zM3.563 2.437c-.829 0-1.5.672-1.5 1.5v4.126c0 .828.671 1.5 1.5 1.5H5.25V6.937c0-.931.756-1.687 1.688-1.687h3V3.937c0-.828-.672-1.5-1.5-1.5H3.561z"
        fill={color}
      />
    </svg>
  );
};

PictureInPicture12.category = 'Interface General';

export default PictureInPicture12;
