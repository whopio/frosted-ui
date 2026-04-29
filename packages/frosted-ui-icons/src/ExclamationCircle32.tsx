import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2ZM15.999 21.208C16.6203 21.208 17.1239 21.7118 17.124 22.333V22.3584C17.1238 22.9795 16.6202 23.4834 15.999 23.4834C15.3778 23.4834 14.8742 22.9795 14.874 22.3584V22.333C14.8742 21.7118 15.3778 21.208 15.999 21.208ZM15.999 7.64941C16.4132 7.64941 16.749 7.9852 16.749 8.39941V17.583C16.749 17.9972 16.4132 18.333 15.999 18.333C15.5848 18.333 15.249 17.9972 15.249 17.583V8.39941C15.249 7.9852 15.5848 7.64941 15.999 7.64941Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircle32.category = 'Interface General';

export default ExclamationCircle32;
