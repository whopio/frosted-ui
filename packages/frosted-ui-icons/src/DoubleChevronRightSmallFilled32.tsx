import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.1019 10.3109C14.6149 9.82174 14.6167 9.03045 15.1058 8.54337C15.5951 8.05648 16.3864 8.0581 16.8734 8.54728L22.9593 14.6596C23.7037 15.4073 23.7036 16.6169 22.9593 17.3647L16.8734 23.477C16.3863 23.9662 15.5951 23.9679 15.1058 23.4809C14.6166 22.9938 14.6148 22.2025 15.1019 21.7133L20.7777 16.0121L15.1019 10.3109ZM8.84605 10.3109C8.35911 9.82174 8.36085 9.03042 8.84995 8.54337C9.33916 8.05641 10.1305 8.05816 10.6175 8.54728L16.7035 14.6596C17.4479 15.4074 17.4479 16.6168 16.7035 17.3647L10.6175 23.477C10.1305 23.9662 9.33919 23.9679 8.84995 23.4809C8.36082 22.9938 8.35901 22.2025 8.84605 21.7133L14.5218 16.0121L8.84605 10.3109Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled32.category = 'Arrows';

export default DoubleChevronRightSmallFilled32;
