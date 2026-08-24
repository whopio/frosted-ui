import * as React from 'react';
import { IconProps } from './types';

export const DashboardBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBold16"
      {...props}
    >
      <path
        d="M10.5 1C12.985 1 15 3.015 15 5.5v5c0 2.485-2.015 4.5-4.5 4.5h-5C3.015 15 1 12.985 1 10.5v-5C1 3.015 3.015 1 5.5 1h5zm-5 2C4.12 3 3 4.12 3 5.5v5C3 11.88 4.12 13 5.5 13h5c1.38 0 2.5-1.12 2.5-2.5v-5C13 4.12 11.88 3 10.5 3h-5zm5.048 2.83c.393-.388 1.026-.383 1.414.01.387.393.383 1.026-.01 1.414L9.498 9.677c-.503.496-1.311.496-1.814 0l-.867-.856-1.365 1.349c-.393.388-1.026.384-1.414-.009-.388-.393-.383-1.026.01-1.414l1.863-1.84.098-.087c.505-.407 1.245-.378 1.717.087l.865.855 1.957-1.932z"
        fill={color}
      />
    </svg>
  );
};

DashboardBold16.category = 'Stats & Charts';

export default DashboardBold16;
