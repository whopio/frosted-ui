import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.5247 17.0876C22.1118 17.672 23.0623 17.6698 23.6468 17.0827C24.2311 16.4956 24.229 15.545 23.6419 14.9606L17.5287 8.87565C16.6834 8.0343 15.3173 8.03431 14.472 8.87565L8.35873 14.9606C7.7717 15.545 7.76954 16.4956 8.35385 17.0827C8.93831 17.6697 9.88883 17.672 10.4759 17.0876L16.0003 11.5876L21.5247 17.0876ZM21.5247 23.3102C22.1118 23.8946 23.0624 23.8924 23.6468 23.3053C24.2312 22.7183 24.2289 21.7677 23.6419 21.1833L17.5287 15.0983C16.6833 14.2568 15.3173 14.2568 14.472 15.0983L8.35873 21.1833C7.77168 21.7677 7.76945 22.7182 8.35385 23.3053C8.93831 23.8923 9.88886 23.8946 10.4759 23.3102L16.0003 17.8102L21.5247 23.3102Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled32.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled32;
