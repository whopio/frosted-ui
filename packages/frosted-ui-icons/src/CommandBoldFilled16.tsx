import * as React from 'react';
import { IconProps } from './types';

export const CommandBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.75 5.75V3.75C5.75 2.64543 4.85457 1.75 3.75 1.75C2.64543 1.75 1.75 2.64543 1.75 3.75C1.75 4.85457 2.64543 5.75 3.75 5.75H5.75ZM5.75 5.75V10.25M5.75 5.75H10.25M5.75 10.25H10.25M5.75 10.25H3.75C2.64543 10.25 1.75 11.1454 1.75 12.25C1.75 13.3546 2.64543 14.25 3.75 14.25C4.85457 14.25 5.75 13.3546 5.75 12.25V10.25ZM10.25 10.25V5.75M10.25 10.25V12.25C10.25 13.3546 11.1454 14.25 12.25 14.25C13.3546 14.25 14.25 13.3546 14.25 12.25C14.25 11.1454 13.3546 10.25 12.25 10.25H10.25ZM10.25 5.75V3.75C10.25 2.64543 11.1454 1.75 12.25 1.75C13.3546 1.75 14.25 2.64543 14.25 3.75C14.25 4.85457 13.3546 5.75 12.25 5.75H10.25Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CommandBoldFilled16.category = 'Product Icons';

export default CommandBoldFilled16;
