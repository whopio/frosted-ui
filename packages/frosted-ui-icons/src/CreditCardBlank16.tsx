import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBlank16"
      {...props}
    >
      <path
        d="M12.85 2.25C14.59 2.25 16 3.66 16 5.4v5.2c0 1.74-1.41 3.15-3.15 3.15h-9.7C1.41 13.75 0 12.34 0 10.6V5.4c0-1.74 1.41-3.15 3.15-3.15h9.7zM1.5 7v3.6c0 .91.74 1.65 1.65 1.65h9.7c.91 0 1.65-.74 1.65-1.65V7h-13zm1.65-3.25c-.91 0-1.65.74-1.65 1.65v.1h13v-.1c0-.91-.74-1.65-1.65-1.65h-9.7z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank16.category = 'Money & Shopping';

export default CreditCardBlank16;
