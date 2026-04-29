import * as React from 'react';
import { IconProps } from './types';

export const Ban16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM4.32129 12.7383C5.33738 13.5283 6.61326 14 8 14C11.3137 14 14 11.3137 14 8C14 6.61326 13.5283 5.33738 12.7383 4.32129L4.32129 12.7383ZM8 2C4.68629 2 2 4.68629 2 8C2 9.38625 2.47124 10.6618 3.26074 11.6777L11.6777 3.26074C10.6618 2.47124 9.38625 2 8 2Z"
        fill={color}
      />
    </svg>
  );
};

Ban16.category = 'Interface General';

export default Ban16;
