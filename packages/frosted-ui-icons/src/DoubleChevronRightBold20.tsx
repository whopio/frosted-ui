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
        d="M8.4652 2.68468C8.07472 2.29421 8.07483 1.66116 8.4652 1.27062C8.85573 0.880201 9.48877 0.880131 9.87926 1.27062L17.5404 8.93175C18.1179 9.50943 18.1179 10.4459 17.5404 11.0235L9.87926 18.6847C9.48879 19.0751 8.85571 19.075 8.4652 18.6847C8.07475 18.2942 8.07475 17.6611 8.4652 17.2706L15.7582 9.97765L8.4652 2.68468ZM2.31871 2.68468C1.92824 2.29421 1.92834 1.66116 2.31871 1.27062C2.70924 0.880203 3.34229 0.880131 3.73277 1.27062L11.3939 8.93175C11.9713 9.50943 11.9714 10.4459 11.3939 11.0235L3.73277 18.6847C3.34233 19.0751 2.70924 19.0749 2.31871 18.6847C1.92827 18.2942 1.92827 17.6611 2.31871 17.2706L9.61168 9.97765L2.31871 2.68468Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold20.category = 'Arrows';

export default DoubleChevronRightBold20;
