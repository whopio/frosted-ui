import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquare16"
      {...props}
    >
      <path
        d="M6 2c.414 0 .75.336.75.75s-.336.75-.75.75H4.75C3.507 3.5 2.5 4.507 2.5 5.75v5.5c0 1.243 1.007 2.25 2.25 2.25h5.5c1.243 0 2.25-1.007 2.25-2.25V10c0-.414.336-.75.75-.75s.75.336.75.75v1.25c0 2.071-1.679 3.75-3.75 3.75h-5.5C2.679 15 1 13.321 1 11.25v-5.5C1 3.679 2.679 2 4.75 2H6zm8.25-1c.414 0 .75.336.75.75V6c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.56L8.53 8.53c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l4.97-4.97H10c-.414 0-.75-.336-.75-.75S9.586 1 10 1h4.25z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquare16.category = 'Arrows';

export default ArrowUpRightFromSquare16;
