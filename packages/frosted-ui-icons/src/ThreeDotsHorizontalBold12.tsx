import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.5 4.5C2.32843 4.5 3 5.17157 3 6C3 6.82843 2.32843 7.5 1.5 7.5C0.671573 7.5 0 6.82843 0 6C0 5.17157 0.671573 4.5 1.5 4.5ZM6 4.5C6.82843 4.5 7.5 5.17157 7.5 6C7.5 6.82843 6.82843 7.5 6 7.5C5.17157 7.5 4.5 6.82843 4.5 6C4.5 5.17157 5.17157 4.5 6 4.5ZM10.5 4.5C11.3284 4.5 12 5.17157 12 6C12 6.82843 11.3284 7.5 10.5 7.5C9.67157 7.5 9 6.82843 9 6C9 5.17157 9.67157 4.5 10.5 4.5Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBold12.category = 'Interface General';

export default ThreeDotsHorizontalBold12;
