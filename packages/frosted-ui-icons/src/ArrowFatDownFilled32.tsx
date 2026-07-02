import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M23.0002 15H28.0911C29.4349 15 30.1396 16.5955 29.2346 17.5889L17.7327 30.2119C16.8029 31.2321 15.1976 31.2321 14.2678 30.2119L2.76587 17.5889C1.86087 16.5955 2.56553 15 3.90942 15H9.00024V3.74316C9.00024 2.22837 10.2286 1 11.7434 1H20.2571C21.7719 1 23.0002 2.22837 23.0002 3.74316V15Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownFilled32.category = 'Arrows';

export default ArrowFatDownFilled32;
