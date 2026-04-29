import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 3C8.55228 3 9 3.44772 9 4V7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H9V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H7V4C7 3.44772 7.44772 3 8 3Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBold16.category = 'Interface General';

export default PlusSmallBold16;
