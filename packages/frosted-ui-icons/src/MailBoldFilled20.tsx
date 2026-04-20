import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.91113 11.1504C9.60733 11.4442 10.3927 11.4443 11.0889 11.1504L19.998 7.3877V13C19.998 15.7614 17.7595 18 14.998 18H5C2.23864 17.9999 0 15.7614 0 13V7.38672L8.91113 11.1504ZM14.998 2C17.1762 2 19.0273 3.39337 19.7129 5.33691L10.3115 9.30762C10.1126 9.3916 9.88739 9.39155 9.68848 9.30762L0.28418 5.33691C0.969666 3.39325 2.8218 2.00006 5 2H14.998Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MailBoldFilled20.category = 'Communication';

export default MailBoldFilled20;
