import * as React from 'react';
import { IconProps } from './types';

export const WebcamOffFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOffFilled32"
      {...props}
    >
      <path
        d="M1.22 2.22c.289-.29.755-.293 1.049-.011l22.45 22.451.011.01 4.05 4.05c.293.293.293.768 0 1.06-.293.293-.767.293-1.06 0l-5.313-5.313c-.131-.13-.349-.112-.463.033-1.324 1.674-3.372 2.75-5.671 2.75H8.228C4.236 27.25 1 24.014 1 20.023v-8.045c0-2.3 1.075-4.349 2.75-5.672.145-.115.163-.333.032-.464L1.22 3.28c-.293-.293-.293-.767 0-1.06zm15.053 2.53c3.566 0 6.529 2.584 7.12 5.982.04.232.314.35.5.207l3.705-2.846C28.988 7.024 31 8.015 31 9.769v12.545c0 1.73-1.965 2.727-3.361 1.707l-4.104-3-2.03-1.697L7.442 5.262c-.172-.173-.077-.464.166-.485.204-.018.41-.027.62-.027h8.045z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

WebcamOffFilled32.category = 'Interface General';

export default WebcamOffFilled32;
