import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilled20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.8369 3.33976C17.5903 3.57298 18.1824 4.25767 18.3841 5.12892C18.7485 6.70651 18.75 9.99996 18.75 9.99996C18.75 9.99996 18.75 13.2935 18.3841 14.871C18.1824 15.7423 17.5903 16.427 16.8369 16.6601C15.4727 17.0833 10 17.0833 10 17.0833C10 17.0833 4.52728 17.0833 3.16307 16.6601C2.40966 16.427 1.81758 15.7423 1.6159 14.871C1.25 13.2935 1.25 9.99996 1.25 9.99996C1.25 9.99996 1.25 6.70651 1.6159 5.12892C1.81758 4.25767 2.40966 3.57298 3.16307 3.33976C4.52728 2.91663 10 2.91663 10 2.91663C10 2.91663 15.4727 2.91663 16.8369 3.33976ZM12.9278 10.0002L8.16487 12.7499V7.2505L12.9278 10.0002Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default YoutubeFilled20;
