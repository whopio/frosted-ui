import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C10.7375 1 11.4523 1.25436 12.0244 1.71973L17.8008 6.41797C18.5595 7.03513 19 7.96143 19 8.93945V16.25C19 17.7688 17.7688 19 16.25 19H14.5498C13.6939 18.9999 13.0001 18.3061 13 17.4502V15C13 13.3431 11.6569 12 10 12C8.34315 12 7 13.3431 7 15V17.4502C6.9999 18.3061 6.30609 18.9999 5.4502 19H3.75C2.23122 19 1 17.7688 1 16.25V8.93945C1 7.96143 1.44051 7.03513 2.19922 6.41797L7.97559 1.71973C8.54774 1.25436 9.26249 1 10 1Z"
        fill={color}
      />
    </svg>
  );
};

HomeFilled20.category = 'Buildings';

export default HomeFilled20;
