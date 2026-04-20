import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.27535 8.20829H3.12533C2.25089 8.20829 1.54199 8.91715 1.54199 9.79163V16.0416C1.54199 16.9161 2.25089 17.625 3.12533 17.625H14.5187C16.1248 17.625 17.49 16.4517 17.7316 14.8639L18.4291 10.2805C18.7284 8.31351 17.2058 6.54163 15.2161 6.54163H11.7231L12.0678 4.33059C12.2966 2.86282 11.1569 1.54163 9.67616 1.54163C9.08439 1.54163 8.53956 1.87181 8.2676 2.39986L5.27535 8.20829ZM4.87533 16.125V9.70829H3.12533C3.0793 9.70829 3.04199 9.7456 3.04199 9.79163V16.0416C3.04199 16.0877 3.0793 16.125 3.12533 16.125H4.87533Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbUpFilled20.category = 'Interface General';

export default ThumbUpFilled20;
