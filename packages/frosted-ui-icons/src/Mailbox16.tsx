import * as React from 'react';
import { IconProps } from './types';

export const Mailbox16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Mailbox16"
      {...props}
    >
      <path
        d="M8.74 1.144c.193-.14.443-.18.671-.106l2.632.854c.312.101.521.394.518.722-.004.328-.22.615-.535.71l-2.096.629V5h1.32C13.32 5 15 6.679 15 8.75v4.498c0 .967-.784 1.75-1.75 1.75H8.5V15l-3.79-.002H2.75c-.966 0-1.75-.783-1.75-1.75V8.75C1 6.692 2.658 5.02 4.712 5H8.43V1.75c0-.24.115-.465.31-.606zM4.75 6.5C3.507 6.5 2.5 7.508 2.5 8.75v4.498c0 .139.112.25.25.25H7V8.75C7 7.508 5.993 6.5 4.75 6.5zm2.999 0c.471.626.751 1.406.751 2.25v4.748h4.75c.138 0 .25-.111.25-.25V8.75c0-1.243-1.008-2.25-2.25-2.25H7.749zM5.5 11c.414 0 .75.336.75.75 0 .415-.336.75-.75.75H4c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75h1.5z"
        fill={color}
      />
    </svg>
  );
};

Mailbox16.category = 'Interface General';

export default Mailbox16;
