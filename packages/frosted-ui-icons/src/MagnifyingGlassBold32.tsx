import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.5 1C20.4036 1 26 6.59644 26 13.5C26 16.5918 24.8744 19.4184 23.0146 21.6006L30.7061 29.292C31.0962 29.6825 31.0964 30.3156 30.7061 30.7061C30.3155 31.0966 29.6815 31.0966 29.291 30.7061L21.6006 23.0146C19.4185 24.8742 16.5916 26 13.5 26C6.59661 25.9998 1 20.4034 1 13.5C1 6.59656 6.59661 1.0002 13.5 1ZM13.5 3C7.70118 3.0002 3 7.70113 3 13.5C3 19.2989 7.70118 23.9998 13.5 24C19.299 24 24 19.299 24 13.5C24 7.70101 19.299 3 13.5 3Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlassBold32.category = 'Interface General';

export default MagnifyingGlassBold32;
