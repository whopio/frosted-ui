import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.86437 3.13545C9.37629 2.64729 9.37624 1.856 9.86437 1.36787C10.3525 0.879934 11.1438 0.879852 11.6319 1.36787L20.9601 10.696C21.6821 11.4182 21.6822 12.5892 20.9601 13.3112L11.6319 22.6355C11.1438 23.1234 10.3524 23.1235 9.86437 22.6355C9.37639 22.1473 9.37636 21.356 9.86437 20.8679L18.7316 12.0036L9.86437 3.13545ZM2.86437 3.13545C2.37629 2.64729 2.37624 1.856 2.86437 1.36787C3.35252 0.88003 4.14388 0.879883 4.63195 1.36787L13.9601 10.696C14.6822 11.4181 14.6821 12.5891 13.9601 13.3112L4.63195 22.6355C4.14374 23.1235 3.35244 23.1236 2.86437 22.6355C2.37639 22.1473 2.37636 21.356 2.86437 20.8679L11.7316 12.0036L2.86437 3.13545Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightFilled24.category = 'Arrows';

export default DoubleChevronRightFilled24;
