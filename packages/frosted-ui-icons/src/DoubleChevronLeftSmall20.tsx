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
        d="M10.2767 6.36374C10.5696 6.07093 10.5695 5.59613 10.2767 5.30319C9.98393 5.01041 9.50911 5.01046 9.21619 5.30319L5.34217 9.17429C4.88637 9.62995 4.88631 10.37 5.34217 10.8257L9.21619 14.6967C9.50908 14.9894 9.98392 14.9894 10.2767 14.6967C10.5695 14.4038 10.5696 13.929 10.2767 13.6362L6.63905 10.0005L10.2767 6.36374ZM14.7797 6.36374C15.0725 6.07093 15.0724 5.59613 14.7797 5.30319C14.4869 5.01041 14.012 5.01046 13.7191 5.30319L9.8451 9.17429C9.38924 9.62995 9.38922 10.37 9.8451 10.8257L13.7191 14.6967C14.012 14.9895 14.4869 14.9895 14.7797 14.6967C15.0724 14.4038 15.0725 13.929 14.7797 13.6362L11.142 10.0005L14.7797 6.36374Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall20.category = 'Arrows';

export default DoubleChevronLeftSmall20;
