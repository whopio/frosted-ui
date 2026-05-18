import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.8651 2.1155C10.3532 1.62745 11.1455 1.62766 11.6337 2.1155C12.1218 2.60366 12.1218 3.3959 11.6337 3.88406L4.88365 10.6341C4.64933 10.8683 4.3312 11.0002 3.99987 11.0003C3.66867 11.0002 3.35038 10.8681 3.11608 10.6341L0.366076 7.88406C-0.122052 7.39593 -0.121998 6.60464 0.366076 6.11648C0.854231 5.62832 1.6455 5.62832 2.13365 6.11648L3.99987 7.98171L9.8651 2.1155Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBoldFilled12.category = 'Checkmarks';

export default CheckmarkBoldFilled12;
