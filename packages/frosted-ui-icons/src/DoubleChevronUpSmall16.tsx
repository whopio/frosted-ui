import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.8529 8.02521C11.1457 8.31803 11.6205 8.31801 11.9134 8.02521C12.2061 7.73232 12.2062 7.2575 11.9134 6.96466L8.76595 3.8172C8.34292 3.39442 7.65672 3.39437 7.23372 3.8172L4.08626 6.96466C3.79344 7.25748 3.79359 7.7323 4.08626 8.02521C4.37915 8.3181 4.85391 8.31809 5.14681 8.02521L7.99935 5.17267L10.8529 8.02521ZM10.8529 12.2752C11.1457 12.568 11.6205 12.568 11.9134 12.2752C12.2061 11.9823 12.2062 11.5075 11.9134 11.2147L8.76595 8.0672C8.34291 7.64441 7.65673 7.64437 7.23372 8.0672L4.08626 11.2147C3.79344 11.5075 3.79358 11.9823 4.08626 12.2752C4.37915 12.5681 4.85391 12.5681 5.14681 12.2752L7.99935 9.42267L10.8529 12.2752Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall16.category = 'Arrows';

export default DoubleChevronUpSmall16;
