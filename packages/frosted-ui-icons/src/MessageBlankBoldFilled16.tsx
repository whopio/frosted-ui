import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankBoldFilled16"
      {...props}
    >
      <path
        d="M15 8c0 3.866-3.134 7-7 7-.955 0-1.867-.192-2.7-.54-.548.123-1.102.256-1.6.385-1.53.395-2.941-1.015-2.546-2.546.13-.498.262-1.053.385-1.603C1.192 9.866 1 8.954 1 8c0-3.866 3.134-7 7-7s7 3.134 7 7z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankBoldFilled16.category = 'Communication';

export default MessageBlankBoldFilled16;
