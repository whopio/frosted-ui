import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceiptBold20"
      {...props}
    >
      <path
        d="M14.75 0C16.545 0 18 1.455 18 3.25v14.837c0 1.168-1.243 1.916-2.275 1.37l-2.432-1.288-2.494 1.328c-.5.266-1.1.266-1.599 0l-2.487-1.328-2.44 1.29C3.241 20.002 2 19.254 2 18.087V3.25C2 1.455 3.455 0 5.25 0h9.5zm-9.5 2C4.56 2 4 2.56 4 3.25v14.09l2.015-1.063.169-.076c.344-.13.725-.13 1.069.002l.168.077L10 17.656l2.588-1.377.169-.077c.4-.153.852-.128 1.237.075L16 17.34V3.25C16 2.56 15.44 2 14.75 2h-9.5zm7.293 4.043c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-4.5 4.5c-.39.39-1.024.39-1.414 0l-2-2c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0L8.75 9.836l3.793-3.793z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptBold20.category = 'Money & Shopping';

export default CheckmarkReceiptBold20;
