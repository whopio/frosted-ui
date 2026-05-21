import * as React from 'react';
import { IconProps } from './types';

export const UploadBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18 16.9996C18.5522 16.9996 18.9998 17.4475 19 17.9996C19 18.5519 18.5523 18.9996 18 18.9996H2C1.44772 18.9996 1 18.5519 1 17.9996C1.00017 17.4475 1.44782 16.9996 2 16.9996H18ZM9.36914 1.22422C9.76186 0.904081 10.341 0.926669 10.707 1.29258L16.707 7.29257C17.0972 7.68305 17.0973 8.31618 16.707 8.70664C16.3166 9.09708 15.6835 9.09692 15.293 8.70664L11 4.41367V13.9996C11 14.5519 10.5522 14.9996 10 14.9996C9.44772 14.9996 9 14.5519 9 13.9996V4.41367L4.70703 8.70664C4.31651 9.09699 3.68344 9.09707 3.29297 8.70664C2.90265 8.31615 2.90266 7.68306 3.29297 7.29257L9.29297 1.29258L9.36914 1.22422Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBold20.category = 'Arrows';

export default UploadBold20;
