import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9.75 9C9.33579 9 9 9.33579 9 9.75C9 10.1642 9.33579 10.5 9.75 10.5H11.25V16.4999H9.75C9.33579 16.4999 9 16.8357 9 17.2499C9 17.6641 9.33579 17.9999 9.75 17.9999H11.9941L12 17.9999L12.0059 17.9999H14.2499C14.6641 17.9999 14.9999 17.6641 14.9999 17.2499C14.9999 16.8357 14.6641 16.4999 14.2499 16.4999H12.75V9.75C12.75 9.33579 12.4142 9 12 9H9.75ZM12 8.00403C12.5523 8.00403 13 7.55631 13 7.00403C13 6.45174 12.5523 6.00403 12 6.00403C11.4477 6.00403 11 6.45174 11 7.00403C11 7.55631 11.4477 8.00403 12 8.00403Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default InfoCircleFilled24;
