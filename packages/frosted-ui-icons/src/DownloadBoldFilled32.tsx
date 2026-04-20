import * as React from 'react';
import { IconProps } from './types';

export const DownloadBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.75 28.2502C30.5784 28.2502 31.25 28.9218 31.25 29.7502C31.2499 30.5785 30.5784 31.2502 29.75 31.2502H2.25C1.42163 31.2502 0.750095 30.5785 0.75 29.7502C0.75 28.9218 1.42157 28.2502 2.25 28.2502H29.75ZM16 0.750183C16.8284 0.750183 17.5 1.42176 17.5 2.25018V20.8791L24.6895 13.6896C25.2752 13.1039 26.2248 13.1039 26.8105 13.6896C27.3962 14.2754 27.3963 15.225 26.8105 15.8107L17.0605 25.5607C16.4748 26.1464 15.5252 26.1464 14.9395 25.5607L5.18945 15.8107C4.6037 15.225 4.60375 14.2754 5.18945 13.6896C5.77524 13.1039 6.72476 13.1039 7.31055 13.6896L14.5 20.8791V2.25018C14.5 1.42176 15.1716 0.750183 16 0.750183Z"
        fill={color}
      />
    </svg>
  );
};

DownloadBoldFilled32.category = 'Arrows';

export default DownloadBoldFilled32;
