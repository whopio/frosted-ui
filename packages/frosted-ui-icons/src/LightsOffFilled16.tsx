import * as React from 'react';
import { IconProps } from './types';

export const LightsOffFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.5 14.5C9.91421 14.5 10.25 14.8358 10.25 15.25C10.25 15.6642 9.91421 16 9.5 16H6.5C6.08579 16 5.75 15.6642 5.75 15.25C5.75 14.8358 6.08579 14.5 6.5 14.5H9.5ZM8 3.25C10.9743 3.25 12.75 5.64855 12.75 8C12.75 9.85573 11.3979 10.9799 10.7744 11.4053C10.7671 11.4103 10.7607 11.4157 10.7559 11.4209C10.7526 11.4243 10.7505 11.4275 10.749 11.4297C10.7401 12.5746 9.81011 13.5 8.66309 13.5H7.33691C6.18989 13.5 5.2589 12.5746 5.25 11.4297C5.24849 11.4275 5.24714 11.4241 5.24414 11.4209C5.23927 11.4157 5.2329 11.4103 5.22559 11.4053C4.60209 10.9799 3.25 9.85573 3.25 8C3.25 5.64855 5.02569 3.25 8 3.25Z"
        fill={color}
      />
    </svg>
  );
};

LightsOffFilled16.category = 'Objects';

export default LightsOffFilled16;
