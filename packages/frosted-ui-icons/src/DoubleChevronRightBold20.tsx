import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.4652 2.68477C8.07472 2.2943 8.07483 1.66125 8.4652 1.27071C8.85573 0.880293 9.48877 0.880222 9.87926 1.27071L17.5404 8.93184C18.1179 9.50952 18.1179 10.446 17.5404 11.0236L9.87926 18.6848C9.48879 19.0752 8.85571 19.0751 8.4652 18.6848C8.07475 18.2943 8.07475 17.6612 8.4652 17.2707L15.7582 9.97774L8.4652 2.68477ZM2.31871 2.68477C1.92824 2.2943 1.92834 1.66125 2.31871 1.27071C2.70924 0.880295 3.34229 0.880222 3.73277 1.27071L11.3939 8.93184C11.9713 9.50952 11.9714 10.446 11.3939 11.0236L3.73277 18.6848C3.34233 19.0751 2.70924 19.075 2.31871 18.6848C1.92827 18.2943 1.92827 17.6612 2.31871 17.2707L9.61168 9.97774L2.31871 2.68477Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold20.category = 'Arrows';

export default DoubleChevronRightBold20;
