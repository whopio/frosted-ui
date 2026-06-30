import * as React from 'react';
import { IconProps } from './types';

export const FountainPenFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M25.3799 17.3436L21.9766 25.8543C21.4253 27.2321 20.1859 28.2159 18.7188 28.4383L2.1084 30.9529L12.3447 20.7166C12.6905 20.8973 13.0838 21.0008 13.501 21.0008C14.8814 21.0006 16.0007 19.8812 16.001 18.5008C16.001 17.1202 14.8815 16.001 13.501 16.0008C12.1203 16.0008 11.001 17.1201 11.001 18.5008C11.0011 18.9176 11.1047 19.3096 11.2852 19.6551L1.04492 29.8953L3.5625 13.285C3.78486 11.8176 4.76761 10.5774 6.14551 10.0262L14.6572 6.62092L25.3799 17.3436ZM17.6533 2.28596C18.4421 0.840266 20.3987 0.558326 21.5635 1.72248L30.2812 10.4393C31.446 11.604 31.1648 13.5616 29.7188 14.3504L26.3457 16.1883L15.8135 5.65607L17.6533 2.28596Z"
        fill={color}
      />
    </svg>
  );
};

FountainPenFilled32.category = 'Interface General';

export default FountainPenFilled32;
