import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.0008 21.75L4.25073 14M12.0008 21.75L19.7506 14M12.0008 21.75V2.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownBoldFilled24.category = 'Arrows';

export default ArrowDownBoldFilled24;
