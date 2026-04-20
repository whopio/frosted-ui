import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilledBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 16.25C7.50016 14.8694 8.61939 13.75 10 13.75C11.3806 13.75 12.4998 14.8694 12.5 16.25C12.5 17.6307 11.3807 18.75 10 18.75C8.61929 18.75 7.5 17.6307 7.5 16.25ZM7.5 10C7.50016 8.61943 8.61939 7.5 10 7.5C11.3806 7.5 12.4998 8.61943 12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10ZM7.5 3.75C7.50016 2.36943 8.61939 1.25 10 1.25C11.3806 1.25 12.4998 2.36943 12.5 3.75C12.5 5.13071 11.3807 6.25 10 6.25C8.61929 6.25 7.5 5.13071 7.5 3.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilledBold20.category = 'Interface General';

export default ThreeDotsVerticalFilledBold20;
