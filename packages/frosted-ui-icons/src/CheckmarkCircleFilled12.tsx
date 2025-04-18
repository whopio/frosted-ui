import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.62669 8.42418C5.4835 8.57335 5.28507 8.65677 5.07831 8.65475C4.87155 8.65273 4.6748 8.56543 4.53455 8.4135L2.70598 6.43254C2.42502 6.12818 2.444 5.65368 2.74837 5.37273C3.05274 5.09178 3.52723 5.11076 3.80818 5.41512L5.09636 6.81065L8.20175 3.57586C8.48861 3.27705 8.96338 3.26737 9.26219 3.55422C9.561 3.84108 9.57069 4.31585 9.28383 4.61466L5.62669 8.42418Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CheckmarkCircleFilled12;
