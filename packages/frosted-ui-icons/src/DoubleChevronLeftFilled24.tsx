import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.1355 3.13545C14.6236 2.64729 14.6236 1.856 14.1355 1.36787C13.6474 0.879934 12.856 0.879852 12.3679 1.36787L3.03981 10.696C2.31776 11.4182 2.31766 12.5892 3.03981 13.3112L12.3679 22.6355C12.8561 23.1234 13.6474 23.1235 14.1355 22.6355C14.6235 22.1473 14.6235 21.356 14.1355 20.8679L5.26832 12.0036L14.1355 3.13545ZM21.1355 3.13545C21.6236 2.64729 21.6236 1.856 21.1355 1.36787C20.6474 0.88003 19.856 0.879883 19.3679 1.36787L10.0398 10.696C9.31771 11.4181 9.31773 12.5891 10.0398 13.3112L19.3679 22.6355C19.8561 23.1235 20.6474 23.1236 21.1355 22.6355C21.6235 22.1473 21.6235 21.356 21.1355 20.8679L12.2683 12.0036L21.1355 3.13545Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftFilled24.category = 'Arrows';

export default DoubleChevronLeftFilled24;
