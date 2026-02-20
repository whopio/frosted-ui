import * as React from 'react';
import { IconProps } from './types';

export const BarGraph20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M.75 12.0119C.75 11.0388 1.53883 10.25 2.5119 10.25H6.75V19.2498H2.5119C1.53883 19.2498.75 18.461.75 17.4879L.75 12.0119zM13.25 5.75H17.4868C18.4599 5.75 19.2487 6.53883 19.2487 7.5119V17.4881C19.2487 18.4612 18.4599 19.25 17.4868 19.25H13.25V5.75zM6.75 2.5119C6.75 1.53883 7.53883.75 8.5119.75H11.4881C12.4612.75 13.25 1.53883 13.25 2.5119V19.25H6.75V2.5119z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

BarGraph20.category = 'Stats & Charts';

export default BarGraph20;
