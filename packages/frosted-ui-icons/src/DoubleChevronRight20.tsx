import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.6663 2.28156C8.37354 1.98875 8.37364 1.51391 8.6663 1.22102C8.95909 0.92845 9.43399 0.927559 9.72685 1.22004L17.639 9.13215C18.1188 9.61216 18.1188 10.3904 17.639 10.8704L9.72685 18.7816C9.43395 19.0744 8.95918 19.0744 8.6663 18.7816C8.37351 18.4887 8.37345 18.0139 8.6663 17.721L16.386 10.0013L8.6663 2.28156ZM2.22099 2.28156C1.92841 1.98873 1.92839 1.51385 2.22099 1.22102C2.51371 0.928398 2.98863 0.927704 3.28154 1.22004L11.1936 9.13215C11.6736 9.6122 11.6736 10.3904 11.1936 10.8704L3.28154 18.7816C2.98864 19.0744 2.51387 19.0744 2.22099 18.7816C1.92838 18.4886 1.9282 18.0138 2.22099 17.721L9.94072 10.0013L2.22099 2.28156Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRight20.category = 'Arrows';

export default DoubleChevronRight20;
