import * as React from 'react';
import { IconProps } from './types';

export const BarChart2Bold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 6.75C2.80228 6.75 3.25 7.19772 3.25 7.75V13.25C3.25 13.8023 2.80228 14.25 2.25 14.25C1.69772 14.25 1.25 13.8023 1.25 13.25V7.75C1.25 7.19772 1.69772 6.75 2.25 6.75ZM6.25 0.75C6.80228 0.75 7.25 1.19772 7.25 1.75V13.25C7.25 13.8023 6.80228 14.25 6.25 14.25C5.69772 14.25 5.25 13.8023 5.25 13.25V1.75C5.25 1.19772 5.69772 0.75 6.25 0.75ZM10.25 8.25C10.8023 8.25 11.25 8.69772 11.25 9.25V13.25C11.25 13.8023 10.8023 14.25 10.25 14.25C9.69772 14.25 9.25 13.8023 9.25 13.25V9.25C9.25 8.69772 9.69772 8.25 10.25 8.25ZM14.25 4.25C14.8023 4.25 15.25 4.69772 15.25 5.25V13.25C15.25 13.8023 14.8023 14.25 14.25 14.25C13.6977 14.25 13.25 13.8023 13.25 13.25V5.25C13.25 4.69772 13.6977 4.25 14.25 4.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BarChart2Bold16.category = 'Stats & Charts';

export default BarChart2Bold16;
