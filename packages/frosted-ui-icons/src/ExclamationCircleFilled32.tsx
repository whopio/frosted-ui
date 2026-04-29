import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM15.999 21.208C15.3778 21.208 14.8742 21.7118 14.874 22.333V22.3584C14.8742 22.9795 15.3778 23.4834 15.999 23.4834C16.6202 23.4834 17.1238 22.9795 17.124 22.3584V22.333C17.1239 21.7118 16.6203 21.208 15.999 21.208ZM15.999 7.64941C15.5848 7.64941 15.249 7.9852 15.249 8.39941V17.583C15.249 17.9972 15.5848 18.333 15.999 18.333C16.4132 18.333 16.749 17.9972 16.749 17.583V8.39941C16.749 7.9852 16.4132 7.64941 15.999 7.64941Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleFilled32.category = 'Interface General';

export default ExclamationCircleFilled32;
