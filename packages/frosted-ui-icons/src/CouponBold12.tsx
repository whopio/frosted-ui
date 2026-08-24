import * as React from 'react';
import { IconProps } from './types';

export const CouponBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponBold12"
      {...props}
    >
      <path
        d="M4.099 0c.552 0 .964.314 1.192.668l.086.153.052.091c.133.2.346.316.571.317.257 0 .499-.152.623-.408L6.71.668C6.937.314 7.349 0 7.901 0H9c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2H7.901c-.631 0-1.079-.411-1.278-.821-.124-.256-.366-.408-.623-.408s-.499.152-.623.408c-.2.41-.647.82-1.278.821H3c-1.105 0-2-.895-2-2V2c0-1.105.895-2 2-2h1.099zM3 10h.752C4.23 9.269 5.051 8.772 6 8.771c.95 0 1.77.498 2.248 1.229H9V2h-.752C7.769 2.731 6.949 3.229 6 3.229c-.95 0-1.77-.498-2.248-1.229H3v8z"
        fill={color}
      />
    </svg>
  );
};

CouponBold12.category = 'Money & Shopping';

export default CouponBold12;
