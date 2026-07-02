import * as React from 'react';
import { IconProps } from './types';

export const SquareFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 8.25C12 10.3211 10.3211 12 8.25 12H3.75C1.67893 12 0 10.3211 0 8.25V3.75C0 1.67893 1.67893 1.28851e-07 3.75 0H8.25C10.3211 0 12 1.67893 12 3.75V8.25Z"
        fill={color}
      />
    </svg>
  );
};

SquareFilled12.category = 'Interface General';

export default SquareFilled12;
