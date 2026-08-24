import * as React from 'react';
import { IconProps } from './types';

export const BanBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanBoldFilled24"
      {...props}
    >
      <path
        d="M20.807 4.606c1.68 2 2.693 4.578 2.693 7.394 0 6.351-5.149 11.5-11.5 11.5-2.816 0-5.394-1.013-7.394-2.693l16.2-16.2zM12 .5c2.815 0 5.393 1.013 7.393 2.692l-16.2 16.2C1.512 17.395.5 14.816.5 12 .5 5.649 5.649.5 12 .5z"
        fill={color}
      />
    </svg>
  );
};

BanBoldFilled24.category = 'Interface General';

export default BanBoldFilled24;
