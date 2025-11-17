import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM7.75 8C7.33579 8 7 8.33579 7 8.75C7 9.16421 7.33579 9.5 7.75 9.5H9.25V13.4999H7.75C7.33579 13.4999 7 13.8357 7 14.2499C7 14.6641 7.33579 14.9999 7.75 14.9999H9.99408L10 14.9999L10.0059 14.9999H12.2499C12.6641 14.9999 12.9999 14.6641 12.9999 14.2499C12.9999 13.8357 12.6641 13.4999 12.2499 13.4999H10.75V8.75C10.75 8.33579 10.4142 8 10 8H7.75ZM10 7.00403C10.5523 7.00403 11 6.55631 11 6.00403C11 5.45174 10.5523 5.00403 10 5.00403C9.44771 5.00403 9 5.45174 9 6.00403C9 6.55631 9.44771 7.00403 10 7.00403Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default InfoCircleFilled20;
