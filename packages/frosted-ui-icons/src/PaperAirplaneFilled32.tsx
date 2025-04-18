import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M31.2368 14.7493L1.9504 0.142925C0.887605 -0.385472 -0.285983 0.637773 0.062811 1.79521L4.0924 13.3864C4.25654 13.9274 4.72434 14.3132 5.2783 14.3593L19.0495 16.0032L5.2783 17.6471C4.72434 17.6933 4.25654 18.0791 4.0924 18.62L0.062811 30.207C-0.285983 31.3645 0.883502 32.3877 1.9504 31.8551L31.2409 17.2487C31.7784 16.9803 32 16.5987 32 15.999C32 15.3993 31.7825 15.0177 31.2409 14.7493H31.2368Z"
        fill={color}
      />
    </svg>
  );
};

export default PaperAirplaneFilled32;
