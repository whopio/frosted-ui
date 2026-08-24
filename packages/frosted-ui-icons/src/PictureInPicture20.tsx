import * as React from 'react';
import { IconProps } from './types';

export const PictureInPicture20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PictureInPicture20"
      {...props}
    >
      <path
        d="M14.063 2.063c2.485 0 4.5 2.014 4.5 4.5v6.875c0 2.485-2.015 4.5-4.5 4.5H5.937c-2.485 0-4.5-2.015-4.5-4.5V6.561c0-2.485 2.015-4.5 4.5-4.5h8.125zm-2.5 8.687c-.45 0-.813.364-.813.813v4.874h3.313c1.656 0 3-1.343 3-3V10.75h-5.5zM5.936 3.562c-1.656 0-3 1.344-3 3v6.875c0 1.657 1.344 3 3 3H9.25v-4.875c0-1.277 1.035-2.312 2.313-2.312h5.5V6.562c0-1.656-1.344-3-3-3H5.937z"
        fill={color}
      />
    </svg>
  );
};

PictureInPicture20.category = 'Interface General';

export default PictureInPicture20;
