import * as React from 'react';
import { IconProps } from './types';

export const UploadBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.75 28.2501C30.5784 28.2501 31.25 28.9216 31.25 29.7501C31.25 30.5785 30.5784 31.2501 29.75 31.2501H2.25C1.42159 31.2501 0.750034 30.5785 0.75 29.7501C0.75 28.9216 1.42157 28.2501 2.25 28.2501H29.75ZM14.9395 1.18951C15.5252 0.603728 16.4748 0.603728 17.0605 1.18951L26.8105 10.9395C27.3963 11.5253 27.3963 12.4748 26.8105 13.0606C26.2248 13.6464 25.2752 13.6464 24.6895 13.0606L17.5 5.87115V24.5001C17.5 25.3285 16.8284 26.0001 16 26.0001C15.1716 26.0001 14.5 25.3285 14.5 24.5001V5.87115L7.31055 13.0606C6.72477 13.6464 5.77523 13.6464 5.18945 13.0606C4.60368 12.4748 4.6037 11.5253 5.18945 10.9395L14.9395 1.18951Z"
        fill={color}
      />
    </svg>
  );
};

UploadBoldFilled32.category = 'Arrows';

export default UploadBoldFilled32;
