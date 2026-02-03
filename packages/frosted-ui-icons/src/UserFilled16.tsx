import * as React from 'react';
import { IconProps } from './types';

export const UserFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 8.75C11.2024 8.75 13.9755 10.6838 14.7734 13.5674C14.9597 14.2408 14.7525 14.8745 14.3457 15.3164C13.9492 15.7469 13.3659 16 12.75 16H3.25C2.63417 15.9999 2.05073 15.7469 1.6543 15.3164C1.24763 14.8746 1.04037 14.2407 1.22656 13.5674C2.02438 10.6839 4.79778 8.75019 8 8.75ZM8 0C10.1262 0 11.8504 1.72349 11.8506 3.84961C11.8506 5.97591 10.1263 7.7002 8 7.7002C5.87393 7.69993 4.15039 5.97574 4.15039 3.84961C4.1506 1.72366 5.87406 0.000265522 8 0Z"
        fill={color}
      />
    </svg>
  );
};

export default UserFilled16;
