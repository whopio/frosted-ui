import * as React from 'react';
import { IconProps } from './types';

export const DashboardFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.75 1C13.0972 1 15 2.90279 15 5.25V10.75C15 13.0972 13.0972 15 10.75 15H5.25C2.90279 15 1 13.0972 1 10.75V5.25C1 2.90279 2.90279 1 5.25 1H10.75ZM11.7842 6.01465C11.4932 5.71988 11.0174 5.71682 10.7227 6.00781L8.58984 8.1123L7.5498 7.08594L7.4707 7.01465C7.09052 6.70847 6.54512 6.70827 6.16504 7.01465L6.08594 7.08594L4.22266 8.9248C3.92831 9.21572 3.92525 9.69066 4.21582 9.98535C4.50678 10.2799 4.98261 10.283 5.27734 9.99219L6.81836 8.4707L7.85938 9.49805C8.26501 9.89832 8.91662 9.8983 9.32227 9.49805L11.7773 7.07617C12.0721 6.78522 12.075 6.30943 11.7842 6.01465Z"
        fill={color}
      />
    </svg>
  );
};

DashboardFilled16.category = 'Stats & Charts';

export default DashboardFilled16;
