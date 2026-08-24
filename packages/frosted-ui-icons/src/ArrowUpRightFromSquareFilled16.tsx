import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquareFilled16"
      {...props}
    >
      <path
        d="M5.5 1.5c.69 0 1.25.56 1.25 1.25S6.19 4 5.5 4h-.25c-.966 0-1.75.784-1.75 1.75v5c0 .966.784 1.75 1.75 1.75h5c.966 0 1.75-.784 1.75-1.75v-.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v.25c0 2.347-1.903 4.25-4.25 4.25h-5C2.903 15 1 13.097 1 10.75v-5C1 3.403 2.903 1.5 5.25 1.5h.25zm8.25-.5c.69 0 1.25.56 1.25 1.25V6.5c0 .69-.56 1.25-1.25 1.25S12.5 7.19 12.5 6.5V5.268L8.884 8.884c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L10.732 3.5H9.5c-.69 0-1.25-.56-1.25-1.25S8.81 1 9.5 1h4.25z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareFilled16.category = 'Arrows';

export default ArrowUpRightFromSquareFilled16;
