import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.36624 6.28028C9.85438 6.76822 10.6457 6.76827 11.1338 6.28028C11.6219 5.79218 11.6218 5.00087 11.1338 4.5127L7.06057 0.439456C6.47479 -0.146308 5.52526 -0.146313 4.93948 0.439456L0.866239 4.5127C0.378172 5.00086 0.378113 5.79215 0.866239 6.28028C1.35438 6.76822 2.14572 6.76828 2.63382 6.28028L6.00003 2.91407L9.36624 6.28028ZM9.36624 11.6299C9.85439 12.118 10.6457 12.118 11.1338 11.6299C11.6219 11.1417 11.6219 10.3504 11.1338 9.86231L7.06057 5.78907C6.47482 5.20333 5.52527 5.20339 4.93948 5.78907L0.866239 9.86231C0.378083 10.3505 0.378083 11.1417 0.866239 11.6299C1.35439 12.118 2.14566 12.118 2.63382 11.6299L6.00003 8.26367L9.36624 11.6299Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpFilled12.category = 'Arrows';

export default DoubleChevronUpFilled12;
