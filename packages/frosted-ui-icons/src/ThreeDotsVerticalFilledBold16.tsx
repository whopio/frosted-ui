import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilledBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.875 13.25C5.875 12.0764 6.82639 11.125 8 11.125C9.17361 11.125 10.125 12.0764 10.125 13.25C10.125 14.4236 9.17361 15.375 8 15.375C6.82639 15.375 5.875 14.4236 5.875 13.25ZM5.875 8C5.875 6.8264 6.82639 5.875 8 5.875C9.17361 5.875 10.125 6.8264 10.125 8C10.125 9.1736 9.17361 10.125 8 10.125C6.82639 10.125 5.875 9.1736 5.875 8ZM5.875 2.75C5.875 1.5764 6.82639 0.625 8 0.625C9.17361 0.625 10.125 1.5764 10.125 2.75C10.125 3.9236 9.17361 4.875 8 4.875C6.82639 4.875 5.875 3.9236 5.875 2.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilledBold16.category = 'Product Icons';

export default ThreeDotsVerticalFilledBold16;
