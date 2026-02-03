import * as React from 'react';
import { IconProps } from './types';

export const Triangle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.5774 2.10078L19.0261 15.5794C19.6891 16.7791 18.8213 18.25 17.4506 18.25H2.55327C1.18257 18.25 0.314845 16.7791 0.977829 15.5794L8.42652 2.10079C9.11131 0.861634 10.8926 0.861631 11.5774 2.10078Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Triangle20.category = 'Interface General';

export default Triangle20;
