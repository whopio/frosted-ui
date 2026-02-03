import * as React from 'react';
import { IconProps } from './types';

export const GridFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.75 13C9.54493 13 11 14.4551 11 16.25V20.75C11 22.5449 9.54493 24 7.75 24H3.25C1.45507 24 1.19526e-07 22.5449 0 20.75V16.25C2.28884e-08 14.4551 1.45507 13 3.25 13H7.75ZM20.75 13C22.5449 13 24 14.4551 24 16.25V20.75C24 22.5449 22.5449 24 20.75 24H16.25C14.4551 24 13 22.5449 13 20.75V16.25C13 14.4551 14.4551 13 16.25 13H20.75ZM7.75 0C9.54493 1.19528e-07 11 1.45507 11 3.25V7.75C11 9.54493 9.54493 11 7.75 11H3.25C1.45507 11 1.19526e-07 9.54493 0 7.75V3.25C2.28884e-08 1.45507 1.45507 2.2888e-08 3.25 0H7.75ZM20.75 0C22.5449 1.19528e-07 24 1.45507 24 3.25V7.75C24 9.54493 22.5449 11 20.75 11H16.25C14.4551 11 13 9.54493 13 7.75V3.25C13 1.45507 14.4551 2.2888e-08 16.25 0H20.75Z"
        fill={color}
      />
    </svg>
  );
};

GridFilled24.category = 'Interface General';

export default GridFilled24;
