import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.4994 10.0087C21.982 10.1496 25.9141 12.1319 28.1948 15.2538C30.5236 18.4417 30.9994 22.6539 30.9994 26.7499C30.9994 27.0622 30.8064 27.3421 30.5141 27.4521C30.2216 27.562 29.8907 27.4792 29.685 27.2441C25.3829 22.3274 20.6359 22.0189 15.4994 22.0009V26.7704C15.4993 28.0829 13.9332 28.762 12.975 27.8652L1.66644 17.2773C0.928242 16.5858 0.928245 15.414 1.66644 14.7226L12.975 4.13468C13.9332 3.23781 15.4993 3.91693 15.4994 5.22941V10.0087Z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled32.category = 'Arrows';

export default ReplyFilled32;
