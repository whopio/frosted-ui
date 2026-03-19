import * as React from 'react';
import { IconProps } from './types';

export const MailSquare16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.75 1C13.0972 1 15 2.90279 15 5.25V10.75C15 13.0972 13.0972 15 10.75 15H5.25C2.90279 15 1 13.0972 1 10.75V5.25C1 2.90279 2.90279 1 5.25 1H10.75ZM8.8623 8.84863C8.31217 9.08964 7.68582 9.08982 7.13574 8.84863L2.5 6.81543V10.75C2.5 12.2688 3.73122 13.5 5.25 13.5H10.75C12.2688 13.5 13.5 12.2688 13.5 10.75V6.81445L8.8623 8.84863ZM5.25 2.5C3.75474 2.5 2.54026 3.69342 2.50293 5.17969L7.73828 7.47461C7.90455 7.54751 8.09445 7.54743 8.26074 7.47461L13.4961 5.17871C13.4582 3.69291 12.2449 2.5 10.75 2.5H5.25Z"
        fill={color}
      />
    </svg>
  );
};

MailSquare16.category = 'Communication';

export default MailSquare16;
