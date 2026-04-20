import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.91309 2.2705C6.79037 0.581093 9.20782 0.581021 10.085 2.2705L14.6924 11.1455C15.8312 13.3398 13.5914 15.7527 11.3184 14.7803L8.08301 13.3955C8.03002 13.373 7.96995 13.3729 7.91699 13.3955L4.67774 14.7812C2.40449 15.7533 0.165307 13.3397 1.30469 11.1455L5.91309 2.2705ZM8.30957 3.19238C8.17894 2.94075 7.81914 2.94077 7.68848 3.19238L3.08008 12.0674C2.80603 12.5951 3.34385 13.1758 3.89063 12.9424L7.00196 11.6113V8.73632C7.00196 8.1842 7.44989 7.73658 8.00196 7.73632C8.55424 7.73632 9.00196 8.18404 9.00196 8.73632V11.6123L12.1055 12.9414C12.6523 13.1753 13.1911 12.5943 12.917 12.0664L8.30957 3.19238Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBold16.category = 'Communication';

export default PaperAirplaneUpBold16;
