import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0C12.4183 1.12749e-07 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C1.77176e-07 3.58172 3.58172 0 8 0ZM7.5625 4.84766C6.75469 4.4347 5.75008 5.01468 5.75 5.96484V10.0352C5.75009 11.0485 6.89274 11.6408 7.7207 11.0566L10.6035 9.02148C11.309 8.52347 11.309 7.47654 10.6035 6.97852L7.7207 4.94336L7.5625 4.84766Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayCircleFilled16;
