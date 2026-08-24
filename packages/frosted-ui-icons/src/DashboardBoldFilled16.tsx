import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBoldFilled16"
      {...props}
    >
      <path
        d="M10.5 1C12.985 1 15 3.015 15 5.5v5c0 2.485-2.015 4.5-4.5 4.5h-5C3.015 15 1 12.985 1 10.5v-5C1 3.015 3.015 1 5.5 1h5zm1.462 4.84c-.388-.393-1.021-.398-1.414-.01L8.59 7.762l-.865-.855c-.472-.465-1.212-.494-1.717-.087l-.098.087-1.863 1.84c-.393.388-.398 1.021-.01 1.414s1.021.397 1.414.009L6.817 8.82l.867.856c.503.496 1.311.496 1.814 0l2.454-2.423c.393-.388.397-1.021.01-1.414z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled16.category = 'Stats & Charts';

export default DashboardBoldFilled16;
