import * as React from 'react';
import { IconProps } from './types';

export const BarChart2Bold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.25 4.75C1.80228 4.75 2.25 5.19772 2.25 5.75V10.25C2.25 10.8023 1.80228 11.25 1.25 11.25C0.697715 11.25 0.25 10.8023 0.25 10.25V5.75C0.25 5.19772 0.697716 4.75 1.25 4.75ZM4.25 0.75C4.80228 0.75 5.25 1.19772 5.25 1.75V10.25C5.25 10.8023 4.80228 11.25 4.25 11.25C3.69772 11.25 3.25 10.8023 3.25 10.25V1.75C3.25 1.19772 3.69772 0.75 4.25 0.75ZM7.25 6.75C7.80228 6.75 8.25 7.19772 8.25 7.75V10.25C8.25 10.8023 7.80228 11.25 7.25 11.25C6.69772 11.25 6.25 10.8023 6.25 10.25V7.75C6.25 7.19772 6.69772 6.75 7.25 6.75ZM10.25 3.25C10.8023 3.25 11.25 3.69772 11.25 4.25V10.25C11.25 10.8023 10.8023 11.25 10.25 11.25C9.69771 11.25 9.25 10.8023 9.25 10.25V4.25C9.25 3.69772 9.69771 3.25 10.25 3.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BarChart2Bold12.category = 'Stats & Charts';

export default BarChart2Bold12;
