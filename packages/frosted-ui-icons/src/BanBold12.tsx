import * as React from 'react';
import { IconProps } from './types';

export const BanBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM3.96777 9.44531C4.56341 9.79741 5.25795 10 6 10C8.20914 10 10 8.20914 10 6C10 5.25795 9.79741 4.56341 9.44531 3.96777L3.96777 9.44531ZM6 2C3.79086 2 2 3.79086 2 6C2 6.74157 2.20203 7.43587 2.55371 8.03125L8.03125 2.55371C7.43587 2.20203 6.74157 2 6 2Z"
        fill={color}
      />
    </svg>
  );
};

BanBold12.category = 'Interface General';

export default BanBold12;
