import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.5 13.25C6.5 12.4216 7.17157 11.75 8 11.75C8.82843 11.75 9.5 12.4216 9.5 13.25C9.5 14.0784 8.82843 14.75 8 14.75C7.17157 14.75 6.5 14.0784 6.5 13.25ZM6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8ZM6.5 2.75C6.5 1.92157 7.17157 1.25 8 1.25C8.82843 1.25 9.5 1.92157 9.5 2.75C9.5 3.57843 8.82843 4.25 8 4.25C7.17157 4.25 6.5 3.57843 6.5 2.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold16.category = 'Product Icons';

export default ThreeDotsVerticalBold16;
