import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM9.5 9C8.67157 9 8 9.67157 8 10.5C8 11.3284 8.67157 12 9.5 12H10.5V15H9.5C8.67157 15 8 15.6716 8 16.5C8 17.3284 8.67157 18 9.5 18H14.5C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15H13.5V10.5C13.5 9.67157 12.8284 9 12 9H9.5ZM12 4.5C11.0335 4.5 10.25 5.2835 10.25 6.25C10.25 7.2165 11.0335 8 12 8C12.9665 8 13.75 7.2165 13.75 6.25C13.75 5.2835 12.9665 4.5 12 4.5Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBoldFilled24.category = 'Product Icons';

export default InfoCircleBoldFilled24;
