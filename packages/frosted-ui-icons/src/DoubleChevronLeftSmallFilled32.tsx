import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.8976 10.3109C17.3846 9.82174 17.3828 9.03045 16.8937 8.54337C16.4044 8.05648 15.6131 8.0581 15.1261 8.54728L9.04018 14.6596C8.29581 15.4073 8.29589 16.6169 9.04018 17.3647L15.1261 23.477C15.6132 23.9662 16.4045 23.9679 16.8937 23.4809C17.3829 22.9938 17.3847 22.2025 16.8976 21.7133L11.2218 16.0121L16.8976 10.3109ZM23.1535 10.3109C23.6404 9.82174 23.6387 9.03042 23.1496 8.54337C22.6603 8.05641 21.869 8.05816 21.382 8.54728L15.296 14.6596C14.5516 15.4074 14.5516 16.6168 15.296 17.3647L21.382 23.477C21.8691 23.9662 22.6603 23.9679 23.1496 23.4809C23.6387 22.9938 23.6405 22.2025 23.1535 21.7133L17.4777 16.0121L23.1535 10.3109Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallFilled32.category = 'Arrows';

export default DoubleChevronLeftSmallFilled32;
