import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBoldFilled24"
      {...props}
    >
      <path
        d="M10.957 0.186482C11.6298 -0.0621607 12.3702 -0.0621606 13.043 0.186482L21.0352 3.14058C22.2158 3.577 22.9999 4.70219 23 5.9609V13.1572C22.9998 16.4028 20.5115 18.9806 18.1895 20.7099C15.8071 22.4841 13.2665 23.6127 12.5674 23.9082C12.2006 24.0632 11.7994 24.0632 11.4326 23.9082C10.7335 23.6127 8.19289 22.4841 5.81055 20.7099C3.48849 18.9806 1.00022 16.4028 1 13.1572V5.9609C1.00012 4.70219 1.78421 3.577 2.96484 3.14058L10.957 0.186482ZM12 21.9736C12.8524 21.6004 14.9975 20.5931 16.9951 19.1054C19.2482 17.4274 20.9998 15.374 21 13.1572V5.9609C20.9999 5.53936 20.7372 5.16275 20.3418 5.01656L12.3496 2.06246C12.2369 2.02082 12.1185 1.99996 12 1.99996V21.9736Z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBoldFilled24.category = 'Security';

export default ShieldHalfBoldFilled24;
