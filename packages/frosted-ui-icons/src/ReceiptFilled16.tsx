import * as React from 'react';
import { IconProps } from './types';

export const ReceiptFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5 0C13.8805 0.00019725 15 1.11941 15 2.5V14.7646C15 15.679 14.0503 16.2837 13.2217 15.8975L10.9229 14.8232L8.58887 15.8594C8.21402 16.0257 7.78582 16.025 7.41113 15.8584L5.08789 14.8232L2.77734 15.8994C1.94878 16.2848 1 15.6795 1 14.7656V2.5C1 1.11929 2.11929 0 3.5 0H12.5ZM4.75 7C4.33579 7 4 7.33579 4 7.75C4 8.16421 4.33579 8.5 4.75 8.5H8.25C8.66421 8.5 9 8.16421 9 7.75C9 7.33579 8.66421 7 8.25 7H4.75ZM4.75 3.5C4.33579 3.5 4 3.83579 4 4.25C4 4.66421 4.33579 5 4.75 5H11.25C11.6642 5 12 4.66421 12 4.25C12 3.83579 11.6642 3.5 11.25 3.5H4.75Z"
        fill={color}
      />
    </svg>
  );
};

ReceiptFilled16.category = 'Money & Shopping';

export default ReceiptFilled16;
