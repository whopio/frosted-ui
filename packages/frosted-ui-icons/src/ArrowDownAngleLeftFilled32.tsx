import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M29.7505 4.5C30.4407 4.50022 31.0005 5.05979 31.0005 5.75V17.5C31.0005 19.5709 29.3214 21.2498 27.2505 21.25H5.354L9.6167 25.3486C10.114 25.827 10.1298 26.6186 9.65186 27.1162C9.17351 27.6137 8.38194 27.6294 7.88428 27.1514L1.38428 20.9014C1.13918 20.6657 1.00049 20.34 1.00049 20C1.00049 19.66 1.13918 19.3343 1.38428 19.0986L7.88428 12.8486C8.38194 12.3706 9.17351 12.3863 9.65186 12.8838C10.1298 13.3814 10.114 14.173 9.6167 14.6514L5.354 18.75H27.2505C27.9407 18.7498 28.5005 18.1902 28.5005 17.5V5.75C28.5005 5.05965 29.0601 4.5 29.7505 4.5Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftFilled32.category = 'Arrows';

export default ArrowDownAngleLeftFilled32;
