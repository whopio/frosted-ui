import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M6.19703 1.99997H3.16667C1.41777 1.99997 0 3.41773 0 5.16664V6.99997H1.19703L6.19703 1.99997ZM3.31835 6.99997H6.82203L11.822 1.99997H8.31835L3.31835 6.99997ZM20 6.99997H14.4513L18.7814 2.66988C19.5231 3.24944 20 4.15235 20 5.16664V6.99997ZM16.8333 1.99997C16.9906 1.99997 17.1452 2.01144 17.2964 2.03358L12.33 6.99997H8.94335L13.9434 1.99997H16.8333ZM20 8.49997H0V14.8333C0 16.5822 1.41776 18 3.16667 18H16.8333C18.5822 18 20 16.5822 20 14.8333V8.49997ZM7.77283 15.4663V10.3489C7.77283 10.0968 8.04508 9.93871 8.26404 10.0636L12.7704 12.6351C12.9918 12.7614 12.9912 13.0809 12.7692 13.2063L8.26282 15.7523C8.04387 15.876 7.77283 15.7178 7.77283 15.4663Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default VideoFilled20;
