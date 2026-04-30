import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.21235 0.270796C10.7644 -0.230349 12.2314 1.23659 11.73 2.78848L9.24688 10.4727C8.62321 12.4016 5.92107 12.4749 5.19414 10.5825L4.44214 8.62211L7.22983 5.83443C7.52242 5.54153 7.52258 5.06657 7.22983 4.77377C6.93703 4.48097 6.46209 4.48116 6.16917 4.77377L3.38218 7.56076L1.41553 6.80532C-0.4763 6.07794 -0.402969 3.37619 1.52533 2.75258L9.21235 0.270796Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled12.category = 'Communication';

export default PaperAirplaneUpRightFilled12;
