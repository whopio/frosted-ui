import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M2.5 4.87C2.5 3.56109 3.56109 2.5 4.87 2.5H15.13C16.4389 2.5 17.5 3.56109 17.5 4.87V15.13C17.5 16.3743 16.5411 17.3946 15.322 17.4923L7.47834 8.96875C7.05678 8.51066 6.46268 8.25 5.84015 8.25C5.188 8.25 4.56864 8.53595 4.14566 9.03232L2.5 10.9635V4.87ZM1 12.9949V13.0043V15.13C1 17.2673 2.73266 19 4.87 19H14.9976H15.0028H15.13C17.2673 19 19 17.2673 19 15.13V4.87C19 2.73266 17.2673 1 15.13 1H4.87C2.73266 1 1 2.73266 1 4.87V12.9949ZM12.5 9.25C13.4665 9.25 14.25 8.4665 14.25 7.5C14.25 6.5335 13.4665 5.75 12.5 5.75C11.5335 5.75 10.75 6.5335 10.75 7.5C10.75 8.4665 11.5335 9.25 12.5 9.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PhotoFilled20;
