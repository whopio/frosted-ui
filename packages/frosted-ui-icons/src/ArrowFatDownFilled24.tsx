import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.5001 11H20.7071C21.8548 11 22.4587 12.3609 21.6886 13.2119L13.4073 22.3633C12.6541 23.1956 11.3461 23.1956 10.5929 22.3633L2.31161 13.2119C1.54151 12.3609 2.14536 11 3.29306 11H6.50009V3.18457C6.50009 1.97832 7.47841 1 8.68466 1H15.3155C16.5218 1 17.5001 1.97832 17.5001 3.18457V11Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownFilled24.category = 'Arrows';

export default ArrowFatDownFilled24;
