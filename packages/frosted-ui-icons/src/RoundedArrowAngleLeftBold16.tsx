import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 14.9998C12.7614 14.9998 15 12.7612 15 9.99976C14.9998 7.23847 12.7613 4.99976 10 4.99976H5.26758L7.13379 3.13354C7.62182 2.64539 7.62189 1.85408 7.13379 1.36597C6.64567 0.877981 5.85434 0.877988 5.36621 1.36597L1.36621 5.36597C1.1319 5.60032 1.00007 5.91836 1 6.24976C1.00004 6.58117 1.1319 6.89917 1.36621 7.13354L5.36621 11.1335C5.85435 11.6216 6.64565 11.6216 7.13379 11.1335C7.6218 10.6454 7.62183 9.85409 7.13379 9.36597L5.26758 7.49976H10C11.3806 7.49976 12.4998 8.61918 12.5 9.99976C12.5 11.3805 11.3807 12.4998 10 12.4998H8.75293C8.06273 12.4998 7.50309 13.0596 7.50293 13.7498C7.50293 14.4401 8.06263 14.9997 8.75293 14.9998H10Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftBold16.category = 'Arrows';

export default RoundedArrowAngleLeftBold16;
