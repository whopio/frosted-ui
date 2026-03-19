import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.4993 8.11654C10.9875 7.62845 11.7788 7.62847 12.2669 8.11654C12.7547 8.60471 12.7549 9.39607 12.2669 9.88412L9.11945 13.0316C8.50121 13.6496 7.49848 13.6495 6.88019 13.0316L3.73273 9.88412C3.24463 9.39602 3.24475 8.60471 3.73273 8.11654C4.22088 7.62839 5.01215 7.62839 5.50031 8.11654L7.99933 10.6156L10.4993 8.11654ZM10.4993 2.86654C10.9875 2.37845 11.7788 2.37847 12.2669 2.86654C12.7547 3.35471 12.7549 4.14607 12.2669 4.63412L9.11945 7.78158C8.50121 8.39962 7.49849 8.39953 6.88019 7.78158L3.73273 4.63412C3.24463 4.14602 3.24474 3.35471 3.73273 2.86654C4.22088 2.37839 5.01215 2.37839 5.50031 2.86654L7.99933 5.36556L10.4993 2.86654Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallFilled16.category = 'Arrows';

export default DoubleChevronDownSmallFilled16;
