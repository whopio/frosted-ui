import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.1182 12.4048C16.6074 12.8914 17.3988 12.8897 17.8858 12.4009C18.3727 11.9118 18.3707 11.1204 17.8819 10.6333L13.2354 6.00537C12.5526 5.32526 11.4475 5.32527 10.7647 6.00537L6.11822 10.6333C5.62924 11.1204 5.62735 11.9118 6.11431 12.4009C6.60141 12.8896 7.39283 12.8916 7.88189 12.4048L12.0001 8.30322L16.1182 12.4048ZM16.1182 18.1313C16.6074 18.6183 17.3987 18.6165 17.8858 18.1274C18.3726 17.6383 18.3709 16.8469 17.8819 16.3599L13.2354 11.7319C12.5526 11.0519 11.4476 11.0521 10.7647 11.7319L6.11822 16.3599C5.62915 16.847 5.62734 17.6383 6.11431 18.1274C6.60142 18.6165 7.39274 18.6183 7.88189 18.1313L12.0001 14.0298L16.1182 18.1313Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled24.category = 'Arrows';

export default DoubleChevronUpSmallFilled24;
