import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5861 8.05371C13.1703 7.46682 13.1687 6.51715 12.5822 5.93262C11.9954 5.34817 11.0457 5.35004 10.4611 5.93652L5.83215 10.584C5.05514 11.3643 5.05513 12.6259 5.83215 13.4062L10.4611 18.0537C11.0457 18.6404 11.9953 18.6421 12.5822 18.0576C13.1686 17.473 13.1704 16.5233 12.5861 15.9365L8.66125 11.9951L12.5861 8.05371ZM18.3126 8.05371C18.8972 7.46681 18.8955 6.51724 18.3087 5.93262C17.7218 5.34829 16.7722 5.34981 16.1876 5.93652L11.5587 10.584C10.7818 11.3643 10.7819 12.6259 11.5587 13.4062L16.1876 18.0537C16.7722 18.6405 17.7218 18.6421 18.3087 18.0576C18.8955 17.473 18.8972 16.5234 18.3126 15.9365L14.3878 11.9951L18.3126 8.05371Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled24;
