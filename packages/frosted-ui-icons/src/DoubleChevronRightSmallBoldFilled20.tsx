import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.69263 6.89355C9.10696 6.30792 9.10713 5.35832 9.69263 4.77246C10.2783 4.18678 11.2279 4.18692 11.8137 4.77246L15.6877 8.64355C16.4367 9.39215 16.4367 10.6069 15.6877 11.3555L11.8137 15.2266C11.2279 15.812 10.2783 15.8122 9.69263 15.2266C9.10711 14.6407 9.10701 13.6911 9.69263 13.1055L12.8 10L9.69263 6.89355ZM4.1897 6.89355C3.60402 6.30791 3.60416 5.35832 4.1897 4.77246C4.77535 4.18678 5.72493 4.18692 6.31079 4.77246L10.1848 8.64355C10.9338 9.39215 10.9338 10.6069 10.1848 11.3555L6.31079 15.2266C5.72495 15.8121 4.77535 15.8122 4.1897 15.2266C3.60417 14.6407 3.60404 13.6911 4.1897 13.1055L7.29712 10L4.1897 6.89355Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled20.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled20;
