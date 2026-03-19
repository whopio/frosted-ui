import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5 0C13.8805 0.00019725 15 1.11941 15 2.5V14.7646C15 15.679 14.0503 16.2837 13.2217 15.8975L10.9229 14.8232L8.58887 15.8594C8.21402 16.0257 7.78582 16.025 7.41113 15.8584L5.08789 14.8232L2.77734 15.8994C1.94878 16.2848 1 15.6795 1 14.7656V2.5C1 1.11929 2.11929 0 3.5 0H12.5ZM5.5 8C4.67157 8 4 8.67157 4 9.5C4 10.3284 4.67157 11 5.5 11H8C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8H5.5ZM5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6H10.5C11.3284 6 12 5.32843 12 4.5C12 3.67157 11.3284 3 10.5 3H5.5Z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBoldFilled16.category = 'Money & Shopping';

export default ReceiptBoldFilled16;
