import * as React from 'react';
import { IconProps } from './types';

export const UploadBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14 12.9999C14.5522 12.9999 15 13.4476 15 13.9999C14.9999 14.5521 14.5522 14.9999 14 14.9999H2C1.44777 14.9999 1.00008 14.5521 1 13.9999C1.00002 13.4476 1.44773 12.9999 2 12.9999H14ZM7.36914 1.2245C7.7619 0.904127 8.3409 0.926761 8.70703 1.29286L12.707 5.29286C13.0974 5.68339 13.0975 6.31643 12.707 6.70692C12.3165 7.09733 11.6835 7.09731 11.293 6.70692L9 4.41395V10.4999C8.99992 11.0521 8.5522 11.4999 8 11.4999C7.4478 11.4999 7.00008 11.0521 7 10.4999V4.41395L4.70703 6.70692C4.31654 7.09736 3.68349 7.09732 3.29297 6.70692C2.90249 6.31641 2.9025 5.68338 3.29297 5.29286L7.29297 1.29286L7.36914 1.2245Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBold16.category = 'Arrows';

export default UploadBold16;
