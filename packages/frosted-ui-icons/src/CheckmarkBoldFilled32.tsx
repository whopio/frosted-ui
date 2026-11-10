import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBoldFilled32"
      {...props}
    >
      <path
        d="M27.19 7.44c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L12.56 26.31c-.28.282-.662.44-1.06.44s-.78-.158-1.06-.44l-7.75-7.75c-.586-.585-.586-1.535 0-2.12.585-.586 1.535-.586 2.12 0l6.69 6.689 15.69-15.69z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkBoldFilled32.category = 'Checkmarks';

export default CheckmarkBoldFilled32;
