import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.0257 10.139C14.6366 9.74774 14.6377 9.11453 15.0286 8.72497C15.4199 8.33527 16.0539 8.33673 16.4436 8.7279L22.5315 14.8412C23.1789 15.4915 23.1789 16.5425 22.5315 17.1927L16.4436 23.306C16.0539 23.6972 15.4199 23.6986 15.0286 23.309C14.6375 22.9193 14.6361 22.2852 15.0257 21.8939L20.8792 16.017L15.0257 10.139ZM9.27566 10.139C8.88655 9.74773 8.88762 9.11453 9.27859 8.72497C9.66985 8.33528 10.3039 8.33673 10.6936 8.7279L16.7815 14.8412C17.4289 15.4915 17.4289 16.5425 16.7815 17.1927L10.6936 23.306C10.3039 23.6972 9.66987 23.6986 9.27859 23.309C8.88748 22.9192 8.88611 22.2852 9.27566 21.8939L15.1292 16.017L9.27566 10.139Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBold32.category = 'Arrows';

export default DoubleChevronRightSmallBold32;
