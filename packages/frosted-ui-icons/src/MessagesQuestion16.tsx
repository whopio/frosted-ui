import * as React from 'react';
import { IconProps } from './types';

export const MessagesQuestion16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.4998 9.5H12.8346C13.571 9.5 14.168 8.90307 14.168 8.16667V3.83333C14.168 3.09695 13.571 2.5 12.8346 2.5H6.00126C5.26488 2.5 4.66793 3.09695 4.66793 3.83333V5.16667M10.168 5.16667H3.16793C2.43155 5.16667 1.83459 5.76362 1.83459 6.5V10.8333C1.83459 11.5697 2.43155 12.1667 3.16793 12.1667H4.00126V13.8333L7.00129 12.1667H10.168C10.9043 12.1667 11.5013 11.5697 11.5013 10.8333V6.5C11.5013 5.76362 10.9043 5.16667 10.168 5.16667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6584 9.10857C6.7158 8.72673 6.92944 8.52048 7.14359 8.37497C7.353 8.23256 7.56246 8.04776 7.56246 7.70559C7.56246 7.23332 7.18355 6.85083 6.7158 6.85083C6.24799 6.85083 5.86914 7.23332 5.86914 7.70559"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6.22266 10.4275C6.22266 10.7407 6.4766 10.9947 6.78984 10.9947C7.10308 10.9947 7.35702 10.7407 7.35702 10.4275C7.35702 10.1143 7.10308 9.86033 6.78984 9.86033C6.4766 9.86033 6.22266 10.1143 6.22266 10.4275Z"
        fill={color}
      />
    </svg>
  );
};

export default MessagesQuestion16;
