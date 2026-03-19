import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.0008 2.25L4.25073 10M12.0008 2.25L19.7506 10M12.0008 2.25V21.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpBoldFilled24.category = 'Arrows';

export default ArrowUpBoldFilled24;
