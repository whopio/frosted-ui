import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBoldFilled32"
      {...props}
    >
      <path
        d="M30.999 21.5c0 4.142-3.358 7.5-7.5 7.5H8.5C4.358 29 1 25.642 1 21.5V11.318l13.379 5.932c1.032.457 2.21.458 3.242 0L31 11.318V21.5zM23.499 3c3.693 0 6.76 2.67 7.382 6.184l-14.07 6.238c-.517.229-1.105.228-1.621 0L1.117 9.182C1.74 5.67 4.807 3 8.5 3h14.999z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled32.category = 'Communication';

export default MailBoldFilled32;
