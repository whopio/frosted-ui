import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.5 1C11.5711 1 13.25 2.67893 13.25 4.75V11.25C13.25 13.3211 11.5711 15 9.5 15H6.5C4.42893 15 2.75 13.3211 2.75 11.25V4.75C2.75 2.67893 4.42893 1 6.5 1H9.5ZM6.5 3C5.5335 3 4.75 3.7835 4.75 4.75V11.25C4.75 12.2165 5.5335 13 6.5 13H9.5C10.4665 13 11.25 12.2165 11.25 11.25V4.75C11.25 3.7835 10.4665 3 9.5 3H6.5ZM9 10C9.55228 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBold16.category = 'Objects';

export default MobilePhoneBold16;
