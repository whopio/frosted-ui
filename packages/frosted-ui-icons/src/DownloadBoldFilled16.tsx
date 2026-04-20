import * as React from 'react';
import { IconProps } from './types';

export const DownloadBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.75 12.2504C14.5784 12.2504 15.25 12.922 15.25 13.7504C15.2498 14.5787 14.5783 15.2504 13.75 15.2504H2.25C1.42173 15.2504 0.750215 14.5787 0.75 13.7504C0.75 12.922 1.42159 12.2505 2.25 12.2504H13.75ZM8 0.750427C8.82843 0.750427 9.5 1.422 9.5 2.25043V6.62933L10.6895 5.43988C11.2752 4.85409 12.2248 4.85409 12.8105 5.43988C13.3961 6.02568 13.3963 6.97525 12.8105 7.56097L9.06055 11.311C8.77926 11.5922 8.39774 11.7504 8 11.7504C7.65206 11.7504 7.31666 11.6291 7.0498 11.4106L6.93945 11.311L3.18945 7.56097C2.60373 6.97525 2.60385 6.02568 3.18945 5.43988C3.77524 4.85409 4.72476 4.85409 5.31055 5.43988L6.5 6.62933V2.25043C6.5 1.422 7.17157 0.750427 8 0.750427Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DownloadBoldFilled16.category = 'Arrows';

export default DownloadBoldFilled16;
