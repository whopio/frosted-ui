import * as React from 'react';
import { IconProps } from './types';

export const BanBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M27.6436 5.76953C30.0439 8.49922 31.5 12.0794 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C12.0794 31.5 8.49922 30.0439 5.76953 27.6436L27.6436 5.76953ZM16 0.5C19.9201 0.5 23.4999 1.95571 26.2295 4.35547L4.35547 26.2295C1.95571 23.4999 0.5 19.9201 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z"
        fill={color}
      />
    </svg>
  );
};

BanBoldFilled32.category = 'Interface General';

export default BanBoldFilled32;
