import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.88096 5.49823C8.36905 5.01009 8.36902 4.21879 7.88096 3.73065C7.39279 3.24284 6.60143 3.24265 6.11338 3.73065L2.96592 6.87811C2.34789 7.49635 2.34798 8.49907 2.96592 9.11737L6.11338 12.2648C6.60148 12.7529 7.39279 12.7528 7.88096 12.2648C8.36911 11.7767 8.3691 10.9854 7.88096 10.4973L5.38194 7.99823L7.88096 5.49823ZM13.131 5.49823C13.619 5.01009 13.619 4.21879 13.131 3.73065C12.6428 3.24283 11.8514 3.24265 11.3634 3.73065L8.21592 6.87811C7.59788 7.49635 7.59797 8.49907 8.21592 9.11737L11.3634 12.2648C11.8515 12.7529 12.6428 12.7528 13.131 12.2648C13.6191 11.7767 13.6191 10.9854 13.131 10.4973L10.6319 7.99823L13.131 5.49823Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallFilled16.category = 'Arrows';

export default DoubleChevronLeftSmallFilled16;
