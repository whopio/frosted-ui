import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.16267 1.57833C4.94283 0.78902 3.33337 1.66461 3.33337 3.11753V12.8825C3.33337 14.3354 4.94283 15.211 6.16267 14.4217L13.7083 9.53922C14.8248 8.81675 14.8248 7.18322 13.7083 6.4608L6.16267 1.57833Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayFilled16;
