import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.9082 7.7794C12.3599 7.03627 12.3601 4.96168 10.9082 4.21885L3.13967 0.244243C1.33475 -0.67873 -0.627738 1.18119 0.196312 3.03331L1.18264 5.24815L5.24905 5.24815C5.6632 5.24815 5.99894 5.58402 5.99905 5.99815C5.99905 6.41236 5.66326 6.74815 5.24905 6.74815L1.18264 6.74815L0.194359 8.96885C-0.629707 10.8214 1.33381 12.6807 3.13869 11.7569L10.9082 7.7794Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled12.category = 'Communication';

export default PaperAirplaneRightFilled12;
