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
      data-fui-icon="SquareFilled12"
      {...props}
    >
      <path
        d="M12 8.25C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h4.5C10.321 0 12 1.679 12 3.75v4.5z"
        fill={color}
      />
    </svg>
  );
};

SquareFilled12.category = 'Interface General';

export default SquareFilled12;
