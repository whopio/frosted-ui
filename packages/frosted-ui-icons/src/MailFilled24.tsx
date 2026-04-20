import * as React from 'react';
import { IconProps } from './types';

export const MailFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.9062 13.0127C11.6087 13.2932 12.3923 13.2932 13.0947 13.0127L23.999 8.65527V16.25C23.999 19.4256 21.4247 22 18.249 22H5.75C2.5745 21.9998 0 19.4255 0 16.25V8.6543L10.9062 13.0127ZM18.249 2C21.1903 2 23.614 4.20855 23.9561 7.05762L12.5381 11.6191C12.1929 11.757 11.8081 11.757 11.4629 11.6191L0.0419922 7.05664C0.38443 4.20808 2.80919 2.00015 5.75 2H18.249Z"
        fill={color}
      />
    </svg>
  );
};

MailFilled24.category = 'Communication';

export default MailFilled24;
