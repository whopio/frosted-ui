import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.04533 5.32126C7.65488 4.93075 7.6549 4.29771 8.04533 3.9072C8.43585 3.5168 9.0689 3.51676 9.45939 3.9072L12.6069 7.05466C13.1275 7.57533 13.1274 8.41971 12.6069 8.9404L9.45939 12.0879C9.06888 12.4784 8.43586 12.4783 8.04533 12.0879C7.65481 11.6973 7.65481 11.0643 8.04533 10.6738L10.7211 7.99802L8.04533 5.32126ZM3.29533 5.32126C2.90488 4.93075 2.9049 4.29771 3.29533 3.9072C3.68585 3.51678 4.3189 3.51675 4.70939 3.9072L7.85685 7.05466C8.37748 7.57533 8.37745 8.41971 7.85685 8.9404L4.70939 12.0879C4.31888 12.4784 3.68586 12.4784 3.29533 12.0879C2.90481 11.6973 2.90481 11.0643 3.29533 10.6738L5.97111 7.99802L3.29533 5.32126Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBold16.category = 'Arrows';

export default DoubleChevronRightSmallBold16;
