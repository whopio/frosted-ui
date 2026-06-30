import * as React from 'react';
import { IconProps } from './types';

export const JourneyFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.75 0C10.9926 0 12 1.00736 12 2.25C12 3.49264 10.9926 4.5 9.75 4.5C8.77067 4.5 7.93999 3.87343 7.63086 3H2.625C2.00368 3 1.5 3.50368 1.5 4.125C1.5 4.74632 2.00368 5.25 2.625 5.25H9.375C10.8247 5.25 12 6.42525 12 7.875C12 9.32475 10.8247 10.5 9.375 10.5H4.36914C4.06001 11.3734 3.22933 12 2.25 12C1.00736 12 0 10.9926 0 9.75C0 8.50736 1.00736 7.5 2.25 7.5C3.22933 7.5 4.06001 8.12657 4.36914 9H9.375C9.99632 9 10.5 8.49632 10.5 7.875C10.5 7.25368 9.99632 6.75 9.375 6.75H2.625C1.17525 6.75 0 5.57475 0 4.125C0 2.67525 1.17525 1.5 2.625 1.5H7.63086C7.93999 0.626571 8.77067 0 9.75 0Z"
        fill={color}
      />
    </svg>
  );
};

JourneyFilled12.category = 'Interface General';

export default JourneyFilled12;
