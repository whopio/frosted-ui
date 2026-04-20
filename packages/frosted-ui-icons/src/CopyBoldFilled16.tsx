import * as React from 'react';
import { IconProps } from './types';

export const CopyBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.2998 5C13.791 5 15 6.20903 15 7.7002V12.2998C15 13.791 13.791 15 12.2998 15H7.7002C6.20903 15 5 13.791 5 12.2998V7.7002C5 6.20903 6.20903 5 7.7002 5H12.2998ZM8.2998 1C9.54854 1 10.5966 1.84861 10.9053 3H7.7002C5.10446 3 3 5.10446 3 7.7002V10.9043C1.84874 10.5955 1 9.54845 1 8.2998V3.7002C1 2.20903 2.20903 1 3.7002 1H8.2998Z"
        fill={color}
      />
    </svg>
  );
};

CopyBoldFilled16.category = 'Interface General';

export default CopyBoldFilled16;
