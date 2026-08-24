import * as React from 'react';
import { IconProps } from './types';

export const Heading24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Heading24"
      {...props}
    >
      <path
        d="M2 2.857C2 2.384 2.384 2 2.857 2H7.43c.473 0 .857.384.857.857 0 .474-.384.857-.857.857H6v7.429h12V3.714h-1.429c-.473 0-.857-.383-.857-.857 0-.473.384-.857.857-.857h4.572c.473 0 .857.384.857.857 0 .474-.384.857-.857.857h-1.429v16.572h1.429c.473 0 .857.383.857.857 0 .473-.384.857-.857.857H16.57c-.473 0-.857-.384-.857-.857 0-.474.384-.857.857-.857H18v-7.429H6v7.429h1.429c.473 0 .857.383.857.857 0 .473-.384.857-.857.857H2.857C2.384 22 2 21.616 2 21.143c0-.474.384-.857.857-.857h1.429V3.714H2.857c-.473 0-.857-.383-.857-.857z"
        fill={color}
      />
    </svg>
  );
};

Heading24.category = 'Text Formatting';

export default Heading24;
