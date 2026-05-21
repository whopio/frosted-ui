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
        d="M10.4993 8.1166C10.9875 7.62851 11.7788 7.62853 12.2669 8.1166C12.7547 8.60477 12.7549 9.39613 12.2669 9.88418L9.11945 13.0316C8.50121 13.6497 7.49848 13.6496 6.88019 13.0316L3.73273 9.88418C3.24463 9.39608 3.24475 8.60477 3.73273 8.1166C4.22088 7.62845 5.01215 7.62845 5.50031 8.1166L7.99933 10.6156L10.4993 8.1166ZM10.4993 2.8666C10.9875 2.37851 11.7788 2.37853 12.2669 2.8666C12.7547 3.35477 12.7549 4.14613 12.2669 4.63418L9.11945 7.78164C8.50121 8.39968 7.49849 8.39959 6.88019 7.78164L3.73273 4.63418C3.24463 4.14608 3.24474 3.35477 3.73273 2.8666C4.22088 2.37845 5.01215 2.37845 5.50031 2.8666L7.99933 5.36562L10.4993 2.8666Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallFilled16.category = 'Arrows';

export default DoubleChevronDownSmallFilled16;
