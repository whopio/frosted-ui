import * as React from 'react';
import { IconProps } from './types';

export const CopyFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CopyFilled16"
      {...props}
    >
      <path
        d="M12.45 5C13.858 5 15 6.142 15 7.55v4.9c0 1.408-1.142 2.55-2.55 2.55h-4.9C6.142 15 5 13.858 5 12.45v-4.9C5 6.142 6.142 5 7.55 5h4.9zm-4-4c1.392 0 2.521 1.115 2.548 2.5H7.45C5.27 3.5 3.5 5.269 3.5 7.45v3.547C2.115 10.97 1 9.842 1 8.45v-4.9C1 2.142 2.142 1 3.55 1h4.9z"
        fill={color}
      />
    </svg>
  );
};

CopyFilled16.category = 'Interface General';

export default CopyFilled16;
