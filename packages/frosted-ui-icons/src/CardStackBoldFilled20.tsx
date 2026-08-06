import * as React from 'react';
import { IconProps } from './types';

export const CardStackBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBoldFilled20"
      {...props}
    >
      <path
        d="M15.4991 7C17.6534 7 19.2966 8.92767 18.9552 11.0547L18.1515 16.0576C17.8787 17.7544 16.414 19.002 14.6954 19.002H5.30187C3.58328 19.0019 2.11854 17.7544 1.84581 16.0576L1.0421 11.0547C0.700716 8.92768 2.34387 7.00002 4.49815 7H15.4991ZM14.7423 4C15.995 4.00014 17.0448 4.7968 17.4444 5.8916C16.8492 5.64011 16.1927 5.50002 15.4991 5.5H4.49815C3.80456 5.5 3.14812 5.64012 2.55284 5.8916C2.95244 4.79672 4.00217 4 5.25499 4H14.7423ZM12.6935 0.999023C13.8041 0.999152 14.7525 1.62525 15.2325 2.52734C15.0719 2.50949 14.9081 2.50002 14.7423 2.5H5.25499C5.08953 2.5 4.92611 2.50958 4.76573 2.52734C5.24594 1.62533 6.19423 0.999202 7.3048 0.999023H12.6935Z"
        fill={color}
      />
    </svg>
  );
};

CardStackBoldFilled20.category = 'Interface General';

export default CardStackBoldFilled20;
