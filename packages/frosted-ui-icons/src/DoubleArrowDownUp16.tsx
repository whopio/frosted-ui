import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUp16"
      {...props}
    >
      <path
        d="M8.725 3.69c-.31.31-.311.815 0 1.126.31.311.815.31 1.126 0l2.097-2.096v13.483c0 .44.357.797.796.797.44 0 .797-.357.797-.797V2.72l2.096 2.096c.311.31.816.31 1.127 0 .31-.311.31-.815 0-1.126L13.308.233c-.312-.31-.816-.31-1.127 0L8.725 3.69zM.234 12.184c-.311.311-.311.815 0 1.126l3.456 3.457c.311.31.815.31 1.126 0l3.457-3.457c.31-.31.31-.815 0-1.126-.311-.311-.816-.311-1.127 0L5.05 14.28V.797C5.05.357 4.693 0 4.253 0c-.44 0-.796.357-.796.797V14.28L1.36 12.184c-.311-.311-.815-.311-1.126 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowDownUp16.category = 'Arrows';

export default DoubleArrowDownUp16;
