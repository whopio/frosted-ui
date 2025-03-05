import * as React from 'react';
import { IconProps } from './types';

export const BellSlash24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M10 3V2.58904C10 1.71233 10.8966 1 12 1C13.1034 1 14 1.71233 14 2.58904V3M16 19C16 21.2077 14.2077 23 12 23C9.79226 23 8 21.2077 8 19M1 23L23 1M18.45 10.6095V9.39672C18.45 6.10579 15.8522 3.22623 12.4256 3.01345C8.66583 2.7794 5.54258 5.63059 5.54258 9.18395V10.6095C5.54258 11.3259 5.09852 11.9997 4.39542 12.2408C2.8856 12.7657 1.84205 14.2196 2.01968 15.8793C2.21211 17.6808 3.89955 19 5.79422 19H18.2058C20.0931 19 21.7879 17.6808 21.9803 15.8793C22.1579 14.2125 21.1144 12.7657 19.6046 12.2408C18.9015 11.9997 18.4574 11.3259 18.4574 10.6095H18.45Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BellSlash24;
