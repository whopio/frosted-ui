import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM11.7803 5.46973C11.4874 5.17683 11.0126 5.17683 10.7197 5.46973L6.75 9.43945L5.28027 7.96973C4.98738 7.67683 4.51262 7.67683 4.21973 7.96973C3.92683 8.26262 3.92683 8.73738 4.21973 9.03027L6.21973 11.0303C6.51262 11.3232 6.98738 11.3232 7.28027 11.0303L11.7803 6.53027C12.0732 6.23738 12.0732 5.76262 11.7803 5.46973Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckmarkCircleFilled16;
