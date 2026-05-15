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
        d="M8.04533 5.32138C7.65488 4.93088 7.6549 4.29783 8.04533 3.90732C8.43585 3.51692 9.0689 3.51688 9.45939 3.90732L12.6069 7.05478C13.1275 7.57545 13.1274 8.41983 12.6069 8.94052L9.45939 12.088C9.06888 12.4785 8.43586 12.4785 8.04533 12.088C7.65481 11.6975 7.65481 11.0644 8.04533 10.6739L10.7211 7.99814L8.04533 5.32138ZM3.29533 5.32138C2.90488 4.93088 2.9049 4.29783 3.29533 3.90732C3.68585 3.5169 4.3189 3.51688 4.70939 3.90732L7.85685 7.05478C8.37748 7.57545 8.37745 8.41983 7.85685 8.94052L4.70939 12.088C4.31888 12.4785 3.68586 12.4785 3.29533 12.088C2.90481 11.6975 2.90481 11.0644 3.29533 10.6739L5.97111 7.99814L3.29533 5.32138Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBold16.category = 'Arrows';

export default DoubleChevronRightSmallBold16;
