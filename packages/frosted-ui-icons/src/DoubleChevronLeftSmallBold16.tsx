import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.95418 5.32138C8.34464 4.93088 8.34462 4.29783 7.95418 3.90732C7.56366 3.51692 6.93061 3.51688 6.54012 3.90732L3.39266 7.05478C2.87205 7.57545 2.87208 8.41983 3.39266 8.94052L6.54012 12.088C6.93063 12.4785 7.56365 12.4785 7.95418 12.088C8.3447 11.6975 8.3447 11.0644 7.95418 10.6739L5.2784 7.99814L7.95418 5.32138ZM12.7042 5.32138C13.0946 4.93088 13.0946 4.29783 12.7042 3.90732C12.3137 3.5169 11.6806 3.51688 11.2901 3.90732L8.14266 7.05478C7.62204 7.57545 7.62206 8.41983 8.14266 8.94052L11.2901 12.088C11.6806 12.4785 12.3137 12.4785 12.7042 12.088C13.0947 11.6975 13.0947 11.0644 12.7042 10.6739L10.0284 7.99814L12.7042 5.32138Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold16.category = 'Arrows';

export default DoubleChevronLeftSmallBold16;
