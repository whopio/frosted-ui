import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.5 0C11.7091 3.22133e-08 13.5 1.79086 13.5 4V12C13.5 14.2091 11.7091 16 9.5 16H6.5C4.29086 16 2.5 14.2091 2.5 12V4C2.5 1.79086 4.29086 3.22128e-08 6.5 0H9.5ZM6.5 12C6.08579 12 5.75 12.3358 5.75 12.75C5.75 13.1642 6.08579 13.5 6.5 13.5H9.5C9.91421 13.5 10.25 13.1642 10.25 12.75C10.25 12.3358 9.91421 12 9.5 12H6.5Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled16.category = 'Objects';

export default MobilePhoneFilled16;
