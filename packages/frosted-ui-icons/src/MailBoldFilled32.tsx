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
        d="M31.999 21.5c0 4.142-3.358 7.5-7.5 7.5H7.5C3.358 29 0 25.642 0 21.5V10.875l14.379 6.375c1.032.457 2.21.458 3.242 0L32 10.875V21.5zM24.499 3c3.553 0 6.526 2.471 7.3 5.788-.044.013-.089.028-.133.048l-14.855 6.586c-.517.229-1.105.228-1.621 0L.334 8.836c-.045-.02-.09-.036-.136-.049C.973 5.471 3.948 3 7.5 3h16.999z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled32.category = 'Communication';

export default MailBoldFilled32;
