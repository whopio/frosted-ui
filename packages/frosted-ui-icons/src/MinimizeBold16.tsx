import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.5 8.5C7.05228 8.5 7.5 8.94772 7.5 9.5V14C7.5 14.5523 7.05228 15 6.5 15C5.94772 15 5.5 14.5523 5.5 14V11.9141L2.70703 14.707C2.31651 15.0976 1.68349 15.0976 1.29297 14.707C0.902444 14.3165 0.902444 13.6835 1.29297 13.293L4.08594 10.5H2C1.44772 10.5 1 10.0523 1 9.5C1 8.94772 1.44772 8.5 2 8.5H6.5ZM13.293 1.29297C13.6835 0.902444 14.3165 0.902444 14.707 1.29297C15.0976 1.68349 15.0976 2.31651 14.707 2.70703L11.9141 5.5H14C14.5523 5.5 15 5.94772 15 6.5C15 7.05228 14.5523 7.5 14 7.5H9.5C8.94772 7.5 8.5 7.05228 8.5 6.5V2C8.5 1.44772 8.94772 1 9.5 1C10.0523 1 10.5 1.44772 10.5 2V4.08594L13.293 1.29297Z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBold16.category = 'Arrows';

export default MinimizeBold16;
