import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1.25C24.1462 1.25 30.75 7.8538 30.75 16C30.75 24.1462 24.1462 30.75 16 30.75C7.8538 30.75 1.25 24.1462 1.25 16C1.25 7.8538 7.8538 1.25 16 1.25ZM12.501 12C11.6725 12 11.001 12.6716 11.001 13.5C11.001 14.3284 11.6725 15 12.501 15H14.501V21H12.5C11.6716 21 11 21.6716 11 22.5C11 23.3284 11.6716 24 12.5 24H19.5C20.3284 24 21 23.3284 21 22.5C21 21.6716 20.3284 21 19.5 21H17.501V13.5C17.501 12.6717 16.8292 12.0003 16.001 12H12.501ZM16 7C15.0335 7 14.25 7.7835 14.25 8.75C14.25 9.7165 15.0335 10.5 16 10.5C16.9665 10.5 17.75 9.7165 17.75 8.75C17.75 7.7835 16.9665 7 16 7Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBoldFilled32.category = 'Product Icons';

export default InfoCircleBoldFilled32;
