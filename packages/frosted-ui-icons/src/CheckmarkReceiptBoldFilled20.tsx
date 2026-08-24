import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceiptBoldFilled20"
      {...props}
    >
      <path
        d="M14.75 0C16.545 0 18 1.455 18 3.25v14.837c0 1.168-1.243 1.916-2.275 1.37l-2.432-1.288-2.494 1.328c-.5.266-1.1.266-1.599 0l-2.487-1.328-2.44 1.29C3.241 20.002 2 19.254 2 18.087V3.25C2 1.455 3.455 0 5.25 0h9.5zm-.793 5.793c-.39-.39-1.024-.39-1.414 0L8.75 9.586 7.457 8.293c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414l2 2c.39.39 1.024.39 1.414 0l4.5-4.5c.39-.39.39-1.023 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled20.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled20;
