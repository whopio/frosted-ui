import * as React from 'react';
import { IconProps } from './types';

export const JourneyFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.5 1C28.9853 1 31 3.01472 31 5.5C31 7.98528 28.9853 10 26.5 10C24.2703 10 22.4206 8.37818 22.0635 6.25H7C4.51481 6.2502 2.5002 8.26481 2.5 10.75C2.50003 13.2353 4.5147 15.2508 7 15.251H25.002C28.3151 15.2512 31.0018 17.9368 31.002 21.25C31.0019 24.5633 28.3152 27.2497 25.002 27.25H9.93652C9.57938 29.3782 7.72968 31 5.5 31C3.01472 31 1 28.9853 1 26.5C1 24.0147 3.01472 22 5.5 22C7.72968 22 9.57938 23.6218 9.93652 25.75H25.002C27.4868 25.7497 29.5019 23.7349 29.502 21.25C29.5018 18.7653 27.4867 16.7512 25.002 16.751H7C3.68627 16.7508 1.00003 14.0638 1 10.75C1.0002 7.43638 3.68638 4.7502 7 4.75H22.0635C22.4206 2.62182 24.2703 1 26.5 1Z"
        fill={color}
      />
    </svg>
  );
};

JourneyFilled32.category = 'Interface General';

export default JourneyFilled32;
