import * as React from 'react';
import { IconProps } from './types';

export const BanFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.1611 2.89746C15.3094 4.28237 16 6.06042 16 8C16 12.4183 12.4183 16 8 16C6.06042 16 4.28237 15.3094 2.89746 14.1611L14.1611 2.89746ZM8 0C9.93859 0 11.716 0.689721 13.1006 1.83691L1.83691 13.1006C0.689721 11.716 0 9.93859 0 8C0 3.58172 3.58172 0 8 0Z"
        fill={color}
      />
    </svg>
  );
};

BanFilled16.category = 'Interface General';

export default BanFilled16;
