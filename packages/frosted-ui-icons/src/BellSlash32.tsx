import * as React from 'react';
import { IconProps } from './types';

export const BellSlash32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M13.1605 4.58355V3.84921C13.1605 2.28263 14.4334 1.00979 16 1.00979C17.5665 1.00979 18.8394 2.28263 18.8394 3.84921V4.58355M20.8074 26.1827C20.8074 28.8361 18.6534 30.9902 16 30.9902C13.3466 30.9902 11.1925 28.8361 11.1925 26.1827M1 31L31 1M24.5378 14.5999V12.9256C24.5378 8.38249 21.1011 4.40729 16.5678 4.11355C11.5939 3.79045 7.46204 7.72648 7.46204 12.6318V14.5999C7.46204 15.5888 6.87457 16.5189 5.94441 16.8518C3.94702 17.5764 2.56647 19.5835 2.80146 21.8747C3.05603 24.3616 5.28841 26.1828 7.79494 26.1828H24.2147C26.7114 26.1828 28.9536 24.3616 29.2081 21.8747C29.4431 19.5737 28.0626 17.5764 26.0652 16.8518C25.135 16.5189 24.5476 15.5888 24.5476 14.5999H24.5378Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BellSlash32;
