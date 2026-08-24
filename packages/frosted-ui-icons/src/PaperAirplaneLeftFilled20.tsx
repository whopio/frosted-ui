import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftFilled20"
      {...props}
    >
      <path
        d="M2.343 12.207c-1.79-.927-1.79-3.487 0-4.414l12.483-6.462c2.433-1.26 5.069 1.306 3.876 3.773l-2.005 4.141H10.75c-.414 0-.75.336-.75.75 0 .415.336.75.75.75h5.944l2.009 4.153c1.192 2.466-1.443 5.031-3.876 3.771L2.343 12.207z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftFilled20.category = 'Communication';

export default PaperAirplaneLeftFilled20;
