import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.71682 6.36629C8.205 5.87837 8.99632 5.87821 9.4844 6.36629C9.97206 6.8544 9.97219 7.64583 9.4844 8.13387L7.06155 10.5567C6.47587 11.1424 5.52529 11.1422 4.93948 10.5567L2.51663 8.13387C2.02847 7.64571 2.02847 6.85445 2.51663 6.36629C3.0048 5.87827 3.7961 5.87818 4.28421 6.36629L6.00003 8.08211L7.71682 6.36629ZM7.71682 1.36629C8.205 0.878365 8.99632 0.878212 9.4844 1.36629C9.97206 1.8544 9.97219 2.64583 9.4844 3.13387L7.06155 5.55672C6.47587 6.1424 5.52529 6.14218 4.93948 5.55672L2.51663 3.13387C2.02847 2.64571 2.02847 1.85445 2.51663 1.36629C3.0048 0.878274 3.7961 0.878182 4.28421 1.36629L6.00003 3.08211L7.71682 1.36629Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallFilled12.category = 'Arrows';

export default DoubleChevronDownSmallFilled12;
