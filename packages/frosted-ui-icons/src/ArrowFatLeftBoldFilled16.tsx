import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 12V13.2022C9 14.3819 7.58673 14.9875 6.73242 14.1739L1.53027 9.21977C0.833563 8.55623 0.83356 7.44385 1.53027 6.78031L6.73242 1.82621C7.58673 1.01258 9 1.61813 9 2.79789V4.00004H13.1455C14.1697 4.00012 14.9999 4.83036 15 5.85453V10.1455C14.9999 11.1697 14.1697 12 13.1455 12H9Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftBoldFilled16.category = 'Arrows';

export default ArrowFatLeftBoldFilled16;
