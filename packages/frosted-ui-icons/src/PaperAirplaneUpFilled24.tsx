import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.08984 2.14355C10.2823 -0.270644 13.7264 -0.270527 14.9189 2.14355L23.0811 18.6738C24.5437 21.6358 21.5227 24.8149 18.4902 23.5049L12.7539 21.0264V13.9336C12.7537 13.5195 12.418 13.1836 12.0039 13.1836C11.59 13.1839 11.2541 13.5197 11.2539 13.9336V21.0264L5.51855 23.5049C2.4861 24.8148 -0.534857 21.6357 0.927734 18.6738L9.08984 2.14355Z"
        fill={color}
      />
    </svg>
  );
};

export default PaperAirplaneUpFilled24;
