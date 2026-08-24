import * as React from 'react';
import { IconProps } from './types';

export const RotateRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRightBoldFilled32"
      {...props}
    >
      <path
        d="M16 .5c5.134 0 9.68 2.497 12.5 6.339V4.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5S22.172 10 23 10h3.968C24.843 6.125 20.728 3.5 16 3.5c-5.414 0-10.027 3.443-11.764 8.263C3.76 13.083 3.5 14.51 3.5 16c0 1.49.26 2.916.736 4.237C5.973 25.057 10.586 28.5 16 28.5s10.027-3.442 11.764-8.263c.28-.78 1.14-1.183 1.92-.902.779.28 1.183 1.14.902 1.919C28.434 27.226 22.718 31.5 16 31.5S3.566 27.226 1.414 21.254C.822 19.61.5 17.842.5 16c0-1.842.322-3.611.914-5.254C3.566 4.774 9.282.5 16 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRightBoldFilled32.category = 'Arrows';

export default RotateRightBoldFilled32;
