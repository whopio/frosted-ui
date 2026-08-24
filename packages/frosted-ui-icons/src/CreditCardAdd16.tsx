import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAdd16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAdd16"
      {...props}
    >
      <path
        d="M12 8.75c.414 0 .75.336.75.75V11h1.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.5V14c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5V9.5c0-.414.336-.75.75-.75zm-.15-6.25C13.59 2.5 15 3.91 15 5.65V8c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.5h-11v2.85c0 .91.74 1.65 1.65 1.65h3.1c.414 0 .75.336.75.75s-.336.75-.75.75h-3.1C2.41 13.5 1 12.09 1 10.35v-4.7C1 3.91 2.41 2.5 4.15 2.5h7.7zM4.15 4c-.91 0-1.65.74-1.65 1.65V6h11v-.35c0-.91-.74-1.65-1.65-1.65h-7.7z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAdd16.category = 'Money & Shopping';

export default CreditCardAdd16;
