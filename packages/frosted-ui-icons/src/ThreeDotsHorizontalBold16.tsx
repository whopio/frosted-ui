import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.75 6.5C3.57843 6.5 4.25 7.17157 4.25 8C4.25 8.82843 3.57843 9.5 2.75 9.5C1.92157 9.5 1.25 8.82843 1.25 8C1.25 7.17157 1.92157 6.5 2.75 6.5ZM8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5ZM13.25 6.5C14.0784 6.5 14.75 7.17157 14.75 8C14.75 8.82843 14.0784 9.5 13.25 9.5C12.4216 9.5 11.75 8.82843 11.75 8C11.75 7.17157 12.4216 6.5 13.25 6.5Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBold16.category = 'Interface General';

export default ThreeDotsHorizontalBold16;
