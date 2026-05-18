import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.72301 6.36371C9.43017 6.0709 9.43026 5.5961 9.72301 5.30316C10.0158 5.01038 10.4906 5.01043 10.7836 5.30316L14.6576 9.17426C15.1134 9.62992 15.1134 10.37 14.6576 10.8256L10.7836 14.6967C10.4907 14.9894 10.0158 14.9894 9.72301 14.6967C9.43027 14.4038 9.4302 13.929 9.72301 13.6362L13.3607 10.0004L9.72301 6.36371ZM5.22008 6.36371C4.92724 6.0709 4.92733 5.5961 5.22008 5.30316C5.5129 5.01038 5.98771 5.01043 6.28063 5.30316L10.1547 9.17426C10.6105 9.62992 10.6105 10.37 10.1547 10.8256L6.28063 14.6967C5.98773 14.9894 5.5129 14.9894 5.22008 14.6967C4.92734 14.4038 4.92727 13.929 5.22008 13.6362L8.85778 10.0004L5.22008 6.36371Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall20.category = 'Arrows';

export default DoubleChevronRightSmall20;
