import * as React from 'react';
import { IconProps } from './types';

export const PinFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.4502 1C13.8584 1.00011 14.9999 2.14163 15 3.5498V7.62695C15 7.83109 15.0499 8.03253 15.1455 8.21289L16.7598 11.2549C17.6609 12.9532 16.4295 15 14.5068 15H10.75V18.25C10.75 18.6642 10.4142 19 10 19C9.58583 19 9.25 18.6642 9.25 18.25V15H5.49316C3.57059 14.9999 2.3392 12.9532 3.24023 11.2549L4.85449 8.21289C4.95013 8.03252 5 7.83111 5 7.62695V3.5498C5.00011 2.14166 6.14167 1.00015 7.5498 1H12.4502Z"
        fill={color}
      />
    </svg>
  );
};

PinFilled20.category = 'Interface General';

export default PinFilled20;
