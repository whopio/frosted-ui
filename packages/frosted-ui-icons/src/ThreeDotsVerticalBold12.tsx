import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.5 10.5C4.5 9.67157 5.17157 9 6 9C6.82843 9 7.5 9.67157 7.5 10.5C7.5 11.3284 6.82843 12 6 12C5.17157 12 4.5 11.3284 4.5 10.5ZM4.5 6C4.5 5.17157 5.17157 4.5 6 4.5C6.82843 4.5 7.5 5.17157 7.5 6C7.5 6.82843 6.82843 7.5 6 7.5C5.17157 7.5 4.5 6.82843 4.5 6ZM4.5 1.5C4.5 0.671573 5.17157 0 6 0C6.82843 0 7.5 0.671573 7.5 1.5C7.5 2.32843 6.82843 3 6 3C5.17157 3 4.5 2.32843 4.5 1.5Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold12.category = 'Interface General';

export default ThreeDotsVerticalBold12;
