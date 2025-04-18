import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.24471 14.2693C14.0578 11.0031 15.3906 7.17807 14.3447 4.56385C13.8332 3.28547 12.7614 2.37281 11.5015 2.0912C10.3559 1.83514 9.09297 2.10875 7.99971 3.03304C6.90644 2.10875 5.64354 1.83514 4.49792 2.09121C3.23801 2.37281 2.1662 3.28548 1.65477 4.56387C0.608901 7.17813 1.94166 11.0031 7.75484 14.2693C7.90691 14.3548 8.09257 14.3548 8.24471 14.2693Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartFilled16;
