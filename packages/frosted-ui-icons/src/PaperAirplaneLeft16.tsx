import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeft16"
      {...props}
    >
      <path
        d="M2.133 9.865C.62 9.082.62 6.92 2.133 6.137l9.379-4.86c2.015-1.045 4.21 1.051 3.261 3.113L13.2 7.807c-.056.122-.056.264 0 .386l1.575 3.42c.95 2.062-1.247 4.158-3.262 3.114l-9.38-4.862zm.69-2.397c-.432.224-.432.841 0 1.065l9.379 4.862c.747.387 1.56-.39 1.209-1.155l-1.574-3.42c-.011-.023-.02-.048-.03-.072h-3.04c-.415 0-.75-.336-.75-.75s.335-.75.75-.75h3.042c.009-.023.017-.047.028-.07l1.574-3.416c.351-.764-.463-1.542-1.21-1.155l-9.378 4.86z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeft16.category = 'Communication';

export default PaperAirplaneLeft16;
