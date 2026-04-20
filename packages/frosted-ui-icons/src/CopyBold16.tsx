import * as React from 'react';
import { IconProps } from './types';

export const CopyBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.2998 5C13.791 5 15 6.20903 15 7.7002V12.2998C15 13.791 13.791 15 12.2998 15H7.7002C6.20903 15 5 13.791 5 12.2998V7.7002C5 6.20903 6.20903 5 7.7002 5H12.2998ZM7.7002 7C7.3136 7 7 7.3136 7 7.7002V12.2998C7 12.6864 7.3136 13 7.7002 13H12.2998C12.6864 13 13 12.6864 13 12.2998V7.7002C13 7.3136 12.6864 7 12.2998 7H7.7002ZM10 1C10.5523 1 11 1.44772 11 2C11 2.55228 10.5523 3 10 3H3.7002C3.3136 3 3 3.3136 3 3.7002V10C3 10.5523 2.55228 11 2 11C1.44772 11 1 10.5523 1 10V3.7002C1 2.20903 2.20903 1 3.7002 1H10Z"
        fill={color}
      />
    </svg>
  );
};

CopyBold16.category = 'Interface General';

export default CopyBold16;
