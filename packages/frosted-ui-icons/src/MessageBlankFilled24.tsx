import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankFilled24"
      {...props}
    >
      <path
        d="M12.001 1c6.075 0 11 4.925 11 11s-4.925 11-11 11c-1.61 0-3.14-.347-4.52-.97-1.154.253-2.334.545-3.351.81-1.785.467-3.437-1.187-2.97-2.97.265-1.017.555-2.197.808-3.351C1.346 15.139 1 13.609 1 12 1 5.925 5.926 1 12.001 1z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankFilled24.category = 'Communication';

export default MessageBlankFilled24;
