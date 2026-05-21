import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.9393 8.93951C21.5251 8.35402 22.4747 8.35382 23.0604 8.93951C23.6459 9.52522 23.6458 10.4749 23.0604 11.0606L18.121 16.0001L23.0604 20.9395C23.6458 21.5253 23.6459 22.4749 23.0604 23.0606C22.4747 23.6462 21.5251 23.646 20.9393 23.0606L15.9999 18.1212L11.0604 23.0606C10.4747 23.6463 9.52513 23.6461 8.93933 23.0606C8.35355 22.4748 8.35357 21.5253 8.93933 20.9395L13.8788 16.0001L8.93933 11.0606C8.35357 10.4748 8.35362 9.5253 8.93933 8.93951C9.52513 8.35387 10.4747 8.35377 11.0604 8.93951L15.9999 13.879L20.9393 8.93951Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBoldFilled32.category = 'Interface General';

export default XMarkSmallBoldFilled32;
