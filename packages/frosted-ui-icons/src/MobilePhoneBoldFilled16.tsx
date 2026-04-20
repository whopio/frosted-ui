import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.5 1C11.5711 1 13.25 2.67893 13.25 4.75V11.25C13.25 13.3211 11.5711 15 9.5 15H6.5C4.42893 15 2.75 13.3211 2.75 11.25V4.75C2.75 2.67893 4.42893 1 6.5 1H9.5ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11H7Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBoldFilled16.category = 'Objects';

export default MobilePhoneBoldFilled16;
