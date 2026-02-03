import * as React from 'react';
import { IconProps } from './types';

export const Triangle16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.27705 2.43853L15.0462 12.5518C15.6052 13.5318 14.8975 14.7502 13.7693 14.7502H2.23111C1.10289 14.7502 0.395227 13.5318 0.954253 12.5518L6.72334 2.43853C7.28742 1.44971 8.71298 1.44971 9.27705 2.43853Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Triangle16;
