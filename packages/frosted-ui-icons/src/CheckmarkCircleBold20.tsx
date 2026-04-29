import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.1515 0.5 19.5 4.84845 19.5 10C19.5 15.1515 15.1515 19.5 10 19.5C4.84845 19.5 0.5 15.1515 0.5 10C0.5 4.84845 4.84845 0.5 10 0.5ZM10 2.5C5.95302 2.5 2.5 5.95302 2.5 10C2.5 14.047 5.95302 17.5 10 17.5C14.047 17.5 17.5 14.047 17.5 10C17.5 5.95302 14.047 2.5 10 2.5ZM13.043 7.04297C13.4335 6.65244 14.0665 6.65244 14.457 7.04297C14.8476 7.43349 14.8476 8.06651 14.457 8.45703L9.20703 13.707C9.0195 13.8946 8.76522 14 8.5 14C8.23478 14 7.9805 13.8946 7.79297 13.707L5.54297 11.457C5.15244 11.0665 5.15244 10.4335 5.54297 10.043C5.93349 9.65244 6.56651 9.65244 6.95703 10.043L8.5 11.5859L13.043 7.04297Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleBold20.category = 'Checkmarks';

export default CheckmarkCircleBold20;
