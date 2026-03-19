import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.5 1C12.642 1 15.9998 4.35807 16 8.5C16 10.3009 15.3646 11.9532 14.3066 13.2461L18.7793 17.7188C19.0719 18.0117 19.0721 18.4865 18.7793 18.7793C18.4865 19.0721 18.0117 19.0719 17.7188 18.7793L13.2461 14.3066C11.9532 15.3646 10.3009 16 8.5 16C4.35807 15.9998 1 12.642 1 8.5C1.00024 4.35822 4.35822 1.00024 8.5 1ZM8.5 2.5C5.18665 2.50024 2.50024 5.18665 2.5 8.5C2.5 11.8136 5.1865 14.4998 8.5 14.5C11.8137 14.5 14.5 11.8137 14.5 8.5C14.4998 5.1865 11.8136 2.5 8.5 2.5Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlass20.category = 'Product Icons';

export default MagnifyingGlass20;
