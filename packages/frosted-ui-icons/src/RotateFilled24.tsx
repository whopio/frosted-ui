import * as React from 'react';
import { IconProps } from './types';

export const RotateFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateFilled24"
      {...props}
    >
      <path
        d="M22.25 14c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25S21 20.94 21 20.25v-1.095c-2.106 2.646-5.353 4.345-9 4.345-4.944 0-9.156-3.12-10.782-7.493-.24-.647.09-1.366.736-1.607.647-.24 1.367.089 1.608.736C4.835 18.562 8.134 21 12 21c3.33 0 6.237-1.81 7.794-4.5H17.25c-.69 0-1.25-.56-1.25-1.25S16.56 14 17.25 14h5zM12 .5c4.944 0 9.156 3.12 10.782 7.493.24.647-.089 1.366-.735 1.607-.647.24-1.367-.089-1.608-.736C19.166 5.438 15.866 3 12 3 8.67 3 5.763 4.81 4.206 7.5H6.75C7.44 7.5 8 8.06 8 8.75S7.44 10 6.75 10h-5C1.06 10 .5 9.44.5 8.75v-5c0-.69.56-1.25 1.25-1.25S3 3.06 3 3.75v1.093C5.106 2.198 8.354.5 12 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateFilled24.category = 'Arrows';

export default RotateFilled24;
