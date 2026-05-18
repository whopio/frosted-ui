import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.2765 6.36371C10.5693 6.0709 10.5692 5.5961 10.2765 5.30316C9.98368 5.01038 9.50887 5.01043 9.21595 5.30316L5.34193 9.17426C4.88613 9.62992 4.88607 10.37 5.34193 10.8256L9.21595 14.6967C9.50883 14.9894 9.98367 14.9894 10.2765 14.6967C10.5692 14.4038 10.5693 13.929 10.2765 13.6362L6.6388 10.0004L10.2765 6.36371ZM14.7794 6.36371C15.0723 6.0709 15.0722 5.5961 14.7794 5.30316C14.4866 5.01038 14.0118 5.01043 13.7189 5.30316L9.84486 9.17426C9.38899 9.62992 9.38897 10.37 9.84486 10.8256L13.7189 14.6967C14.0118 14.9894 14.4866 14.9894 14.7794 14.6967C15.0722 14.4038 15.0722 13.929 14.7794 13.6362L11.1417 10.0004L14.7794 6.36371Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall20.category = 'Arrows';

export default DoubleChevronLeftSmall20;
