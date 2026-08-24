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
      data-fui-icon="PercentageFilled12"
      {...props}
    >
      <path
        d="M9.866.366c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-9.5 9.5c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768l9.5-9.5zM9.75 7.5C10.993 7.5 12 8.507 12 9.75S10.993 12 9.75 12 7.5 10.993 7.5 9.75 8.507 7.5 9.75 7.5zM2.25 0C3.493 0 4.5 1.007 4.5 2.25S3.493 4.5 2.25 4.5 0 3.493 0 2.25 1.007 0 2.25 0z"
        fill={color}
      />
    </svg>
  );
};

PercentageFilled12.category = 'Money & Shopping';

export default PercentageFilled12;
