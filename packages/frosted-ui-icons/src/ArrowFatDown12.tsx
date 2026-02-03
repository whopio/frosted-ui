import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.125 0.625C7.81532 0.625067 8.375 1.1847 8.375 1.875V6.125H9.33008C10.1854 6.12516 10.6457 7.12925 10.0879 7.77734L6.94727 11.4248C6.4486 12.0035 5.55139 12.0037 5.05273 11.4248L1.91309 7.77734C1.35504 7.1293 1.81474 6.12538 2.66992 6.125H3.625V1.875C3.625 1.18471 4.18474 0.625115 4.875 0.625H7.125ZM5.125 6.875C5.125 7.28917 4.78916 7.62493 4.375 7.625H3.76074L6 10.2246L8.23926 7.625H7.625C7.21088 7.6249 6.875 7.28915 6.875 6.875V2.125H5.125V6.875Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDown12.category = 'Arrows';

export default ArrowFatDown12;
