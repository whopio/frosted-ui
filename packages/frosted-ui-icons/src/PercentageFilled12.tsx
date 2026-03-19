import * as React from 'react';
import { IconProps } from './types';

export const PercentageFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.86621 0.366211C10.3544 -0.121944 11.1456 -0.121944 11.6338 0.366211C12.1219 0.854366 12.1219 1.64563 11.6338 2.13379L2.13379 11.6338C1.64563 12.1219 0.854366 12.1219 0.366211 11.6338C-0.121944 11.1456 -0.121944 10.3544 0.366211 9.86621L9.86621 0.366211ZM9.75 7.5C10.9926 7.5 12 8.50736 12 9.75C12 10.9926 10.9926 12 9.75 12C8.50736 12 7.5 10.9926 7.5 9.75C7.5 8.50736 8.50736 7.5 9.75 7.5ZM2.25 0C3.49264 0 4.5 1.00736 4.5 2.25C4.5 3.49264 3.49264 4.5 2.25 4.5C1.00736 4.5 0 3.49264 0 2.25C0 1.00736 1.00736 0 2.25 0Z"
        fill={color}
      />
    </svg>
  );
};

PercentageFilled12.category = 'Money & Shopping';

export default PercentageFilled12;
