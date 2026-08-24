import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceiptBoldFilled20"
      {...props}
    >
      <path
        d="M14.75 0C16.545 0 18 1.455 18 3.25v14.837c0 1.168-1.243 1.915-2.275 1.37l-2.432-1.288-2.494 1.328c-.5.266-1.1.266-1.599 0l-2.487-1.328-2.44 1.289C3.241 20.003 2 19.255 2 18.088V3.25C2 1.455 3.455 0 5.25 0h9.5zM7.001 9c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1h-3zm0-4c-.552 0-1 .448-1 1s.448 1 1 1h6c.552 0 1-.448 1-1s-.448-1-1-1h-6z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBoldFilled20.category = 'Money & Shopping';

export default ReceiptBoldFilled20;
