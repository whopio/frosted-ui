import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.99976 10.3059V16.8527C5.99976 17.4863 6.51342 18 7.14705 18H12.8525C13.4861 18 13.9998 17.4863 13.9998 16.8527V10.3059C13.9998 10.137 14.1367 10 14.3057 10H16.9784C17.3826 10 17.5894 9.51523 17.3097 9.22346L10.6623 2.29091C10.301 1.91412 9.69859 1.91412 9.3373 2.29091L2.68991 9.22346C2.41014 9.51523 2.61693 10 3.02115 10H5.69381C5.86278 10 5.99976 10.137 5.99976 10.3059Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBoldFilled20.category = 'Arrows';

export default ArrowFatUpBoldFilled20;
