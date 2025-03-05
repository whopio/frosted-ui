import * as React from 'react';
import { IconProps } from './types';

export const QuoteRight24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M6.48986 5C4.0283 5 2 6.95019 2 9.39583 2 11.8415 4.0283 13.7917 6.48986 13.7917 7.42886 13.7917 8.30482 13.5079 9.02918 13.0211 8.8255 13.56 8.56249 14.031 8.25362 14.4567 7.37729 15.6645 6.08904 16.5744 4.47836 17.6211 4.13106 17.8469 4.03249 18.3114 4.2582 18.6587 4.48392 19.006 4.94845 19.1046 5.29576 18.8789 6.89069 17.8423 8.40734 16.799 9.46771 15.3376 10.5513 13.8441 11.117 11.9794 10.9797 9.37492 10.9682 6.93909 8.94441 5 6.48986 5zM17.4899 5C15.0283 5 13 6.95019 13 9.39583 13 11.8415 15.0283 13.7917 17.4899 13.7917 18.4289 13.7917 19.3048 13.5079 20.0292 13.0211 19.8255 13.56 19.5625 14.031 19.2536 14.4567 18.3773 15.6645 17.089 16.5744 15.4784 17.6211 15.1311 17.8469 15.0325 18.3114 15.2582 18.6587 15.4839 19.006 15.9485 19.1046 16.2958 18.8789 17.8907 17.8423 19.4073 16.799 20.4677 15.3376 21.5513 13.8441 22.117 11.9794 21.9797 9.37492 21.9682 6.93909 19.9444 5 17.4899 5z"
        fill={color}
      />
    </svg>
  );
};

export default QuoteRight24;
