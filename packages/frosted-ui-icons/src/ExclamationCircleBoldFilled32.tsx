import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM15.999 20.875C15.1016 20.875 14.374 21.6025 14.374 22.5V22.5254C14.3742 23.4227 15.1017 24.1504 15.999 24.1504C16.8964 24.1504 17.6238 23.4227 17.624 22.5254V22.5C17.624 21.6025 16.8965 20.875 15.999 20.875ZM15.999 7.02441C15.2396 7.02441 14.624 7.64002 14.624 8.39941V17.25C14.624 18.0094 15.2396 18.625 15.999 18.625C16.7584 18.625 17.374 18.0094 17.374 17.25V8.39941C17.374 7.64002 16.7584 7.02441 15.999 7.02441Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleBoldFilled32.category = 'Interface General';

export default ExclamationCircleBoldFilled32;
