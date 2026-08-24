import * as React from 'react';
import { IconProps } from './types';

export const CubeFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CubeFilled20"
      {...props}
    >
      <path
        d="M8 1.155c1.238-.715 2.762-.715 4 0l4.66 2.69c1.238.715 2 2.035 2 3.464v5.382c0 1.429-.762 2.75-2 3.464L12 18.845c-1.238.715-2.762.715-4 0l-4.66-2.69c-1.238-.715-2-2.035-2-3.464V7.309c0-1.429.762-2.75 2-3.464L8 1.155zm7.026 5.972c-.205-.359-.664-.484-1.023-.279L10 9.135 5.997 6.848c-.36-.205-.818-.08-1.023.28-.206.359-.08.817.279 1.023l3.997 2.283v4.565c0 .415.336.75.75.75s.75-.335.75-.75v-4.565l3.997-2.283c.36-.206.485-.664.28-1.024z"
        fill={color}
      />
    </svg>
  );
};

CubeFilled20.category = 'Objects';

export default CubeFilled20;
