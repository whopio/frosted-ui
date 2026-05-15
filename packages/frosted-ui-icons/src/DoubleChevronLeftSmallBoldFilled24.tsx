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
        d="M12.5861 8.05368C13.1703 7.46679 13.1688 6.51712 12.5822 5.93259C11.9954 5.34814 11.0458 5.35002 10.4611 5.9365L5.83223 10.584C5.05522 11.3643 5.0552 12.6259 5.83223 13.4062L10.4611 18.0537C11.0458 18.6404 11.9954 18.6421 12.5822 18.0576C13.1687 17.473 13.1705 16.5233 12.5861 15.9365L8.66133 11.9951L12.5861 8.05368ZM18.3127 8.05368C18.8972 7.46678 18.8956 6.51721 18.3088 5.93259C17.7219 5.34826 16.7723 5.34978 16.1877 5.9365L11.5588 10.584C10.7819 11.3642 10.782 12.6259 11.5588 13.4062L16.1877 18.0537C16.7723 18.6405 17.7219 18.6421 18.3088 18.0576C18.8956 17.473 18.8972 16.5234 18.3127 15.9365L14.3879 11.9951L18.3127 8.05368Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled24;
