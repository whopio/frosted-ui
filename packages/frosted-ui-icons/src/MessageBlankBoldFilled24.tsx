import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankBoldFilled24"
      {...props}
    >
      <path
        d="M23 12c0 6.075-4.925 11-11 11-1.577 0-3.079-.333-4.438-.933-1.067.236-2.155.504-3.104.751-1.97.513-3.79-1.309-3.276-3.277.247-.949.514-2.038.75-3.107C1.333 15.076 1 13.576 1 12 1 5.925 5.925 1 12 1s11 4.925 11 11z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankBoldFilled24.category = 'Communication';

export default MessageBlankBoldFilled24;
