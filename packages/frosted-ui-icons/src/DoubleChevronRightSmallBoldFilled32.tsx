import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.9078 10.471C14.3234 9.88393 14.3256 8.93342 14.9127 8.34894C15.4998 7.76465 16.4504 7.7668 17.0348 8.35382L23.1198 14.4671C23.9611 15.3124 23.9611 16.6784 23.1198 17.5237L17.0348 23.637C16.4504 24.2241 15.4998 24.2262 14.9127 23.6419C14.3257 23.0575 14.3234 22.1069 14.9078 21.5198L20.4078 15.9954L14.9078 10.471ZM8.68518 10.471C8.1008 9.88392 8.10302 8.93339 8.69006 8.34894C9.27712 7.76456 10.2277 7.76686 10.8121 8.35382L16.8971 14.4671C17.7386 15.3124 17.7386 16.6784 16.8971 17.5237L10.8121 23.637C10.2277 24.2241 9.27716 24.2263 8.69006 23.6419C8.1031 23.0574 8.10081 22.1069 8.68518 21.5198L14.1852 15.9954L8.68518 10.471Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled32.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled32;
