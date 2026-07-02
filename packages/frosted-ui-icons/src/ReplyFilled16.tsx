import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.5002 12.8361C8.5002 13.7396 7.43434 14.222 6.75606 13.6251L1.43087 8.9386C0.865489 8.44088 0.865495 7.55937 1.43087 7.06165L6.75606 2.37512L6.8879 2.27649C7.56384 1.84074 8.5002 2.31709 8.5002 3.16418V5.02063C11.1809 5.15731 12.8718 6.04125 13.8537 7.49719C14.8756 9.01269 15.0002 10.9814 15.0002 12.7618C15.0002 13.0743 14.8064 13.3541 14.5139 13.464C14.2214 13.5739 13.8915 13.4911 13.6858 13.256C12.7274 12.1607 11.813 11.615 10.8899 11.3292C10.148 11.0995 9.37288 11.0284 8.5002 11.0079V12.8361Z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled16.category = 'Arrows';

export default ReplyFilled16;
