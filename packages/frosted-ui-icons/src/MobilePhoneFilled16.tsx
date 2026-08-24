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
      data-fui-icon="MobilePhoneFilled16"
      {...props}
    >
      <path
        d="M9.5 1C11.433 1 13 2.567 13 4.5v7c0 1.933-1.567 3.5-3.5 3.5h-3C4.567 15 3 13.433 3 11.5v-7C3 2.567 4.567 1 6.5 1h3zm-3 10c-.414 0-.75.336-.75.75s.336.75.75.75h3c.414 0 .75-.336.75-.75S9.914 11 9.5 11h-3z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled16.category = 'Objects';

export default MobilePhoneFilled16;
