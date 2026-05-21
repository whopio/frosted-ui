import * as React from 'react';
import { IconProps } from './types';

export const StarFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.04399 0.76267C5.52929 0.044095 6.65174 0.0956113 7.04595 0.916967L8.24028 3.4072L10.9922 3.76853C11.9567 3.89502 12.3494 5.08567 11.6377 5.75779L9.62798 7.65427L10.1329 10.3642C10.312 11.3262 9.29464 12.0547 8.44243 11.5947L6.00103 10.2763L3.55962 11.5947C2.70747 12.0547 1.69007 11.3263 1.86919 10.3642L2.3731 7.65427L0.364307 5.75779C-0.347498 5.08566 0.0453265 3.89498 1.00981 3.76853L3.76079 3.4072L4.9561 0.916967L5.04399 0.76267Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarFilled12.category = 'Interface General';

export default StarFilled12;
