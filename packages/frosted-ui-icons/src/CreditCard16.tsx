import * as React from 'react';
import { IconProps } from './types';

export const CreditCard16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCard16"
      {...props}
    >
      <path
        d="M12.85 2.25C14.59 2.25 16 3.66 16 5.4v5.2c0 1.74-1.41 3.15-3.15 3.15h-9.7C1.41 13.75 0 12.34 0 10.6V5.4c0-1.74 1.41-3.15 3.15-3.15h9.7zM1.5 10.6c0 .91.74 1.65 1.65 1.65h9.7c.91 0 1.65-.74 1.65-1.65V7h-13v3.6zM7.128 9c.414 0 .75.336.75.75s-.336.75-.75.75h-2.9c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.9zM3.15 3.75c-.91 0-1.65.74-1.65 1.65v.1h13v-.1c0-.91-.74-1.65-1.65-1.65h-9.7z"
        fill={color}
      />
    </svg>
  );
};

CreditCard16.category = 'Money & Shopping';

export default CreditCard16;
